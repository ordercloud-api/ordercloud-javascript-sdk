import { ApiRole } from './ApiRole';
import { PasswordConfig } from './PasswordConfig';

export interface SecurityProfile {
    ID?: string
    Name: string
    Roles?: ApiRole[]
    CustomRoles?: string[]
    PasswordConfig?: PasswordConfig
    readonly IsExternalRoleGroup?: boolean
}