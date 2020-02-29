import { LineItemProduct } from './LineItemProduct';
import { LineItemVariant } from './LineItemVariant';
import { Address } from './Address';
import { LineItemSpec } from './LineItemSpec';

export interface LineItem<TLineItemXp = any, TProductXp = any, TVariantXp = any, TShippingAddressXp = any, TShipFromAddressXp = any> {
    ID?: string
    ProductID: string
    Quantity: number
    readonly DateAdded?: string
    readonly QuantityShipped?: number
    UnitPrice?: number
    readonly LineTotal?: number
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
    Specs?: LineItemSpec[]
    xp?: TLineItemXp
}