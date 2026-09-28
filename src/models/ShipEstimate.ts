import { ShipEstimateItem } from './ShipEstimateItem';
import { ShipMethod } from './ShipMethod';

export interface ShipEstimate<TShipEstimateXp = any, TShipMethod extends ShipMethod = ShipMethod> {
    ID?: string
    xp?: TShipEstimateXp
    SelectedShipMethodID?: string
    ShipEstimateItems?: ShipEstimateItem[]
    ShipMethods?: TShipMethod[]
}