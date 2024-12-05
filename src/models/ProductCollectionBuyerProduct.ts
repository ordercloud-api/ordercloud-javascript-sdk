import { PriceSchedule } from './PriceSchedule';
import { Inventory } from './Inventory';

export interface ProductCollectionBuyerProduct<TProductCollectionBuyerProductXp = any, TPriceScheduleXp = any> {
    ListOrder?: number
    DateAdded?: string
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
    xp?: TProductCollectionBuyerProductXp
}