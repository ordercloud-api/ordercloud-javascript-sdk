
export interface SpendingAccount<TSpendingAccountXp = any> {
    ID?: string
    Name: string
    Balance: number
    AllowAsPaymentMethod?: boolean
    StartDate?: string
    EndDate?: string
    xp?: TSpendingAccountXp
}