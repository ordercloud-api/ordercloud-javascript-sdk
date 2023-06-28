import { TrackingEventType } from './TrackingEventType';

export interface TrackingEvent {
    ID?: string
    EventType: TrackingEventType
    ClientID: string
    Name: string
    ConfigData?: any
    DeliveryConfigID: string
}