
export interface ProductSupplier<TProductSupplierXp = any> {
    DefaultPriceScheduleID?: string
    ID?: string
    Name?: string
    Active?: boolean
    readonly DateCreated?: string
    AllBuyersCanOrder?: boolean
    xp?: TProductSupplierXp
}