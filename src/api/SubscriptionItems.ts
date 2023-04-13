import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { LineItem } from '../models/LineItem';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class SubscriptionItems {
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
    }

   /**
    * Get a list of subscription items. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/subscription-items/list|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
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
    public async List<TLineItem extends LineItem>(subscriptionID: string, listOptions: { search?: string, searchOn?: Searchable<'SubscriptionItems.List'>, sortBy?: Sortable<'SubscriptionItems.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TLineItem>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/subscriptions/${subscriptionID}/items`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new subscription item. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/subscription-items/create|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param lineItem Required fields: ProductID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TLineItem extends LineItem>(subscriptionID: string, lineItem: LineItem,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/subscriptions/${subscriptionID}/items`, { ...requestOptions, data: lineItem, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single subscription item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/subscription-items/get|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param subscriptionItemID ID of the subscription item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TLineItem extends LineItem>(subscriptionID: string, subscriptionItemID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/subscriptions/${subscriptionID}/items/${subscriptionItemID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a subscription item. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/subscription-items/save|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param subscriptionItemID ID of the subscription item.
    * @param lineItem Required fields: ProductID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TLineItem extends LineItem>(subscriptionID: string, subscriptionItemID: string, lineItem: LineItem,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/subscriptions/${subscriptionID}/items/${subscriptionItemID}`, { ...requestOptions, data: lineItem, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a subscription item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/subscription-items/delete|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param subscriptionItemID ID of the subscription item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(subscriptionID: string, subscriptionItemID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/subscriptions/${subscriptionID}/items/${subscriptionItemID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a subscription item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/subscription-items/patch|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param subscriptionItemID ID of the subscription item.
    * @param lineItem 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TLineItem extends LineItem>(subscriptionID: string, subscriptionItemID: string, lineItem: PartialDeep<LineItem>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/subscriptions/${subscriptionID}/items/${subscriptionItemID}`, { ...requestOptions, data: lineItem, impersonating,  } )
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
     * SubscriptionItems.As().List() // lists SubscriptionItems using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new SubscriptionItems();