
export interface CreditCard<TCreditCardXp = any> {
    ID?: string
    Token?: string
    readonly DateCreated?: string
    CardType?: string
    PartialAccountNumber?: string
    CardholderName?: string
    ExpirationDate?: string
    xp?: TCreditCardXp
}