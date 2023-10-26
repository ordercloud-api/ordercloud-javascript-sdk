import { PriceSchedule } from './PriceSchedule';
import { Inventory } from './Inventory';

export interface BuyerProduct<TBuyerProductXp = any, TPriceScheduleXp = any> {
    readonly PriceSchedule?: PriceSchedule<TPriceScheduleXp>
    ID?: string
    ParentID?: string
    IsParent?: boolean
    readonly IsBundle?: boolean
    Name?: string
    Description?: string
    QuantityMultiplier?: number
    ShipWeight?: number
    ShipHeight?: number
    ShipWidth?: number
    ShipLength?: number
    Active?: boolean
    readonly SpecCount?: number
    readonly VariantCount?: number
    ShipFromAddressID?: string
    Inventory?: Inventory
    DefaultSupplierID?: string
    AllSuppliersCanSell?: boolean
    Returnable?: boolean
    xp?: TBuyerProductXp
}