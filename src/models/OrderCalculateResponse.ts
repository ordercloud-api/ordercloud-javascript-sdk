import { LineItemOverride } from './LineItemOverride';

export interface OrderCalculateResponse<TOrderCalculateResponseXp = any> {
    LineItemOverrides?: LineItemOverride[]
    ShippingTotal?: number
    TaxTotal?: number
    HttpStatusCode?: number
    UnhandledErrorBody?: string
    xp?: TOrderCalculateResponseXp
}