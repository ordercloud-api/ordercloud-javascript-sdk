import { MessageSenderPayload } from './MessageSenderPayload'

export type MessageSenderNewUserInvitationPayload<
  TConfigData = any
> = MessageSenderPayload<TConfigData, MessageSenderNewUserInvitationEventBody>

export interface MessageSenderNewUserInvitationEventBody {
  Username?: string
  PasswordRenewalUrl?: string
  PasswordRenewalVerificationCode?: string
  PasswordRenewalAccessToken?: string
}
