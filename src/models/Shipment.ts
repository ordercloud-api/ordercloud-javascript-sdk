import { Address } from './Address';

export interface Shipment<TShipmentXp = any, TFromAddress extends Address = Address, TToAddress extends Address = Address> {
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
    readonly FromAddress?: TFromAddress
    readonly ToAddress?: TToAddress
}