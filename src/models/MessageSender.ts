import { MessageType } from './MessageType';
import { ApiRole } from './ApiRole';

export interface MessageSender<TMessageSenderXp = any> {
    ID?: string
    Name: string
    MessageTypes: MessageType[]
    Description?: string
    URL?: string
    ElevatedRoles?: ApiRole[]
    SharedKey?: string
    xp?: TMessageSenderXp
    DeliveryConfigID?: string
    AllowAllBuyers?: boolean
}