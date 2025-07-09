import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { DeliveryConfig } from '../models/DeliveryConfig';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class DeliveryConfigurations {
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
    * List delivery configurations 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/delivery-configurations/list|api docs} for more info 
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
    public async List<TDeliveryConfig extends DeliveryConfig>(listOptions: { search?: string, searchOn?: Searchable<'DeliveryConfigurations.List'>, sortBy?: Sortable<'DeliveryConfigurations.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TDeliveryConfig>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/deliveryconfig`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a delivery configuration 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/delivery-configurations/create|api docs} for more info 
    * 
    * @param deliveryConfig Required fields: Name, DeliveryTargets
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TDeliveryConfig extends DeliveryConfig>(deliveryConfig: DeliveryConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TDeliveryConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/integrations/deliveryconfig`, { ...requestOptions, data: deliveryConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve a delivery configuration 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/delivery-configurations/get|api docs} for more info 
    * 
    * @param deliveryConfigID ID of the delivery config.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TDeliveryConfig extends DeliveryConfig>(deliveryConfigID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TDeliveryConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/deliveryconfig/${deliveryConfigID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a delivery configuration If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/integrations/delivery-configurations/save|api docs} for more info 
    * 
    * @param deliveryConfigID ID of the delivery config.
    * @param deliveryConfig Required fields: Name, DeliveryTargets
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TDeliveryConfig extends DeliveryConfig>(deliveryConfigID: string, deliveryConfig: DeliveryConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TDeliveryConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrations/deliveryconfig/${deliveryConfigID}`, { ...requestOptions, data: deliveryConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a delivery configuration 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/delivery-configurations/delete|api docs} for more info 
    * 
    * @param deliveryConfigID ID of the delivery config.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(deliveryConfigID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrations/deliveryconfig/${deliveryConfigID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a delivery configuration 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/delivery-configurations/patch|api docs} for more info 
    * 
    * @param deliveryConfigID ID of the delivery config. Required.
    * @param deliveryConfig 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TDeliveryConfig extends DeliveryConfig>(deliveryConfigID: string, deliveryConfig: PartialDeep<DeliveryConfig>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TDeliveryConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrations/deliveryconfig/${deliveryConfigID}`, { ...requestOptions, data: deliveryConfig, impersonating,  } )
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
     * DeliveryConfigurations.As().List() // lists DeliveryConfigurations using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new DeliveryConfigurations();