import { LineItemOverride } from './LineItemOverride';

export interface OrderCalculateResponse<TOrderCalculateResponseXp = any, TLineItemOverride extends LineItemOverride = LineItemOverride> {
    LineItemOverrides?: TLineItemOverride[]
    ShippingTotal?: number
    TaxTotal?: number
    FeeTotal?: number
    HttpStatusCode?: number
    UnhandledErrorBody?: string
    xp?: TOrderCalculateResponseXp
    Succeeded?: boolean
}