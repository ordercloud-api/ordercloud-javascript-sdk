import { Order } from './Order';
import { LineItemProduct } from './LineItemProduct';
import { LineItemVariant } from './LineItemVariant';
import { Address } from './Address';
import { LineItemSpec } from './LineItemSpec';

export interface ExtendedLineItem<TExtendedLineItemXp = any, TFromUserXp = any, TBillingAddressXp = any, TOrderXp = any, TProductXp = any, TVariantXp = any, TShippingAddressXp = any, TShipFromAddressXp = any> {
    OrderID?: string
    Order?: Order<TOrderXp,TFromUserXp,TBillingAddressXp>
    ID?: string
    ProductID?: string
    Quantity?: number
    readonly BundleItemID?: string
    readonly IsBundle?: boolean
    readonly DateAdded?: string
    readonly QuantityShipped?: number
    UnitPrice?: number
    readonly PromotionDiscount?: number
    readonly LineTotal?: number
    readonly LineSubtotal?: number
    CostCenter?: string
    DateNeeded?: string
    ShippingAccount?: string
    ShippingAddressID?: string
    ShipFromAddressID?: string
    readonly Product?: LineItemProduct<TProductXp>
    readonly Variant?: LineItemVariant<TVariantXp>
    readonly ShippingAddress?: Address<TShippingAddressXp>
    readonly ShipFromAddress?: Address<TShipFromAddressXp>
    readonly SupplierID?: string
    InventoryRecordID?: string
    readonly PriceScheduleID?: string
    readonly IsOnSale?: boolean
    readonly PriceOverridden?: boolean
    Specs?: LineItemSpec[]
    readonly IncomingOrderID?: string
    readonly OutgoingOrderID?: string
    xp?: TExtendedLineItemXp
}