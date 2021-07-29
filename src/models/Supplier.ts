
export interface Supplier<TSupplierXp = any> {
    ID?: string
    Name: string
    Active?: boolean
    readonly DateCreated?: string
    AllBuyersCanOrder?: boolean
    xp?: TSupplierXp
}