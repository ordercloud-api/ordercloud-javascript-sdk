import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { ExtendedLineItem } from '../models/ExtendedLineItem';
import { OrderDirection } from '../models/OrderDirection';
import { SearchType } from '../models/SearchType';
import { LineItem } from '../models/LineItem';
import { Address } from '../models/Address';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class LineItems {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.ListAcrossOrders = this.ListAcrossOrders.bind(this);
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
    * Get a list of line item across orders. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/list-across-orders|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.supplierID ID of the supplier.
    * @param listOptions.from Lower bound of date range that the order was created.
    * @param listOptions.to Upper bound of date range that the order was created.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.searchType Type of search to perform. Possible values: AnyTerm (default), AllTermsAnyField, AllTermsSameField, ExactPhrase, ExactPhrasePrefix.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListAcrossOrders<TExtendedLineItem extends ExtendedLineItem>(direction: OrderDirection, listOptions: { buyerID?: string, supplierID?: string, from?: string, to?: string, search?: string, searchOn?: Searchable<'LineItems.ListAcrossOrders'>, searchType?: SearchType, sortBy?: Sortable<'LineItems.ListAcrossOrders'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TExtendedLineItem>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/lineitems/${direction}`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of line items. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/list|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List<TLineItem extends LineItem>(direction: OrderDirection, orderID: string, listOptions: { search?: string, searchOn?: Searchable<'LineItems.List'>, sortBy?: Sortable<'LineItems.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TLineItem>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/orders/${direction}/${orderID}/lineitems`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new line item. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/create|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param lineItem Required fields: ProductID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TLineItem extends LineItem>(direction: OrderDirection, orderID: string, lineItem: LineItem,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/lineitems`, { ...requestOptions, data: lineItem, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single line item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/get|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TLineItem extends LineItem>(direction: OrderDirection, orderID: string, lineItemID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/orders/${direction}/${orderID}/lineitems/${lineItemID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a line item. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/save|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param lineItem Required fields: ProductID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TLineItem extends LineItem>(direction: OrderDirection, orderID: string, lineItemID: string, lineItem: LineItem,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/orders/${direction}/${orderID}/lineitems/${lineItemID}`, { ...requestOptions, data: lineItem, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a line item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/delete|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(direction: OrderDirection, orderID: string, lineItemID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/orders/${direction}/${orderID}/lineitems/${lineItemID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a line item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/patch|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param lineItem 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TLineItem extends LineItem>(direction: OrderDirection, orderID: string, lineItemID: string, lineItem: PartialDeep<LineItem>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/orders/${direction}/${orderID}/lineitems/${lineItemID}`, { ...requestOptions, data: lineItem, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Set a shipping address. Set the Shipping Address of the Line Item. Appropriate only when the Address is not to be saved/reused. To use a Saved Address (i.e. from the Addresses resource), PATCH the Line Item's ShippingAddressID property instead.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/set-shipping-address|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SetShippingAddress<TLineItem extends LineItem>(direction: OrderDirection, orderID: string, lineItemID: string, address: Address,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/orders/${direction}/${orderID}/lineitems/${lineItemID}/shipto`, { ...requestOptions, data: address, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a line item shipping address. Partially update the Shipping Address of the Line Item. Not allowed on unsubmitted Line Items where ShippingAddressID has been set. In that case, use the Addresses resource to update the Saved Address.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/patch-shipping-address|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param address 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchShippingAddress<TLineItem extends LineItem>(direction: OrderDirection, orderID: string, lineItemID: string, address: PartialDeep<Address>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/orders/${direction}/${orderID}/lineitems/${lineItemID}/shipto`, { ...requestOptions, data: address, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
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