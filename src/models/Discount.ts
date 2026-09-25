import { DiscountBreak } from './DiscountBreak';

export interface Discount<TDiscountXp = any> {
    ID?: string
    Description?: string
    DiscountBreaks: DiscountBreak[]
    ProductFilter?: string
    CatalogID?: string
    CategoryID?: string
    ProductID?: string
    Priority?: number
    xp?: TDiscountXp
}