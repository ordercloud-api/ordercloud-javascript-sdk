import { MessageSenderAssignment } from './MessageSenderAssignment';
import { MessageType } from './MessageType';

export interface MessageCCListenerAssignment {
    MessageSenderAssignment?: MessageSenderAssignment
    readonly MessageConfigName?: string
    readonly MessageConfigDescription?: string
    MessageType?: MessageType
    BuyerID?: string
    SupplierID?: string
    UserGroupID?: string
    UserID?: string
}