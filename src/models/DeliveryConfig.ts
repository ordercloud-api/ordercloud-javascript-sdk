import { DeliveryTargets } from './DeliveryTargets';

export interface DeliveryConfig {
    ID?: string
    Name: string
    Enabled?: boolean
    DeliveryTargets: DeliveryTargets
}