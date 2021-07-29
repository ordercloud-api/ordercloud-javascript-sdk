
export interface Catalog<TCatalogXp = any> {
    ID?: string
    OwnerID?: string
    Name: string
    Description?: string
    Active?: boolean
    readonly CategoryCount?: number
    xp?: TCatalogXp
}