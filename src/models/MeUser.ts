import { MeBuyer } from './MeBuyer';
import { MeSupplier } from './MeSupplier';
import { MeSeller } from './MeSeller';

export interface MeUser<TMeUserXp = any> {
    readonly Buyer?: MeBuyer
    readonly Supplier?: MeSupplier
    readonly Seller?: MeSeller
    ID?: string
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
    readonly DateCreated?: string
    readonly PasswordLastSetDate?: string
}