import { BundleItems } from '../models/BundleItems';
import { LineItem } from '../models/LineItem';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class BundleSubscriptionItems {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.Create = this.Create.bind(this);
        this.Delete = this.Delete.bind(this);
    }

   /**
    * Create a bundle subscription item 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/bundle-subscription-items/create|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param bundleID ID of the bundle.
    * @param bundleItems 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TLineItem extends LineItem>(subscriptionID: string, bundleID: string, bundleItems: BundleItems,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/subscriptions/${subscriptionID}/bundles/${bundleID}`, { ...requestOptions, data: bundleItems, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a bundle subscription item 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/bundle-subscription-items/delete|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param bundleID ID of the bundle.
    * @param bundleItemID ID of the bundle item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(subscriptionID: string, bundleID: string, bundleItemID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/subscriptions/${subscriptionID}/bundles/${bundleID}/${bundleItemID}`, { ...requestOptions, impersonating,  } )
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
     * BundleSubscriptionItems.As().List() // lists BundleSubscriptionItems using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new BundleSubscriptionItems();