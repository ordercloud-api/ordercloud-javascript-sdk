export interface RequestOptions {
  /**
   * Alternative token to the one stored in the sdk instance (useful for impersonation).
   */
  accessToken?: string

  /**
   * [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that can be used to cancel the request.
   */
  signal?: AbortSignal

  /**
   * Identify the type of request. Useful for error logs.
   */
  requestType?: string
}
