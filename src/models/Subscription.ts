import { SubscriptionInterval } from './SubscriptionInterval';
import { SubscriptionPayment } from './SubscriptionPayment';

export interface Subscription<TSubscriptionXp = any> {
    ID?: string
    Frequency?: number
    Interval?: SubscriptionInterval
    NextOrderDate?: string
    readonly LastOrderDate?: string
    readonly NotificationDate?: string
    readonly DateCreated?: string
    EndDate?: string
    Active?: boolean
    FromCompanyID?: string
    FromUserID?: string
    ToCompanyID?: string
    Payment?: SubscriptionPayment
    BillingAddressID?: string
    ShippingAddressID?: string
    xp?: TSubscriptionXp
}