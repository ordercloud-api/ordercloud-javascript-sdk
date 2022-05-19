import { LineItem } from './LineItem'
import { MessageSenderPayload } from './MessageSenderPayload'
import { Order } from './Order'
import { OrderApproval } from './OrderApproval'
import { Product } from './Product'
import { OrderReturn } from './OrderReturn'

export type MessageSenderOrderReturnSubmittedForYourApprovalPayload<
  TConfigData = any,
  TOrder extends Order = Order,
  TOrderApproval extends OrderApproval = OrderApproval,
  TLineItem extends LineItem = LineItem,
  TProduct extends Product = Product,
  TOrderReturn extends OrderReturn = OrderReturn
> = MessageSenderPayload<
  TConfigData,
  MessageSenderOrderReturnSubmittedForYourApprovalEventBody<
    TOrder,
    TOrderApproval,
    TLineItem,
    TProduct,
    TOrderReturn
  >
>

export interface MessageSenderOrderReturnSubmittedForYourApprovalEventBody<
  TOrder extends Order = Order,
  TOrderApproval extends OrderApproval = OrderApproval,
  TLineItem extends LineItem = LineItem,
  TProduct extends Product = Product,
  TOrderReturn extends OrderReturn = OrderReturn
> {
  Order?: TOrder
  Approvals?: TOrderApproval[]
  LineItems?: TLineItem[]
  Products?: TProduct
  OrderReturn?: TOrderReturn
}
