
export interface Category<TCategoryXp = any> {
    ID?: string
    Name?: string
    Description?: string
    ListOrder?: number
    Active?: boolean
    ParentID?: string
    readonly ChildCount?: number
    xp?: TCategoryXp
}