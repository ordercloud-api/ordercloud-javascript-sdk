import { PriceBreak } from './PriceBreak';

export interface PriceSchedule<TPriceScheduleXp = any> {
    PriceBreaks?: PriceBreak[]
    OwnerID?: string
    ID?: string
    Name: string
    ApplyTax?: boolean
    ApplyShipping?: boolean
    MinQuantity?: number
    MaxQuantity?: number
    UseCumulativeQuantity?: boolean
    RestrictedQuantity?: boolean
    Currency?: string
    SaleStart?: string
    SaleEnd?: string
    readonly IsOnSale?: boolean
    xp?: TPriceScheduleXp
}