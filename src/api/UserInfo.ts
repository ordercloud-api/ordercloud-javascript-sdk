import { IdentityToken } from '../models/IdentityToken'
import { RequiredDeep } from '../models/RequiredDeep'
import { RequestOptions } from '../models/RequestOptions'
import http from '../utils/HttpClient'
import OrderCloudError from '../utils/OrderCloudError'

class UserInfo {
  private impersonating: boolean = false

  /**
   * @ignore
   * not part of public api, don't include in generated docs
   */
  constructor() {
    this.GetToken = this.GetToken.bind(this)
  }

  /**
   * Get the identity token for an OrderCloud user. Used for Discover 2 integration.
   *
   * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
   * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
   * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
   */
  public async GetToken(
    requestOptions: RequestOptions = {}
  ): Promise<RequiredDeep<IdentityToken>> {
    const impersonating = this.impersonating
    this.impersonating = false
    return await http
      .get(`oauth/userinfo`, {
        ...requestOptions,
        impersonating,
      })
      .catch(ex => {
        if (ex.response) {
          throw new OrderCloudError(ex)
        }
        throw ex
      })
  }

  /**
   * @description
   * enables impersonation by calling the subsequent method with the stored impersonation token
   *
   * @example
   * UserInfo.As().Get() // Gets userinfo token for the impersonated users' token
   */
  public As(): this {
    this.impersonating = true
    return this
  }
}

export default new UserInfo()
