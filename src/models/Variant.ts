import { VariantInventory } from './VariantInventory';

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
    xp?: TVariantXp
}