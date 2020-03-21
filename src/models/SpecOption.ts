import { PriceMarkupType } from './PriceMarkupType';

export interface SpecOption<TSpecOptionXp = any> {
    ID?: string
    Value?: string
    ListOrder?: number
    IsOpenText?: boolean
    PriceMarkupType?: PriceMarkupType
    PriceMarkup?: number
    xp?: TSpecOptionXp
}