export interface SdkHttpRequest {
  url: string
  method: string
  headers: Record<string, string>
  body?: string
  signal?: AbortSignal
  /**
   * Caller-supplied label from `requestOptions.requestType`. Not sent on the wire.
   */
  requestType?: string
}

export interface SdkHttpResponse {
  data: any
  status: number
  statusText: string
  headers: Headers
  request: { url: string; method: string }
}

export interface SdkConfiguration {
  /**
   * The apiurl that will be used to talk to the ordercloud API.
   * It may be useful to change this to interact with different environments
   * This URL can be found on your dashboard or in the upper right hand context menu of your OrderCloud application in Sitecore Portal.
   *
   * Defaults to: https://api.ordercloud.io
   */
  baseApiUrl?: string

  /**
   * At the time of writing there is only one version of the API
   *
   * Defaults to: v1
   */
  apiVersion?: string

  /**
   * when set is used to call the refresh token endpoint to obtain a new access
   * token when exired (provided a refresh token is set in the sdk)
   * this functionality is only intended for users that interact
   * with at most one client per sdk instance
   */
  clientID?: string

  /**
   * specifies the number of milliseconds before the request times out.
   * If the request takes longer than `timeoutInMilliseconds`, the request will be aborted.
   * Default timeout is 60,000 milliseconds or 60 seconds
   */
  timeoutInMilliseconds?: number

  /**
   * Optional fetch implementation. Defaults to the platform global `fetch`.
   * Use this to mock, cache, or reroute HTTP.
   */
  fetch?: (input: string, init?: RequestInit) => Promise<Response>

  /**
   * Runs before a request is sent. Return the request that should be sent.
   */
  onRequest?: (
    request: SdkHttpRequest
  ) => SdkHttpRequest | Promise<SdkHttpRequest>

  /**
   * Runs after a response is received and before the SDK returns data or throws.
   */
  onResponse?: (
    response: SdkHttpResponse
  ) => SdkHttpResponse | Promise<SdkHttpResponse>

  cookieOptions?: CookieOptions
}

export interface CookieOptions {
  /**
   * The cookie will be available only for this domain and its sub-domains
   */
  domain?: string

  /**
   * If true, then the cookie will only be available through a
   * secured connection (generally https)
   */
  secure?: boolean

  /**
   * Defines protocol for how cookies should be sent
   * in first or third party contexts https://adzerk.com/blog/chrome-samesite/
   */
  samesite?: 'none' | 'lax' | 'strict'

  /**
   * prefix for all cookies set by ordercloud
   */
  prefix?: string

  /**
   * defines which paths on the domain the cookie will be accessible on
   * defaults to '/' which means it is available on all paths in the domain
   */
  path?: string
}
