import { LineItemProduct } from './LineItemProduct';
import { LineItemVariant } from './LineItemVariant';
import { LineItemSpec } from './LineItemSpec';

export interface ShipmentItem<TShipmentItemXp = any, TProductXp = any, TVariantXp = any> {
    OrderID?: string
    LineItemID?: string
    QuantityShipped?: number
    readonly UnitPrice?: number
    readonly CostCenter?: string
    readonly DateNeeded?: string
    readonly Product?: LineItemProduct<TProductXp>
    readonly Variant?: LineItemVariant<TVariantXp>
    readonly Specs?: LineItemSpec[]
    readonly xp?: TShipmentItemXp
}