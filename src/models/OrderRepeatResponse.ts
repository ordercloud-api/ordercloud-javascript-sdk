import { Order } from './Order';
import { UnavailableLineItem } from './UnavailableLineItem';

export interface OrderRepeatResponse<TFromUserXp = any, TBillingAddressXp = any, TOrderXp = any> {
    Order?: Order<TOrderXp,TFromUserXp,TBillingAddressXp>
    UnavailableItems?: UnavailableLineItem[]
}