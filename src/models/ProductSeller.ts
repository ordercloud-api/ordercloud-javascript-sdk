import { BuyerPriceSchedule } from './BuyerPriceSchedule';

export interface ProductSeller<TPriceScheduleXp = any> {
    PriceSchedule?: BuyerPriceSchedule<TPriceScheduleXp>
    ID?: string
    Name?: string
}