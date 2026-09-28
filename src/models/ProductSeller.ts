import { BuyerPriceSchedule } from './BuyerPriceSchedule';

export interface ProductSeller<TPriceSchedule extends BuyerPriceSchedule = BuyerPriceSchedule> {
    PriceSchedule?: TPriceSchedule
    ID?: string
    Name?: string
}