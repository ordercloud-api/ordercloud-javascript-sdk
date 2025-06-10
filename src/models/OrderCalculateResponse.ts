import { LineItemOverride } from './LineItemOverride';

export interface OrderCalculateResponse<TOrderCalculateResponseXp = any, TProductXp = any> {
    LineItemOverrides?: LineItemOverride<TProductXp>[]
    ShippingTotal?: number
    TaxTotal?: number
    FeeTotal?: number
    HttpStatusCode?: number
    UnhandledErrorBody?: string
    xp?: TOrderCalculateResponseXp
    Succeeded?: boolean
}