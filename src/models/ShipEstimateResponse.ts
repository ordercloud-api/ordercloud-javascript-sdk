import { ShipEstimate } from './ShipEstimate';

export interface ShipEstimateResponse<TShipEstimateResponseXp = any, TShipEstimate extends ShipEstimate = ShipEstimate> {
    ShipEstimates?: TShipEstimate[]
    HttpStatusCode?: number
    UnhandledErrorBody?: string
    xp?: TShipEstimateResponseXp
    Succeeded?: boolean
}