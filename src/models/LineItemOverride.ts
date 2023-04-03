import { AdHocProduct } from './AdHocProduct';
import { PromotionOverride } from './PromotionOverride';

export interface LineItemOverride<TProductXp = any> {
    LineItemID?: string
    UnitPrice?: number
    Product?: AdHocProduct<TProductXp>
    PromotionOverrides?: PromotionOverride[]
    InventoryRecordID?: string
    Remove?: boolean
}