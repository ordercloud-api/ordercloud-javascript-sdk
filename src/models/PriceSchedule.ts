import { PriceBreak } from './PriceBreak';

export interface PriceSchedule<TPriceScheduleXp = any> {
    OwnerID?: string
    ID?: string
    Name: string
    ApplyTax?: boolean
    ApplyShipping?: boolean
    MinQuantity?: number
    MaxQuantity?: number
    UseCumulativeQuantity?: boolean
    RestrictedQuantity?: boolean
    PriceBreaks?: PriceBreak[]
    xp?: TPriceScheduleXp
}