import { User } from './User';
import { Address } from './Address';

export interface Order<TOrderXp = any, TFromUserXp = any, TBillingAddressXp = any> {
    ID?: string
    readonly FromUser?: User<TFromUserXp>
    FromCompanyID?: string
    ToCompanyID?: string
    FromUserID?: string
    BillingAddressID?: string
    readonly BillingAddress?: Address<TBillingAddressXp>
    ShippingAddressID?: string
    Comments?: string
    readonly LineItemCount?: number
    readonly Status?: 'Unsubmitted' | 'AwaitingApproval' | 'Declined' | 'Open' | 'Completed' | 'Canceled'
    readonly DateCreated?: string
    readonly DateSubmitted?: string
    readonly DateApproved?: string
    readonly DateDeclined?: string
    readonly DateCanceled?: string
    readonly DateCompleted?: string
    readonly Subtotal?: number
    ShippingCost?: number
    TaxCost?: number
    readonly PromotionDiscount?: number
    readonly Total?: number
    readonly IsSubmitted?: boolean
    xp?: TOrderXp
}