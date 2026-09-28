import { Order } from './Order';
import { LineItemProduct } from './LineItemProduct';
import { LineItemVariant } from './LineItemVariant';
import { Address } from './Address';
import { LineItemSpec } from './LineItemSpec';

export interface ExtendedLineItem<TExtendedLineItemXp = any, TOrder extends Order = Order, TProduct extends LineItemProduct = LineItemProduct, TVariant extends LineItemVariant = LineItemVariant, TShippingAddress extends Address = Address, TShipFromAddress extends Address = Address> {
    OrderID?: string
    Order?: TOrder
    ID?: string
    ProductID?: string
    Quantity?: number
    readonly BundleItemID?: string
    readonly IsBundle?: boolean
    readonly DateAdded?: string
    readonly QuantityShipped?: number
    UnitPrice?: number
    readonly PromotionDiscount?: number
    readonly BaseDiscount?: number
    readonly DiscountID?: string
    readonly LineTotal?: number
    readonly LineSubtotal?: number
    CostCenter?: string
    DateNeeded?: string
    ShippingAccount?: string
    ShippingAddressID?: string
    ShipFromAddressID?: string
    readonly Product?: TProduct
    readonly Variant?: TVariant
    readonly ShippingAddress?: TShippingAddress
    readonly ShipFromAddress?: TShipFromAddress
    readonly SupplierID?: string
    InventoryRecordID?: string
    readonly PriceScheduleID?: string
    readonly IsOnSale?: boolean
    readonly PriceOverridden?: boolean
    Specs?: LineItemSpec[]
    readonly IncomingOrderID?: string
    readonly OutgoingOrderID?: string
    readonly InvitationID?: string
    xp?: TExtendedLineItemXp
}