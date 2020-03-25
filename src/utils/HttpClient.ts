import axios, { AxiosRequestConfig } from 'axios'
import tokenService from '../api/Tokens'
import Configuration from '../Configuration'
import Auth from '../api/Auth'
import paramsSerializer from './ParamsSerializer'
import parseJwt from './ParseJwt'

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
    // create a new instance so we avoid clashes with any
    // configurations done on default axios instance that
    // a consumer of this SDK might use
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
    this._buildRequestConfig = this._buildRequestConfig.bind(this)
    this._getToken = this._getToken.bind(this)
    this._isTokenExpired = this._isTokenExpired.bind(this)
    this._tokenInterceptor = this._tokenInterceptor.bind(this)
    this._tryRefreshToken = this._tryRefreshToken.bind(this)
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
    const response = await axios[verb as string](
      `${Configuration.Get().baseApiUrl}${path}`,
      requestConfig
    )
    return response.data
  }

  // sets the token on every outgoing request, will attempt to
  // refresh the token if the token is expired and there is a refresh token set
  private async _tokenInterceptor(
    config: OcRequestConfig
  ): Promise<OcRequestConfig> {
    let token = this._getToken(config)
    if (this._isTokenExpired(token)) {
      token = await this._tryRefreshToken(token)
    }
    config.headers.Authorization = `Bearer ${token}`
    return config
  }

  private _getToken(config: OcRequestConfig): string {
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

  private _isTokenExpired(token: string): boolean {
    if (!token) {
      return true
    }
    const decodedToken = parseJwt(token)
    const currentSeconds = Date.now() / 1000
    const currentSecondsWithBuffer = currentSeconds - 10
    return decodedToken.exp < currentSecondsWithBuffer
  }

  private async _tryRefreshToken(accessToken: string): Promise<string> {
    const refreshToken = tokenService.GetRefreshToken()
    if (!refreshToken) {
      return accessToken || ''
    }
    const sdkConfig = Configuration.Get()
    if (!accessToken && !sdkConfig.clientID) {
      return accessToken || ''
    }
    let clientID
    if (accessToken) {
      const decodedToken = parseJwt(accessToken)
      clientID = decodedToken.cid
    }
    if (sdkConfig.clientID) {
      clientID = sdkConfig.clientID
    }
    const refreshRequest = await Auth.RefreshToken(refreshToken, clientID)
    return refreshRequest.access_token
  }

  private _buildRequestConfig(
    config?: OcRequestConfig
  ): Promise<OcRequestConfig> {
    const sdkConfig = Configuration.Get()
    const requestConfig = {
      ...config,
      paramsSerializer,
      timeout: sdkConfig.timeoutInMilliseconds,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    return this._tokenInterceptor(requestConfig)
  }
}

export default new HttpClient()
