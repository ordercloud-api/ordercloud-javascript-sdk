import { Environment } from './Environment'
import { MessageType } from './MessageType'
import { User } from './User'

export interface MessageSenderPayload<TConfigData = any, TEventBody = any> {
  OcLogIdHeader?: string
  Environment?: Environment
  BuyerID?: string
  UserToken?: string
  Recipient?: User
  CCList?: string
  EventBody?: TEventBody
  MessageType?: MessageType
  ConfigData?: TConfigData
}
