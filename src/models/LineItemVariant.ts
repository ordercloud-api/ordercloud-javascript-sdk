
export interface LineItemVariant<TLineItemVariantXp = any> {
    ID?: string
    Name?: string
    Description?: string
    ShipWeight?: number
    ShipHeight?: number
    ShipWidth?: number
    ShipLength?: number
    xp?: TLineItemVariantXp
}