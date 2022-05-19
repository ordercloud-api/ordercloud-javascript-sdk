import { ApiRole } from './ApiRole';

export interface ApiClient<TApiClientXp = any> {
    readonly ID?: string
    ClientSecret?: string
    AccessTokenDuration: number
    Active?: boolean
    AppName: string
    RefreshTokenDuration?: number
    DefaultContextUserName?: string
    xp?: TApiClientXp
    AllowAnyBuyer?: boolean
    AllowAnySupplier?: boolean
    AllowSeller?: boolean
    IsAnonBuyer?: boolean
    readonly AssignedBuyerCount?: number
    readonly AssignedSupplierCount?: number
    OrderCheckoutIntegrationEventID?: string
    readonly OrderCheckoutIntegrationEventName?: string
    OrderReturnIntegrationEventID?: string
    readonly OrderReturnIntegrationEventName?: string
    MinimumRequiredRoles?: ApiRole[]
    MinimumRequiredCustomRoles?: string[]
    MaximumGrantedRoles?: ApiRole[]
    MaximumGrantedCustomRoles?: string[]
}