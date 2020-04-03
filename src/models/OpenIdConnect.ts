
export interface OpenIdConnect {
    ID?: string
    OrderCloudApiClientID: string
    ConnectClientID: string
    ConnectClientSecret: string
    AppStartUrl: string
    AuthorizationEndpoint: string
    TokenEndpoint: string
    UrlEncoded?: boolean
    IntegrationEventID?: string
    readonly IntegrationEventName?: string
    AdditionalIdpScopes?: string[]
}