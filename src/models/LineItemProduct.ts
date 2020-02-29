
export interface LineItemProduct<TLineItemProductXp = any> {
    ID?: string
    Name?: string
    Description?: string
    QuantityMultiplier?: number
    ShipWeight?: number
    ShipHeight?: number
    ShipWidth?: number
    ShipLength?: number
    xp?: TLineItemProductXp
}