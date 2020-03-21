import { VariantInventory } from './VariantInventory';
import { VariantSpec } from './VariantSpec';

export interface Variant<TVariantXp = any> {
    ID?: string
    Name?: string
    Description?: string
    Active?: boolean
    ShipWeight?: number
    ShipHeight?: number
    ShipWidth?: number
    ShipLength?: number
    Inventory?: VariantInventory
    readonly Specs?: VariantSpec[]
    xp?: TVariantXp
}