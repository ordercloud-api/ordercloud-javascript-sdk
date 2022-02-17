import { Order } from './Order';

export interface OrderSplitResult<TFromUserXp = any, TBillingAddressXp = any, TOutgoingOrdersXp = any> {
    OutgoingOrders?: Order<TOutgoingOrdersXp,TFromUserXp,TBillingAddressXp>[]
    RemainingLineItemIDs?: string[]
}