import { AdHocProduct } from './AdHocProduct';
import { PromotionOverride } from './PromotionOverride';

export interface LineItemOverride<TProduct extends AdHocProduct = AdHocProduct> {
    LineItemID?: string
    UnitPrice?: number
    Product?: TProduct
    PromotionOverrides?: PromotionOverride[]
    InventoryRecordID?: string
    Remove?: boolean
}