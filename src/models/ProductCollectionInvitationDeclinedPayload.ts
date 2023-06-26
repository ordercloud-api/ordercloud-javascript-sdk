import { MessageSenderPayload } from './MessageSenderPayload'
import { ProductCollection } from './ProductCollection'

export type MessageSenderProductCollectionInvitationDeclinedPayload<
  TConfigData = any,
  TProductCollection extends ProductCollection = ProductCollection,
  TInvitationInteropID extends string = string,
  TUserID extends string = string
> = MessageSenderPayload<
  TConfigData,
  MessageSenderProductCollectionInvitationDeclinedEventBody<
    TProductCollection,
    TInvitationInteropID,
    TUserID
  >
>

export interface MessageSenderProductCollectionInvitationDeclinedEventBody<
  TProductCollection extends ProductCollection = ProductCollection,
  TInvitationInteropID extends string = string,
  TUserID extends string = string
> {
  ProductCollection: TProductCollection
  InvitationInteropID: TInvitationInteropID
  UserID: TUserID
}
