import { Locale } from './Locale';

export interface User<TUserXp = any> {
    ID?: string
    readonly CompanyID?: string
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
    readonly Locale?: Locale
    readonly DateCreated?: string
    readonly LastActive?: string
    readonly PasswordLastSetDate?: string
}