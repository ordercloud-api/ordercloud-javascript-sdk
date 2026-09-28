import { LineItemProduct } from './LineItemProduct';
import { LineItemVariant } from './LineItemVariant';
import { LineItemSpec } from './LineItemSpec';

export interface ShipmentItem<TShipmentItemXp = any, TProduct extends LineItemProduct = LineItemProduct, TVariant extends LineItemVariant = LineItemVariant> {
    OrderID?: string
    LineItemID?: string
    QuantityShipped?: number
    readonly UnitPrice?: number
    readonly CostCenter?: string
    readonly DateNeeded?: string
    readonly Product?: TProduct
    readonly Variant?: TVariant
    readonly Specs?: LineItemSpec[]
    readonly xp?: TShipmentItemXp
}