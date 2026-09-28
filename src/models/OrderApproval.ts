import { ApprovalStatus } from './ApprovalStatus';
import { User } from './User';

export interface OrderApproval<TApprover extends User = User> {
    readonly AllowResubmit?: boolean
    readonly ApprovalRuleID?: string
    readonly ApprovingGroupID?: string
    readonly Status?: ApprovalStatus
    readonly DateCreated?: string
    readonly DateCompleted?: string
    readonly Approver?: TApprover
    readonly Comments?: string
}