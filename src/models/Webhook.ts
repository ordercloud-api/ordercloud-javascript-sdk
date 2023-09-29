import { ApiRole } from './ApiRole';
import { WebhookRoute } from './WebhookRoute';

export interface Webhook {
    ID?: string
    Name: string
    Description?: string
    Url?: string
    HashKey?: string
    ElevatedRoles?: ApiRole[]
    ConfigData?: any
    BeforeProcessRequest?: boolean
    ApiClientIDs?: string[]
    WebhookRoutes?: WebhookRoute[]
    DeliveryConfigID?: string
}