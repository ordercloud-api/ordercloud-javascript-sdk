import { PromotionOverride } from './PromotionOverride';

export interface LineItemOverride {
    LineItemID?: string
    UnitPrice?: number
    PromotionOverrides?: PromotionOverride[]
}