
export interface PaymentTransaction<TPaymentTransactionXp = any> {
    ID?: string
    Type?: string
    DateExecuted?: string
    Currency?: string
    Amount?: number
    Succeeded?: boolean
    ResultCode?: string
    ResultMessage?: string
    xp?: TPaymentTransactionXp
}