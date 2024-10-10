
export interface Promotion<TPromotionXp = any> {
    ID?: string
    LineItemLevel?: boolean
    Code: string
    Name?: string
    RedemptionLimit?: number
    RedemptionLimitPerUser?: number
    readonly RedemptionCount?: number
    QuantityLimitPerOrder?: number
    ItemLimitPerOrder?: number
    ItemSortBy?: string
    Description?: string
    FinePrint?: string
    StartDate?: string
    ExpirationDate?: string
    EligibleExpression: string
    ValueExpression?: string
    CanCombine?: boolean
    AllowAllBuyers?: boolean
    OwnerID?: string
    AutoApply?: boolean
    Active?: boolean
    Priority?: number
    xp?: TPromotionXp
}