import { Order } from './Order';
import { UnavailableLineItem } from './UnavailableLineItem';

export interface OrderRepeatResponse<TOrder extends Order = Order> {
    Order?: TOrder
    UnavailableItems?: UnavailableLineItem[]
}