import { Address } from './Address';

export interface InventoryRecord<TInventoryRecordXp = any, TAddress extends Address = Address> {
    ID?: string
    OwnerID?: string
    AllowAllBuyers?: boolean
    readonly Address?: TAddress
    AddressID: string
    OrderCanExceed?: boolean
    QuantityAvailable?: number
    NotificationPoint?: number
    readonly LastUpdated?: string
    xp?: TInventoryRecordXp
}