import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Subscription } from '../models/Subscription';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Subscriptions {
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
    * List subscriptions 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/subscriptions/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List<TSubscription extends Subscription>(listOptions: { search?: string, searchOn?: Searchable<'Subscriptions.List'>, sortBy?: Sortable<'Subscriptions.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSubscription>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/subscriptions`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a subscription 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/subscriptions/create|api docs} for more info 
    * 
    * @param subscription Required fields: Frequency, Interval, NextOrderDate
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TSubscription extends Subscription>(subscription: Subscription,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSubscription>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/subscriptions`, { ...requestOptions, data: subscription, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve a subscription 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/subscriptions/get|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TSubscription extends Subscription>(subscriptionID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSubscription>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/subscriptions/${subscriptionID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a subscription If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/subscriptions/save|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param subscription Required fields: Frequency, Interval, NextOrderDate
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TSubscription extends Subscription>(subscriptionID: string, subscription: Subscription,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSubscription>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/subscriptions/${subscriptionID}`, { ...requestOptions, data: subscription, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a subscription 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/subscriptions/delete|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(subscriptionID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/subscriptions/${subscriptionID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a subscription 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/subscriptions/patch|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param subscription 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TSubscription extends Subscription>(subscriptionID: string, subscription: PartialDeep<Subscription>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSubscription>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/subscriptions/${subscriptionID}`, { ...requestOptions, data: subscription, impersonating,  } )
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
     * Subscriptions.As().List() // lists Subscriptions using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Subscriptions();