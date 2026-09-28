import { Order } from './Order';

export interface OrderSplitResult<TOrder extends Order = Order> {
    OutgoingOrders?: TOrder[]
    RemainingLineItemIDs?: string[]
}