import { ApprovalType } from './ApprovalType';

export interface SellerApprovalRule<TSellerApprovalRuleXp = any> {
    OwnerID?: string
    ApprovalType: ApprovalType
    ID?: string
    Name?: string
    Description?: string
    ApprovingGroupID: string
    RuleExpression: string
    xp?: TSellerApprovalRuleXp
}