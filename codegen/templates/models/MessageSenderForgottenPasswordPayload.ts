import { MessageSenderPayload } from './MessageSenderPayload'

export type MessageSenderForgottenPasswordPayload<
  TConfigData = any
> = MessageSenderPayload<TConfigData, MessageSenderForgottenPasswordEventBody>

export interface MessageSenderForgottenPasswordEventBody {
  Username?: string
  PasswordRenewalUrl?: string
  PasswordRenewalVerificationCode?: string
  PasswordRenewalAccessToken?: string
}
