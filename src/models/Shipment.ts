import { Address } from './Address';

export interface Shipment<TShipmentXp = any, TFromAddressXp = any, TToAddressXp = any> {
    ID?: string
    BuyerID?: string
    Shipper?: string
    DateShipped?: string
    DateDelivered?: string
    TrackingNumber?: string
    Cost?: number
    OwnerID?: string
    xp?: TShipmentXp
    Account?: string
    FromAddressID?: string
    ToAddressID?: string
    readonly FromAddress?: Address<TFromAddressXp>
    readonly ToAddress?: Address<TToAddressXp>
}