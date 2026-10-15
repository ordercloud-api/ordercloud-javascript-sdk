import { PaymentType } from './PaymentType';
import { PaymentTransaction } from './PaymentTransaction';

export interface Payment<TPaymentXp = any, TPaymentTransaction extends PaymentTransaction = PaymentTransaction> {
    ID?: string
    Type: PaymentType
    readonly DateCreated?: string
    CreditCardID?: string
    SpendingAccountID?: string
    Description?: string
    readonly Currency?: string
    Amount?: number
    Accepted?: boolean
    OrderReturnID?: string
    xp?: TPaymentXp
    readonly Transactions?: TPaymentTransaction[]
}