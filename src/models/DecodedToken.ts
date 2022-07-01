export interface DecodedToken {
  /**
   * the ordercloud username
   */
  usr: string

  /**
   * the client id used when making token request
   */
  cid: string

  /**
   * helpful for identifying user types in an app
   * that may have more than one
   */
  usrtype: 'admin' | 'buyer' | 'supplier'

  /**
   * list of security profile roles that this user
   * has access to. This may include OrderCloud roles or custom roles. read more about security profile roles
   * [here](https://ordercloud.io/knowledge-base/security-profiles)
   */
  role: string[] | string // if only one role exists then it is encoded as a string

  /**
   * the issuer of the token - should always be https://auth.ordercloud.io
   */
  iss: string

  /**
   * the audience - who should be consuming this token
   * this should always be https://api.ordercloud.io (the ordercloud api)
   */
  aud: string

  /**
   * expiration of the token (in seconds) since the
   * UNIX epoch (January 1, 1970 00:00:00 UTC)
   */
  exp: number

  /**
   * point at which token was issued (in seconds) since the
   * UNIX epoch (January 1, 1970 00:00:00 UTC)
   */
  nbf: number

  /**
   * the order id assigned to the anonymous user,
   * this value will *only* exist for anonymous users
   */
  orderid?: string
}
