
export interface ProductCollectionInvitation<TProductCollectionInvitationXp = any> {
    readonly ID?: string
    Name?: string
    Admin?: boolean
    readonly Accepted?: boolean
    ExpirationDate?: string
    xp?: TProductCollectionInvitationXp
}