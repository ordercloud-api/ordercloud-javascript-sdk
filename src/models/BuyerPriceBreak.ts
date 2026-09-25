import { DiscountedPrices } from './DiscountedPrices';

export interface BuyerPriceBreak {
    Discounted?: DiscountedPrices
    Quantity?: number
    Price?: number
    SalePrice?: number
    SubscriptionPrice?: number
    BundlePrice?: number
}