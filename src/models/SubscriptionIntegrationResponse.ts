
export interface SubscriptionIntegrationResponse<TSubscriptionIntegrationResponseXp = any> {
    HttpStatusCode?: number
    UnhandledErrorBody?: string
    xp?: TSubscriptionIntegrationResponseXp
    Succeeded?: boolean
}