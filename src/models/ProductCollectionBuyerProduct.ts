import { BuyerPriceSchedule } from './BuyerPriceSchedule';
import { Inventory } from './Inventory';

export interface ProductCollectionBuyerProduct<TProductCollectionBuyerProductXp = any, TPriceSchedule extends BuyerPriceSchedule = BuyerPriceSchedule> {
    ListOrder?: number
    DateAdded?: string
    readonly PriceSchedule?: TPriceSchedule
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
    readonly DateCreated?: string
    xp?: TProductCollectionBuyerProductXp
}