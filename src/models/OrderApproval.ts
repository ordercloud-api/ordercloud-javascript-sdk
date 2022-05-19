import { ApprovalStatus } from './ApprovalStatus';
import { User } from './User';

export interface OrderApproval<TApproverXp = any> {
    readonly AllowResubmit?: boolean
    readonly ApprovalRuleID?: string
    readonly ApprovingGroupID?: string
    readonly Status?: ApprovalStatus
    readonly DateCreated?: string
    readonly DateCompleted?: string
    readonly Approver?: User<TApproverXp>
    readonly Comments?: string
}