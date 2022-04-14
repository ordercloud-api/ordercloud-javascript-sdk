import { LineItem } from './LineItem'
import { MessageSenderPayload } from './MessageSenderPayload'
import { Order } from './Order'
import { OrderApproval } from './OrderApproval'
import { Product } from './Product'

export type MessageSenderOrderApprovedPayload<
  TConfigData = any,
  TOrder extends Order = Order,
  TOrderApproval extends OrderApproval = OrderApproval,
  TLineItem extends LineItem = LineItem,
  TProduct extends Product = Product
> = MessageSenderPayload<
  TConfigData,
  MessageSenderOrderApprovedEventBody<
    TOrder,
    TOrderApproval,
    TLineItem,
    TProduct
  >
>

export interface MessageSenderOrderApprovedEventBody<
  TOrder extends Order = Order,
  TOrderApproval extends OrderApproval = OrderApproval,
  TLineItem extends LineItem = LineItem,
  TProduct extends Product = Product
> {
  Order?: TOrder
  Approvals?: TOrderApproval[]
  LineItems?: TLineItem[]
  Products?: TProduct
}
