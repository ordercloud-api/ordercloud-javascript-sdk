import { MessageSenderAssignment } from './MessageSenderAssignment';

export interface MessageCCListenerAssignment {
    MessageSenderAssignment?: MessageSenderAssignment
    readonly MessageConfigName?: string
    readonly MessageConfigDescription?: string
    MessageType?: 'OrderDeclined' | 'OrderSubmitted' | 'ShipmentCreated' | 'ForgottenPassword' | 'OrderSubmittedForYourApproval' | 'OrderSubmittedForApproval' | 'OrderApproved' | 'OrderSubmittedForYourApprovalHasBeenApproved' | 'OrderSubmittedForYourApprovalHasBeenDeclined' | 'NewUserInvitation'
    BuyerID?: string
    SupplierID?: string
    UserGroupID?: string
    UserID?: string
}