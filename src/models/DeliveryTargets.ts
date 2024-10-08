import { KafkaConfig } from './KafkaConfig';
import { HttpConfig } from './HttpConfig';
import { SearchIngestion } from './SearchIngestion';
import { SendEvent } from './SendEvent';
import { DiscoverEvent } from './DiscoverEvent';
import { EventHubConfig } from './EventHubConfig';
import { AzureBlobConfig } from './AzureBlobConfig';
import { AzureTableConfig } from './AzureTableConfig';
import { CosmosDbConfig } from './CosmosDbConfig';
import { MandrillConfig } from './MandrillConfig';
import { MessageSenderConfig } from './MessageSenderConfig';
import { ContentHubConfig } from './ContentHubConfig';

export interface DeliveryTargets {
    Kafka?: KafkaConfig
    Http?: HttpConfig
    SearchIngestion?: SearchIngestion
    SendEvent?: SendEvent
    DiscoverEvent?: DiscoverEvent
    EventHub?: EventHubConfig
    AzureBlob?: AzureBlobConfig
    AzureTable?: AzureTableConfig
    CosmosDb?: CosmosDbConfig
    Mandrill?: MandrillConfig
    MessageSender?: MessageSenderConfig
    ContentHub?: ContentHubConfig
}