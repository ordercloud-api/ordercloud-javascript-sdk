import { ApiRole } from './ApiRole';
import { IntegrationEventType } from './IntegrationEventType';

export interface IntegrationEvent {
    ElevatedRoles?: ApiRole[]
    ID?: string
    ConfigData?: any
    EventType?: IntegrationEventType
    CustomImplementationUrl: string
    CustomAuthHeaderName?: string
    CustomAuthHeaderValue?: string
    Name: string
    HashKey: string
}