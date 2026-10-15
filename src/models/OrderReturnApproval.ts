import { ApprovalStatus } from './ApprovalStatus';
import { User } from './User';

export interface OrderReturnApproval<TApprover extends User = User> {
    OrderReturnID?: string
    readonly ApprovalRuleID?: string
    readonly ApprovingGroupID?: string
    readonly Status?: ApprovalStatus
    readonly DateCreated?: string
    readonly DateCompleted?: string
    readonly Approver?: TApprover
    readonly Comments?: string
}