import { ApiRole } from './ApiRole';

export interface ImpersonateTokenRequest {
    ClientID?: string
    Roles?: ApiRole[]
    CustomRoles?: string[]
}