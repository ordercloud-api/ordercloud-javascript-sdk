
export interface SpecOption<TSpecOptionXp = any> {
    ID?: string
    Value?: string
    ListOrder?: number
    IsOpenText?: boolean
    PriceMarkupType?: 'NoMarkup' | 'AmountPerQuantity' | 'AmountTotal' | 'Percentage'
    PriceMarkup?: number
    xp?: TSpecOptionXp
}