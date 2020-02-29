
export interface UserGroup<TUserGroupXp = any> {
    ID?: string
    Name: string
    Description?: string
    xp?: TUserGroupXp
}