
export interface ShipMethod<TShipMethodXp = any> {
    ID?: string
    Name?: string
    Cost?: number
    EstimatedTransitDays?: number
    xp?: TShipMethodXp
}