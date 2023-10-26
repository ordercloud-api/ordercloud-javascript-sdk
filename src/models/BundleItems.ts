import { LineItem } from './LineItem';

export interface BundleItems<TProductXp = any, TVariantXp = any, TShippingAddressXp = any, TShipFromAddressXp = any, TLineItemsXp = any> {
    LineItems?: LineItem<TLineItemsXp,TProductXp,TVariantXp,TShippingAddressXp,TShipFromAddressXp>[]
}