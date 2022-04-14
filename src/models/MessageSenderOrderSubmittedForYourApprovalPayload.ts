import { LineItem } from './LineItem'
import { MessageSenderPayload } from './MessageSenderPayload'
import { Order } from './Order'
import { OrderApproval } from './OrderApproval'
import { Product } from './Product'

export type MessageSenderOrderSubmittedForYourApprovalPayload<
  TConfigData = any,
  TOrder extends Order = Order,
  TOrderApproval extends OrderApproval = OrderApproval,
  TLineItem extends LineItem = LineItem,
  TProduct extends Product = Product
> = MessageSenderPayload<
  TConfigData,
  MessageSenderOrderSubmittedForYourApprovalEventBody<
    TOrder,
    TOrderApproval,
    TLineItem,
    TProduct
  >
>

export interface MessageSenderOrderSubmittedForYourApprovalEventBody<
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
