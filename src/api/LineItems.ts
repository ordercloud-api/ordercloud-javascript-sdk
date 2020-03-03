import { ListPage } from '../models/ListPage';
import { LineItem } from '../models/LineItem';
import { Address } from '../models/Address';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class LineItems {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.List = this.List.bind(this);
        this.Create = this.Create.bind(this);
        this.Get = this.Get.bind(this);
        this.Save = this.Save.bind(this);
        this.Delete = this.Delete.bind(this);
        this.Patch = this.Patch.bind(this);
        this.SetShippingAddress = this.SetShippingAddress.bind(this);
        this.PatchShippingAddress = this.PatchShippingAddress.bind(this);
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TLineItem extends LineItem>(direction: 'Incoming' | 'Outgoing', orderID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TLineItem>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TLineItem>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/orders/${direction}/${orderID}/lineitems`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItem Required fields: ProductID, Quantity
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TLineItem extends LineItem>(direction: 'Incoming' | 'Outgoing', orderID: string, lineItem: LineItem, accessToken?: string ): Promise<RequiredDeep<TLineItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orders/${direction}/${orderID}/lineitems`, { data: lineItem, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TLineItem extends LineItem>(direction: 'Incoming' | 'Outgoing', orderID: string, lineItemID: string,  accessToken?: string ): Promise<RequiredDeep<TLineItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/orders/${direction}/${orderID}/lineitems/${lineItemID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param lineItem Required fields: ProductID, Quantity
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TLineItem extends LineItem>(direction: 'Incoming' | 'Outgoing', orderID: string, lineItemID: string, lineItem: LineItem, accessToken?: string ): Promise<RequiredDeep<TLineItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/orders/${direction}/${orderID}/lineitems/${lineItemID}`, { data: lineItem, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(direction: 'Incoming' | 'Outgoing', orderID: string, lineItemID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/orders/${direction}/${orderID}/lineitems/${lineItemID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param lineItem 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TLineItem extends LineItem>(direction: 'Incoming' | 'Outgoing', orderID: string, lineItemID: string, lineItem: PartialDeep<LineItem>,  accessToken?: string ): Promise<RequiredDeep<TLineItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/orders/${direction}/${orderID}/lineitems/${lineItemID}`, { data: lineItem, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SetShippingAddress<TLineItem extends LineItem>(direction: 'Incoming' | 'Outgoing', orderID: string, lineItemID: string, address: Address, accessToken?: string ): Promise<RequiredDeep<TLineItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/orders/${direction}/${orderID}/lineitems/${lineItemID}/shipto`, { data: address, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param address 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PatchShippingAddress<TLineItem extends LineItem>(direction: 'Incoming' | 'Outgoing', orderID: string, lineItemID: string, address: Address, accessToken?: string ): Promise<RequiredDeep<TLineItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/orders/${direction}/${orderID}/lineitems/${lineItemID}/shipto`, { data: address, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * LineItems.As().List() // lists LineItems using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new LineItems();