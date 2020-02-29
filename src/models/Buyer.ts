
export interface Buyer<TBuyerXp = any> {
    ID?: string
    Name: string
    DefaultCatalogID?: string
    Active?: boolean
    xp?: TBuyerXp
}