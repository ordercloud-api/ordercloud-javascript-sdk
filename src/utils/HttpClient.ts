import axios, { AxiosRequestConfig } from 'axios'
import tokenService from '../api/Tokens'
import Configuration from '../Configuration'
import paramsSerializer from './ParamsSerializer'

/**
 * @ignore
 * not part of public api, don't include in generated docs
 */

interface OcRequestConfig extends AxiosRequestConfig {
  impersonating?: boolean
  accessToken?: string
}
class HttpClient {
  constructor() {
    if (typeof axios === 'undefined') {
      throw new Error(
        'Missing required peer dependency axios. This must be installed and loaded before the OrderCloud SDK'
      )
    }

    this.get = this.get.bind(this)
    this.put = this.put.bind(this)
    this.post = this.post.bind(this)
    this.patch = this.patch.bind(this)
    this.delete = this.delete.bind(this)
    this._resolveToken = this._resolveToken.bind(this)
    this._buildRequestConfig = this._buildRequestConfig.bind(this)
    this._addTokenToConfig = this._addTokenToConfig.bind(this)
  }

  public get = async (path: string, config?: OcRequestConfig): Promise<any> => {
    return await this.makeApiCall('get', path, config)
  }

  public post = async (
    path: string,
    config?: OcRequestConfig
  ): Promise<any> => {
    return await this.makeApiCall('post', path, config)
  }

  public put = async (path: string, config?: OcRequestConfig): Promise<any> => {
    return await this.makeApiCall('put', path, config)
  }

  public patch = async (
    path: string,
    config?: OcRequestConfig
  ): Promise<any> => {
    return await this.makeApiCall('patch', path, config)
  }

  public delete = async (path: string, config: OcRequestConfig) => {
    return await this.makeApiCall('delete', path, config)
  }

  private async makeApiCall(
    verb: 'get' | 'put' | 'post' | 'patch' | 'delete',
    path,
    config
  ) {
    const requestConfig = await this._buildRequestConfig(config)
    // oauth endpoints unlike the rest don't have /{apiVersion}/ appended to them
    const baseApiUrl = path.includes('oauth/')
      ? `${Configuration.Get().baseApiUrl}/${path}`
      : `${Configuration.Get().baseApiUrl}/${
          Configuration.Get().apiVersion
        }${path}`
    if (verb === 'put' || verb === 'post' || verb === 'patch') {
      const requestBody = requestConfig.data
      delete requestConfig.data
      const response = await axios[verb as string](
        baseApiUrl,
        requestBody,
        requestConfig
      )
      return response.data
    } else {
      const response = await axios[verb as string](baseApiUrl, requestConfig)
      return response.data
    }
  }

  // sets the token on every outgoing request, will attempt to
  // refresh the token if the token is expired and there is a refresh token set
  private async _addTokenToConfig(
    config: OcRequestConfig
  ): Promise<OcRequestConfig> {
    const token = this._resolveToken(config)
    const validToken = await tokenService.GetValidToken(token)
    if (!config.headers) {
      config.headers = {}
    }
    config.headers.Authorization = `Bearer ${validToken}`
    return config
  }

  private _resolveToken(config: OcRequestConfig): string {
    let token
    if (config['accessToken']) {
      token = config['accessToken']
    } else if (config['impersonating']) {
      token = tokenService.GetImpersonationToken()
    } else {
      token = tokenService.GetAccessToken()
    }

    // remove these custom parameters that axios doesn't understand
    // we were storing on the axios config for simplicity
    delete config['accessToken']
    delete config['impersonating']
    return token
  }

  private _buildRequestConfig(
    config?: OcRequestConfig
  ): Promise<OcRequestConfig> {
    const sdkConfig = Configuration.Get()
    const requestConfig: OcRequestConfig = {
      ...config,
      paramsSerializer,
      adapter: sdkConfig.axiosAdapter,
      timeout: sdkConfig.timeoutInMilliseconds,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    return this._addTokenToConfig(requestConfig)
  }
}

export default new HttpClient()
