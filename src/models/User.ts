
export interface User<TUserXp = any> {
    ID?: string
    Username: string
    Password?: string
    FirstName: string
    LastName: string
    Email: string
    Phone?: string
    TermsAccepted?: string
    Active: boolean
    xp?: TUserXp
    readonly AvailableRoles?: string[]
    readonly DateCreated?: string
    readonly PasswordLastSetDate?: string
}