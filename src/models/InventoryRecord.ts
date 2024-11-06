import { Address } from './Address';

export interface InventoryRecord<TInventoryRecordXp = any, TAddressXp = any> {
    ID?: string
    OwnerID?: string
    AllowAllBuyers?: boolean
    readonly Address?: Address<TAddressXp>
    AddressID: string
    OrderCanExceed?: boolean
    QuantityAvailable?: number
    NotificationPoint?: number
    readonly LastUpdated?: string
    xp?: TInventoryRecordXp
}