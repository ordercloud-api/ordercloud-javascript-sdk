import { CancelToken } from 'axios'

export interface RequestOptions {
  /**
   * Alternative token to the one stored in the sdk instance (useful for impersonation).
   */
  accessToken?: string

  /**
   * [Axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
   */
  cancelToken?: CancelToken

  /**
   * Identify the type of request. Useful for error logs.
   */
  requestType?: string
}
