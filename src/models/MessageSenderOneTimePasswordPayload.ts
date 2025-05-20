import { MessageSenderPayload } from './MessageSenderPayload'

export type MessageSenderOneTimePasswordPayload<
  TConfigData = any
> = MessageSenderPayload<TConfigData, MessageSenderOneTimePasswordEventBody>

export interface MessageSenderOneTimePasswordEventBody {
  Username?: string
  ClientID?: string
  OneTimePassword?: string
}
