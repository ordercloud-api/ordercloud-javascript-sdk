import { KafkaConfig } from './KafkaConfig';
import { HttpConfig } from './HttpConfig';
import { SendEvent } from './SendEvent';
import { DiscoverEvent } from './DiscoverEvent';
import { EventHubConfig } from './EventHubConfig';

export interface DeliveryTargets {
    Kafka?: KafkaConfig
    Http?: HttpConfig
    SendEvent?: SendEvent
    DiscoverEvent?: DiscoverEvent
    EventHub?: EventHubConfig
}