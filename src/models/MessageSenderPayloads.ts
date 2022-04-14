import { MessageSenderForgottenPasswordPayload } from './MessageSenderForgottenPasswordPayload'
import { MessageSenderMessageType } from './MessageSenderMessageType'
import { MessageSenderNewUserInvitationPayload } from './MessageSenderNewUserInvitationPayload'
import { MessageSenderOrderApprovedPayload } from './MessageSenderOrderApprovedPayload'
import { MessageSenderOrderDeclinedPayload } from './MessageSenderOrderDeclinedPayload'
import { MessageSenderOrderSubmittedForApprovalPayload } from './MessageSenderOrderSubmittedForApprovalPayload'
import { MessageSenderOrderSubmittedForYourApprovalHasBeenApprovedPayload } from './MessageSenderOrderSubmittedForYourApprovalHasBeenApprovedPayload'
import { MessageSenderOrderSubmittedForYourApprovalHasBeenDeclinedPayload } from './MessageSenderOrderSubmittedForYourApprovalHasBeenDeclinedPayload'
import { MessageSenderOrderSubmittedForYourApprovalPayload } from './MessageSenderOrderSubmittedForYourApprovalPayload'
import { MessageSenderOrderSubmittedPayload } from './MessageSenderOrderSubmittedPayload'
import { MessageSenderShipmentCreatedPayload } from './MessageSenderShipmentCreatedPayload'

export type MessageSenderPayloads<
  TMessageType extends MessageSenderMessageType
> = PayloadMap[TMessageType]

interface PayloadMap {
  'NewUserInvitation': MessageSenderNewUserInvitationPayload
  'ForgottenPassword': MessageSenderForgottenPasswordPayload
  'OrderSubmitted': MessageSenderOrderSubmittedPayload
  'OrderSubmittedForApproval': MessageSenderOrderSubmittedForApprovalPayload
  'OrderApproved': MessageSenderOrderApprovedPayload
  'OrderDeclined': MessageSenderOrderDeclinedPayload
  'OrderSubmittedForYourApproval': MessageSenderOrderSubmittedForYourApprovalPayload
  'OrderSubmittedForYourApprovalHasBeenApproved': MessageSenderOrderSubmittedForYourApprovalHasBeenApprovedPayload
  'OrderSubmittedForYourApprovalHasBeenDeclined': MessageSenderOrderSubmittedForYourApprovalHasBeenDeclinedPayload
  'ShipmentCreated': MessageSenderShipmentCreatedPayload
}
