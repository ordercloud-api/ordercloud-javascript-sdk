
export interface ApprovalRule<TApprovalRuleXp = any> {
    ID?: string
    Name?: string
    Description?: string
    ApprovingGroupID: string
    RuleExpression: string
    xp?: TApprovalRuleXp
}