import tokenService from '../api/Tokens'
import Configuration from '../Configuration'
import { SdkHttpRequest, SdkHttpResponse } from '../models/SdkConfiguration'
import paramsSerializer from './paramsSerializer'
import { CancellationError, TimeoutError } from './CancellationError'

/**
 * @ignore
 * not part of public api, don't include in generated docs
 */

interface OcRequestConfig {
  data?: unknown
  params?: { [key: string]: any }
  impersonating?: boolean
  accessToken?: string
  signal?: AbortSignal
  requestType?: string
}

class HttpClient {
  constructor() {
    this.get = this.get.bind(this)
    this.put = this.put.bind(this)
    this.post = this.post.bind(this)
    this.patch = this.patch.bind(this)
    this.delete = this.delete.bind(this)
    this.formPost = this.formPost.bind(this)
    this._resolveToken = this._resolveToken.bind(this)
    this._buildRequestConfig = this._buildRequestConfig.bind(this)
  }

  public get = async (path: string, config?: OcRequestConfig): Promise<any> => {
    return await this.makeApiCall('GET', path, config)
  }

  public post = async (
    path: string,
    config?: OcRequestConfig
  ): Promise<any> => {
    return await this.makeApiCall('POST', path, config)
  }

  public put = async (path: string, config?: OcRequestConfig): Promise<any> => {
    return await this.makeApiCall('PUT', path, config)
  }

  public patch = async (
    path: string,
    config?: OcRequestConfig
  ): Promise<any> => {
    return await this.makeApiCall('PATCH', path, config)
  }

  public delete = async (path: string, config?: OcRequestConfig) => {
    return await this.makeApiCall('DELETE', path, config)
  }

  /**
   * @ignore
   * not part of public api, don't include in generated docs
   */
  public formPost = async (
    url: string,
    body: string,
    options: { signal?: AbortSignal; requestType?: string } = {}
  ): Promise<any> => {
    return await this.send({
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body,
      signal: options.signal,
      requestType: options.requestType,
    })
  }

  private async makeApiCall(
    verb: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE',
    path: string,
    config?: OcRequestConfig
  ) {
    const requestConfig = await this._buildRequestConfig(config)
    const sdkConfig = Configuration.Get()
    // oauth endpoints unlike the rest don't have /{apiVersion}/ appended to them
    const baseApiUrl = path.includes('oauth/')
      ? `${sdkConfig.baseApiUrl}/${path}`
      : `${sdkConfig.baseApiUrl}/${sdkConfig.apiVersion}${path}`
    const query = requestConfig.params
      ? paramsSerializer.serialize(requestConfig.params)
      : ''
    const url = query ? `${baseApiUrl}?${query}` : baseApiUrl
    const hasBody = verb === 'PUT' || verb === 'POST' || verb === 'PATCH'
    const body =
      hasBody && requestConfig.data !== undefined
        ? JSON.stringify(requestConfig.data)
        : undefined
    return await this.send({
      url,
      method: verb,
      headers: requestConfig.headers,
      body,
      signal: requestConfig.signal,
      requestType: requestConfig.requestType,
    })
  }

  private async send(request: SdkHttpRequest): Promise<any> {
    const sdkConfig = Configuration.Get()
    if (sdkConfig.onRequest) {
      request = await sdkConfig.onRequest(request)
    }

    const fetchImpl = sdkConfig.fetch ?? globalThis.fetch
    if (typeof fetchImpl !== 'function') {
      throw new Error(
        'OrderCloud SDK requires a fetch implementation. Provide one with Configuration.Set({ fetch }) or run on a platform that provides global fetch.'
      )
    }

    const timeoutMs = sdkConfig.timeoutInMilliseconds ?? 60 * 1000
    const timeoutSignal = createTimeoutSignal(timeoutMs)
    const signal = request.signal
      ? anySignal([request.signal, timeoutSignal])
      : timeoutSignal
    const init: RequestInit = {
      method: request.method,
      headers: request.headers,
      signal,
    }
    if (request.body !== undefined) {
      init.body = request.body
    }

    let response: Response
    try {
      response = await fetchImpl(request.url, init)
    } catch (error) {
      if (request.signal?.aborted) {
        throw new CancellationError()
      }
      if (timeoutSignal.aborted) {
        throw new TimeoutError()
      }
      throw error
    }

    const data = await readBody(response)
    let transport: SdkHttpResponse = {
      data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      request: { url: request.url, method: request.method },
    }
    if (sdkConfig.onResponse) {
      transport = await sdkConfig.onResponse(transport)
    }
    if (transport.status < 200 || transport.status >= 300) {
      const error: any = new Error(transport.statusText)
      error.response = {
        data: transport.data,
        status: transport.status,
        statusText: transport.statusText,
        headers: transport.headers,
      }
      error.request = transport.request
      throw error
    }
    return transport.data
  }

  // sets the token on every outgoing request, will attempt to
  // refresh the token if the token is expired and there is a refresh token set
  private async _buildRequestConfig(
    config: OcRequestConfig = {}
  ): Promise<{
    headers: Record<string, string>
    data?: unknown
    params?: { [key: string]: any }
    signal?: AbortSignal
    requestType?: string
  }> {
    const token = this._resolveToken(config)
    const validToken = await tokenService.GetValidToken(token)
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${validToken}`,
      },
      data: config.data,
      params: config.params,
      signal: config.signal,
      requestType: config.requestType,
    }
  }

  private _resolveToken(config: OcRequestConfig): string {
    if (config.accessToken) {
      return config.accessToken
    }
    if (config.impersonating) {
      return tokenService.GetImpersonationToken()
    }
    return tokenService.GetAccessToken()
  }
}

function createTimeoutSignal(timeoutMs: number): AbortSignal {
  if (
    typeof AbortSignal !== 'undefined' &&
    typeof AbortSignal.timeout === 'function'
  ) {
    return AbortSignal.timeout(timeoutMs)
  }
  const controller = new AbortController()
  setTimeout(() => {
    controller.abort()
  }, timeoutMs)
  return controller.signal
}

function anySignal(signals: AbortSignal[]): AbortSignal {
  if (
    typeof AbortSignal !== 'undefined' &&
    typeof AbortSignal.any === 'function'
  ) {
    return AbortSignal.any(signals)
  }
  const controller = new AbortController()
  const abort = () => {
    if (!controller.signal.aborted) {
      controller.abort()
    }
  }
  for (const signal of signals) {
    if (signal.aborted) {
      abort()
      break
    }
    signal.addEventListener('abort', abort)
  }
  return controller.signal
}

async function readBody(response: Response): Promise<any> {
  const text = await response.text()
  if (!text) {
    return undefined
  }
  try {
    return JSON.parse(text)
  } catch (e) {
    return text
  }
}

export default new HttpClient()
