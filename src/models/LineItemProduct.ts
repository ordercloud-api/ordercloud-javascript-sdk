
export interface LineItemProduct<TLineItemProductXp = any> {
    ID?: string
    Name?: string
    Description?: string
    Returnable?: boolean
    QuantityMultiplier?: number
    ShipWeight?: number
    ShipHeight?: number
    ShipWidth?: number
    ShipLength?: number
    DefaultSupplierID?: string
    xp?: TLineItemProductXp
}