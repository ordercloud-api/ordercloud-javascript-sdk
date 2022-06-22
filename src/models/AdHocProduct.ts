
export interface AdHocProduct<TAdHocProductXp = any> {
    ID?: string
    Name?: string
    Description?: string
    QuantityMultiplier?: number
    ShipWeight?: number
    ShipHeight?: number
    ShipWidth?: number
    ShipLength?: number
    DefaultSupplierID?: string
    Returnable?: boolean
    xp?: TAdHocProductXp
}