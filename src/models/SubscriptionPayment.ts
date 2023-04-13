import { PaymentType } from './PaymentType';

export interface SubscriptionPayment {
    Type?: PaymentType
    CreditCardID?: string
    SpendingAccountID?: string
}