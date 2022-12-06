
export interface ProductFacet<TProductFacetXp = any> {
    ID?: string
    Name: string
    XpPath?: string
    ListOrder?: number
    MinCount?: number
    xp?: TProductFacetXp
}