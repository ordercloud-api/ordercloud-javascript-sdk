
export interface OrderPromotion<TOrderPromotionXp = any> {
    readonly Amount?: number
    ID?: string
    Code?: string
    Name?: string
    RedemptionLimit?: number
    RedemptionLimitPerUser?: number
    readonly RedemptionCount?: number
    Description?: string
    FinePrint?: string
    StartDate?: string
    ExpirationDate?: string
    EligibleExpression?: string
    ValueExpression?: string
    CanCombine?: boolean
    AllowAllBuyers?: boolean
    xp?: TOrderPromotionXp
}