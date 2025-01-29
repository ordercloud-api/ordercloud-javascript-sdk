import { Inventory } from './Inventory';

export interface ProductCollectionProduct<TProductCollectionProductXp = any> {
    ListOrder?: number
    DateAdded?: string
    OwnerID?: string
    DefaultPriceScheduleID?: string
    AutoForward?: boolean
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
    xp?: TProductCollectionProductXp
}