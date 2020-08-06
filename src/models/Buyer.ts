
export interface Buyer<TBuyerXp = any> {
    ID?: string
    Name: string
    DefaultCatalogID?: string
    Active?: boolean
    readonly DateCreated?: string
    xp?: TBuyerXp
}