import { MessageSenderPayload } from './MessageSenderPayload'

export type MessageSenderForgottenUsernamePayload<
  TConfigData = any
> = MessageSenderPayload<TConfigData, MessageSenderForgottenUsernameEventBody>

export interface MessageSenderForgottenUsernameEventBody {
  Username?: string
}
