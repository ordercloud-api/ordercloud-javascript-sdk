import { Address } from './Address';

export interface InventoryRecord<TInventoryRecordXp = any, TAddressXp = any> {
    ID?: string
    OwnerID?: string
    readonly Address?: Address<TAddressXp>
    AddressID: string
    OrderCanExceed?: boolean
    QuantityAvailable?: number
    readonly LastUpdated?: string
    xp?: TInventoryRecordXp
}