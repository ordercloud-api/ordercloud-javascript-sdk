import { ShipEstimateItem } from './ShipEstimateItem';
import { ShipMethod } from './ShipMethod';

export interface ShipEstimate<TShipEstimateXp = any, TShipMethodsXp = any> {
    ID?: string
    xp?: TShipEstimateXp
    SelectedShipMethodID?: string
    ShipEstimateItems?: ShipEstimateItem[]
    ShipMethods?: ShipMethod<TShipMethodsXp>[]
}