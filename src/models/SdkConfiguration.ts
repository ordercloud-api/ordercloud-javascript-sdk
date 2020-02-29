export interface SdkConfiguration {
  /**
   * the path that will be used to talk to the ordercloud api.
   * It may be useful to change this to interact with different
   * environments or different versions of the api. At the time of writing
   * there is only one version of the api.
   */
  baseApiUrl?: string

  /**
   * the path that will be used to authenticate into ordercloud api.
   * It may be useful to change this to interact with different
   * environments or different versions of the api. At the time of writing
   * there is only one version of the api.
   */
  baseAuthUrl?: string

  /**
   * `timeout` specifies the number of milliseconds before the request times out.
   * If the request takes longer than `timeout`, the request will be aborted.
   */
  timeoutInMilliseconds?: number

  /**
   * when set is used to call the refresh token endpoint to obtain a new access
   * token when exired (provided a refresh token is set in the sdk)
   * this functionality is only intended for users that interact
   * with at most one client per sdk instance
   */
  clientID?: string
}
