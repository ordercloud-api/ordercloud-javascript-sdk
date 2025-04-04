import { SearchIngestionContent } from './SearchIngestionContent';

export interface SearchIngestion {
    Domain?: string
    Source?: string
    Endpoint?: string
    Entity?: string
    ApiKey?: string
    Content?: SearchIngestionContent
}