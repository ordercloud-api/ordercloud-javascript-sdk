import { SearchIngestionHttpContent } from './SearchIngestionHttpContent';

export interface SearchIngestionContent {
    Locales?: string[]
    Http?: SearchIngestionHttpContent
}