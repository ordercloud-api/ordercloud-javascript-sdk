import { ApiError } from './ApiError';

export interface UnavailableLineItem {
    ProductID?: string
    Error?: ApiError
}