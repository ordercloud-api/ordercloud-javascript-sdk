import { PriceSchedule } from './PriceSchedule';

export interface ProductSeller<TPriceScheduleXp = any> {
    PriceSchedule?: PriceSchedule<TPriceScheduleXp>
    ID?: string
    Name?: string
}