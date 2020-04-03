import { ShipEstimate } from './ShipEstimate';

export interface ShipEstimateResponse<TShipEstimateResponseXp = any, TShipEstimatesXp = any, TShipMethodsXp = any> {
    ShipEstimates?: ShipEstimate<TShipEstimatesXp,TShipMethodsXp>[]
    HttpStatusCode?: number
    UnhandledErrorBody?: string
    xp?: TShipEstimateResponseXp
}