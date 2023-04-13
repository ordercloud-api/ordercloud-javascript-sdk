import { MessageSenderPayload } from './MessageSenderPayload'
import { LineItem } from './LineItem'
import { Product } from './Product'
import { Subscription } from './Subscription'

export type MessageSenderSubscriptionReminderPayload<
  TConfigData = any,
  TLineItem extends LineItem = LineItem,
  TProduct extends Product = Product,
  TSubscription extends Subscription = Subscription,
  TUnavailableProductIDs extends string[] = string[]
> = MessageSenderPayload<
  TConfigData,
  MessageSenderSubscriptionReminderEventBody<
    TLineItem,
    TProduct,
    TSubscription,
    TUnavailableProductIDs
  >
>

export interface MessageSenderSubscriptionReminderEventBody<
  TLineItem extends LineItem = LineItem,
  TProduct extends Product = Product,
  TSubscription extends Subscription = Subscription,
  TUnavailableProductIDs extends string[] = string[]
> {
  LineItems?: TLineItem[]
  Products?: TProduct
  Subscription?: TSubscription
  UnavailableProductIDs?: TUnavailableProductIDs
}
