/* eslint-disable no-var */
import { AccessToken } from '../models/AccessToken'
import Configuration from '../Configuration'
import { ApiRole } from '../models/ApiRole'
import paramsSerializer from '../utils/paramsSerializer'
import { RequiredDeep } from '../models/RequiredDeep'
import OrderCloudError from '../utils/OrderCloudError'
import http from '../utils/HttpClient'

/**
 * @ignore
 * not part of public api, don't include in generated docs
 *
 * Standard roles, then a space, then custom roles. Omitted when both lists are empty.
 */
function resolveAuthScope(
  scope?: ApiRole[],
  customRoles?: string[]
): string | undefined {
  if (scope && !Array.isArray(scope)) {
    throw new Error('scope must be a string array')
  }
  if (customRoles != null && !Array.isArray(customRoles)) {
    throw new Error('custom roles must be defined as a string array')
  }

  if (scope?.length && customRoles?.length) {
    return `${scope.join(' ')} ${customRoles.join(' ')}`
  }
  if (scope?.length) {
    return scope.join(' ')
  }
  if (customRoles?.length) {
    return customRoles.join(' ')
  }
  return undefined
}

interface AuthRequestOptions {
  customRoles?: string[]
  anonuserid?: string
  signal?: AbortSignal
  requestType?: string
}

async function postToken(
  body: { [key: string]: any },
  requestOptions: AuthRequestOptions = {}
): Promise<any> {
  const configuration = Configuration.Get()
  try {
    return await http.formPost(
      `${configuration.baseApiUrl}/oauth/token`,
      paramsSerializer.serialize(body),
      {
        signal: requestOptions.signal,
        requestType: requestOptions.requestType,
      }
    )
  } catch (e) {
    if (e.response) {
      throw new OrderCloudError(e)
    }
    throw e
  }
}

class Auth {
  constructor() {
    /**
     * @ignore
     * not part of public api, don't include in generated docs
     */
    this.Anonymous = this.Anonymous.bind(this)
    this.ClientCredentials = this.ClientCredentials.bind(this)
    this.ElevatedLogin = this.ElevatedLogin.bind(this)
    this.Login = this.Login.bind(this)
    this.RefreshToken = this.RefreshToken.bind(this)
  }

  /**
   * @description this workflow is most appropriate for client apps where user is a human, ie a registered user
   *
   * @param username of the user logging in
   * @param password of the user logging in
   * @param client_id of the application the user is logging into
   * @param scope optional roles being requested, if omitted will return all assigned roles
   * @param requestOptions.customRoles optional custom roles being requested - string array
   * @param requestOptions.signal Provide an [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that can be used to cancel the request.
   * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
   */
  public async Login(
    username: string,
    password: string,
    clientID: string,
    scope?: ApiRole[],
    requestOptions: AuthRequestOptions = {}
  ): Promise<RequiredDeep<AccessToken>> {
    const { customRoles } = requestOptions
    const body = {
      grant_type: 'password',
      username,
      password,
      client_id: clientID,
      scope: resolveAuthScope(scope, customRoles),
    }
    return await postToken(body, requestOptions)
  }

  /**
   * @description similar to login except client secret is also required, adding another level of security
   *
   * @param clientSecret of the application
   * @param username of the user logging in
   * @param password of the user logging in
   * @param clientID of the application the user is logging into
   * @param scope roles being requested - space delimited string or array
   * @param requestOptions.customRoles optional custom roles being requested - string array
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   * @param requestOptions.signal Provide an [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that can be used to cancel the request.
   * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
   */
  public async ElevatedLogin(
    clientSecret: string,
    username: string,
    password: string,
    clientID: string,
    scope?: ApiRole[],
    requestOptions: AuthRequestOptions = {}
  ): Promise<RequiredDeep<AccessToken>> {
    const { customRoles } = requestOptions
    const body = {
      grant_type: 'password',
      scope: resolveAuthScope(scope, customRoles),
      client_id: clientID,
      username,
      password,
      client_secret: clientSecret,
    }
    return await postToken(body, requestOptions)
  }

  /**
   * @description this workflow is best suited for a backend system
   *
   * @param clientSecret of the application
   * @param clientID of the application the user is logging into
   * @param scope roles being requested - space delimited string or array
   * @param requestOptions.customRoles optional custom roles being requested - string array
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   * @param requestOptions.signal Provide an [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that can be used to cancel the request.
   * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
   */
  public async ClientCredentials(
    clientSecret: string,
    clientID: string,
    scope?: ApiRole[],
    requestOptions: AuthRequestOptions = {}
  ): Promise<RequiredDeep<AccessToken>> {
    const { customRoles } = requestOptions
    const body = {
      grant_type: 'client_credentials',
      scope: resolveAuthScope(scope, customRoles),
      client_id: clientID,
      client_secret: clientSecret,
    }
    return await postToken(body, requestOptions)
  }

  /**
   * @description extend your users' session by getting a new access token with a refresh token. refresh tokens must be enabled in the dashboard
   *
   * @param refreshToken of the application
   * @param clientID of the application the user is logging into
   * @param requestOptions.signal Provide an [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that can be used to cancel the request.
   * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
   */
  public async RefreshToken(
    refreshToken: string,
    clientID: string,
    requestOptions: AuthRequestOptions = {}
  ): Promise<RequiredDeep<AccessToken>> {
    const body = {
      grant_type: 'refresh_token',
      client_id: clientID,
      refresh_token: refreshToken,
    }
    return await postToken(body, requestOptions)
  }

  /**
   * @description allow users to browse your catalog without signing in - must have anonymous template user set in dashboard
   *
   * @param clientID of the application the user is logging into
   * @param scope roles being requested - space delimited string or array
   * @param requestOptions.customRoles optional custom roles being requested - string array
   * @param requestOptions.anonuserid Provide an externally generated id to track this user session, used specifically for the tracking events feature for integrating with Send and Discover
   * @param requestOptions.signal Provide an [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that can be used to cancel the request.
   * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
   */
  public async Anonymous(
    clientID: string,
    scope?: ApiRole[],
    requestOptions: AuthRequestOptions = {}
  ): Promise<RequiredDeep<AccessToken>> {
    const { customRoles, anonuserid } = requestOptions
    const body = {
      grant_type: 'client_credentials',
      client_id: clientID,
      scope: resolveAuthScope(scope, customRoles),
    }
    if (anonuserid) {
      body['anonuserid'] = anonuserid
    }
    return await postToken(body, requestOptions)
  }
}

export default new Auth()
