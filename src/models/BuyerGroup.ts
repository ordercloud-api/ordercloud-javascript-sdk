
export interface BuyerGroup<TBuyerGroupXp = any> {
    ID?: string
    Name: string
    Description?: string
    DefaultCatalogID?: string
    xp?: TBuyerGroupXp
}