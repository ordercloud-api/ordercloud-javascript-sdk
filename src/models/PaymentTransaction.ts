
export interface PaymentTransaction<TPaymentTransactionXp = any> {
    ID?: string
    Type?: string
    DateExecuted?: string
    Amount?: number
    Succeeded?: boolean
    ResultCode?: string
    ResultMessage?: string
    xp?: TPaymentTransactionXp
}