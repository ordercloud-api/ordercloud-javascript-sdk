import { Environment } from '../../codegen/templates/models/Environment'
import { MessageSenderMessageType } from './MessageSenderMessageType'
import { User } from './User'

export interface MessageSenderPayload<TConfigData = any, TEventBody = any> {
  OcLogIdHeader?: string
  Environment?: Environment
  BuyerID?: string
  UserToken?: string
  Recipient?: User
  CCList?: string
  EventBody?: TEventBody
  MessageType?: MessageSenderMessageType
  ConfigData?: TConfigData
}
