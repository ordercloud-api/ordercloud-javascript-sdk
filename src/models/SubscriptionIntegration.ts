import { ApiRole } from './ApiRole';

export interface SubscriptionIntegration<TSubscriptionIntegrationXp = any> {
    ApiClientID?: string
    HashKey?: string
    ElevatedRoles?: ApiRole[]
    Active?: boolean
    NotificationDays?: number
    Url?: string
    xp?: TSubscriptionIntegrationXp
    CustomAuthHeaderName?: string
    CustomAuthHeaderValue?: string
}