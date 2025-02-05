import { OrderStatus } from './OrderStatus';

export interface GroupOrderInvitation<TGroupOrderInvitationXp = any> {
    readonly ID?: string
    ExpirationDate?: string
    Name?: string
    OrderID?: string
    readonly OrderStatus?: OrderStatus
    xp?: TGroupOrderInvitationXp
}