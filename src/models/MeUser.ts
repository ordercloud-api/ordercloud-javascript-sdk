import { MeBuyer } from './MeBuyer';
import { MeSupplier } from './MeSupplier';
import { MeSeller } from './MeSeller';
import { Locale } from './Locale';

export interface MeUser<TMeUserXp = any> {
    readonly Buyer?: MeBuyer
    readonly Supplier?: MeSupplier
    readonly Seller?: MeSeller
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
    xp?: TMeUserXp
    readonly AvailableRoles?: string[]
    readonly Locale?: Locale
    readonly DateCreated?: string
    readonly LastActive?: string
    readonly PasswordLastSetDate?: string
}