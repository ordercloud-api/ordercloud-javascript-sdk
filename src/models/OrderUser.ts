import { Locale } from './Locale';

export interface OrderUser<TOrderUserXp = any> {
    ID?: string
    readonly CompanyID?: string
    Username?: string
    Password?: string
    FirstName?: string
    LastName?: string
    Email?: string
    Phone?: string
    TermsAccepted?: string
    Active?: boolean
    xp?: TOrderUserXp
    readonly AvailableRoles?: string[]
    readonly Locale?: Locale
    readonly DateCreated?: string
    readonly LastActive?: string
    readonly PasswordLastSetDate?: string
}