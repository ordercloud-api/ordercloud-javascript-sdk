import { User } from './User';
import { Address } from './Address';
import { OrderStatus } from './OrderStatus';

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
    readonly Status?: OrderStatus
    readonly DateCreated?: string
    readonly DateSubmitted?: string
    readonly DateApproved?: string
    readonly DateDeclined?: string
    readonly DateCanceled?: string
    readonly DateCompleted?: string
    readonly LastUpdated?: string
    readonly Subtotal?: number
    ShippingCost?: number
    TaxCost?: number
    readonly PromotionDiscount?: number
    readonly Currency?: string
    readonly Total?: number
    readonly IsSubmitted?: boolean
    xp?: TOrderXp
}