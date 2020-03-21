import { PriceMarkupType } from './PriceMarkupType';

export interface VariantSpec {
    SpecID?: string
    readonly Name?: string
    OptionID?: string
    Value?: string
    PriceMarkupType?: PriceMarkupType
    PriceMarkup?: number
}