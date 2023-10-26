
export interface Bundle<TBundleXp = any> {
    ID?: string
    OwnerID?: string
    Name: string
    Description?: string
    Active?: boolean
    xp?: TBundleXp
}