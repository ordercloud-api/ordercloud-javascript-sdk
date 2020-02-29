
export interface SpendingAccount<TSpendingAccountXp = any> {
    ID?: string
    Name: string
    Balance: number
    AllowAsPaymentMethod?: boolean
    RedemptionCode?: string
    StartDate?: string
    EndDate?: string
    xp?: TSpendingAccountXp
}