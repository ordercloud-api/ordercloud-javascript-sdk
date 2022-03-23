import { LineItem } from './LineItem';
import { User } from './User';
import { Address } from './Address';
import { OrderStatus } from './OrderStatus';

export interface ExtendedOrder<TExtendedOrderXp = any, TProductXp = any, TVariantXp = any, TShippingAddressXp = any, TShipFromAddressXp = any, TLineItemsXp = any, TFromUserXp = any, TBillingAddressXp = any> {
    LineItems?: LineItem<TLineItemsXp,TProductXp,TVariantXp,TShippingAddressXp,TShipFromAddressXp>[]
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
    xp?: TExtendedOrderXp
}