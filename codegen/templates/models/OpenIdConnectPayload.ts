import { Environment } from './Environment'
import { OpenIdConnect } from './OpenIdConnect'
import { OpenIdConnectTokenResponse } from './OpenIdConnectTokenResponse'
import { User } from './User'

export interface OpenIdConnectPayload<TConfigData = any> {
  ExistingUser?: User
  OpenIdConnect?: OpenIdConnect
  TokenResponse?: OpenIdConnectTokenResponse
  Environment?: Environment
  OrderCloudAccessToken?: string
  ConfigData?: TConfigData
}
