import { ApiRole } from './ApiRole';
import { IntegrationEventType } from './IntegrationEventType';

export interface IntegrationEvent {
    ElevatedRoles: ApiRole[]
    ID?: string
    ConfigData?: any
    EventType?: IntegrationEventType
    CustomImplementationUrl?: string
    Name: string
    HashKey: string
}