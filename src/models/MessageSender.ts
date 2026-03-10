import { MessageType } from './MessageType';
import { ApiRole } from './ApiRole';

export interface MessageSender<TMessageSenderXp = any> {
    ID?: string
    Name: string
    MessageTypes: MessageType[]
    Description?: string
    ElevatedRoles?: ApiRole[]
    xp?: TMessageSenderXp
    DeliveryConfigID: string
    AllowAllBuyers?: boolean
}