import { OrderStatus } from './OrderStatus';
import { OrderReturnItem } from './OrderReturnItem';

export interface OrderReturn<TOrderReturnXp = any> {
    ID?: string
    OrderID: string
    readonly PaymentIDs?: string[]
    readonly Status?: OrderStatus
    readonly DateCreated?: string
    readonly DateSubmitted?: string
    readonly DateApproved?: string
    readonly DateDeclined?: string
    readonly DateCanceled?: string
    readonly DateCompleted?: string
    readonly LastUpdated?: string
    RefundAmount?: number
    Comments?: string
    ItemsToReturn?: OrderReturnItem[]
    xp?: TOrderReturnXp
}