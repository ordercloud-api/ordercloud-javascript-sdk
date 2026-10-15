import { LineItem } from './LineItem';

export interface BundleItems<TLineItem extends LineItem = LineItem> {
    LineItems?: TLineItem[]
}