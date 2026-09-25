import { BuyerPriceBreak } from './BuyerPriceBreak';
import { BuyerDiscount } from './BuyerDiscount';

export interface BuyerPriceSchedule<TBuyerPriceScheduleXp = any> {
    PriceBreaks?: BuyerPriceBreak[]
    Discount?: BuyerDiscount
    OwnerID?: string
    ID?: string
    Name?: string
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
    xp?: TBuyerPriceScheduleXp
}