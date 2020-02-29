
export interface BuyerCreditCard<TBuyerCreditCardXp = any> {
    readonly ID?: string
    readonly Editable?: boolean
    Token?: string
    readonly DateCreated?: string
    CardType?: string
    PartialAccountNumber?: string
    CardholderName?: string
    ExpirationDate?: string
    xp?: TBuyerCreditCardXp
}