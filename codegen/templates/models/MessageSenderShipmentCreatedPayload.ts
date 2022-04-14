import { LineItem } from './LineItem'
import { MessageSenderPayload } from './MessageSenderPayload'
import { Order } from './Order'
import { OrderApproval } from './OrderApproval'
import { Product } from './Product'
import { Shipment } from './Shipment'
import { ShipmentItem } from './ShipmentItem'

export type MessageSenderShipmentCreatedPayload<
  TConfigData = any,
  TOrder extends Order = Order,
  TOrderApproval extends OrderApproval = OrderApproval,
  TLineItem extends LineItem = LineItem,
  TProduct extends Product = Product,
  TShipment extends Shipment = Shipment,
  TShipmentItem extends ShipmentItem = ShipmentItem
> = MessageSenderPayload<
  TConfigData,
  MessageSenderShipmentCreatedEventBody<
    TOrder,
    TOrderApproval,
    TLineItem,
    TProduct,
    TShipment,
    TShipmentItem
  >
>

export interface MessageSenderShipmentCreatedEventBody<
  TOrder extends Order = Order,
  TOrderApproval extends OrderApproval = OrderApproval,
  TLineItem extends LineItem = LineItem,
  TProduct extends Product = Product,
  TShipment extends Shipment = Shipment,
  TShipmentItem extends ShipmentItem = ShipmentItem
> {
  Order?: TOrder
  Approvals?: TOrderApproval[]
  LineItems?: TLineItem[]
  Products?: TProduct
  Shipment?: TShipment
  ShipmentItems?: TShipmentItem[]
}
