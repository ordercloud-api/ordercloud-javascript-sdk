import { MessageSenderPayload } from './MessageSenderPayload'
import { ProductCollection } from './ProductCollection'

export type MessageSenderProductCollectionInvitationAcceptedPayload<
  TConfigData = any,
  TProductCollection extends ProductCollection = ProductCollection,
  TInvitationInteropID extends string = string,
  TUserID extends string = string
> = MessageSenderPayload<
  TConfigData,
  MessageSenderProductCollectionInvitationAcceptedEventBody<TProductCollection, TInvitationInteropID, TUserID>
>

export interface MessageSenderProductCollectionInvitationAcceptedEventBody<
  TProductCollection extends ProductCollection = ProductCollection,
  TInvitationInteropID extends string = string,
  TUserID extends string = string
> {
  ProductCollection: TProductCollection
  InvitationInteropID: TInvitationInteropID
  UserID: TUserID
}
