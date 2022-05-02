import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { IntegrationEvent } from '../models/IntegrationEvent';
import { OrderWorksheet } from '../models/OrderWorksheet';
import { OrderDirection } from '../models/OrderDirection';
import { OrderShipMethodSelection } from '../models/OrderShipMethodSelection';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class IntegrationEvents {
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
        this.Calculate = this.Calculate.bind(this);
        this.EstimateShipping = this.EstimateShipping.bind(this);
        this.SelectShipmethods = this.SelectShipmethods.bind(this);
        this.GetWorksheet = this.GetWorksheet.bind(this);
    }

   /**
    * Get a list of integration events. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/list|api docs} for more info 
    * 
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
    public async List<TIntegrationEvent extends IntegrationEvent>(listOptions: { search?: string, searchOn?: Searchable<'IntegrationEvents.List'>, sortBy?: Sortable<'IntegrationEvents.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TIntegrationEvent>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrationEvents`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new integration event. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/create|api docs} for more info 
    * 
    * @param integrationEvent Required fields: CustomImplementationUrl, Name, HashKey
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TIntegrationEvent extends IntegrationEvent>(integrationEvent: IntegrationEvent,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TIntegrationEvent>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/integrationEvents`, { ...requestOptions, data: integrationEvent, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single integration event. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/get|api docs} for more info 
    * 
    * @param integrationEventID ID of the integration event.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TIntegrationEvent extends IntegrationEvent>(integrationEventID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TIntegrationEvent>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrationEvents/${integrationEventID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an integration event. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/save|api docs} for more info 
    * 
    * @param integrationEventID ID of the integration event.
    * @param integrationEvent Required fields: CustomImplementationUrl, Name, HashKey
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TIntegrationEvent extends IntegrationEvent>(integrationEventID: string, integrationEvent: IntegrationEvent,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TIntegrationEvent>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrationEvents/${integrationEventID}`, { ...requestOptions, data: integrationEvent, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an integration event. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/delete|api docs} for more info 
    * 
    * @param integrationEventID ID of the integration event.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(integrationEventID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrationEvents/${integrationEventID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an integration event. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/patch|api docs} for more info 
    * 
    * @param integrationEventID ID of the integration event.
    * @param integrationEvent 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TIntegrationEvent extends IntegrationEvent>(integrationEventID: string, integrationEvent: PartialDeep<IntegrationEvent>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TIntegrationEvent>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrationEvents/${integrationEventID}`, { ...requestOptions, data: integrationEvent, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Calculate an order. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/calculate|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Calculate<TOrderWorksheet extends OrderWorksheet>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderWorksheet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/calculate`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Estimate shipping cost. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/estimate-shipping|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async EstimateShipping<TOrderWorksheet extends OrderWorksheet>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderWorksheet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/estimateshipping`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Select a ship method. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/select-shipmethods|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param orderShipMethodSelection 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SelectShipmethods<TOrderWorksheet extends OrderWorksheet>(direction: OrderDirection, orderID: string, orderShipMethodSelection: OrderShipMethodSelection,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderWorksheet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/shipmethods`, { ...requestOptions, data: orderShipMethodSelection, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single order worksheet. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/get-worksheet|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetWorksheet<TOrderWorksheet extends OrderWorksheet>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderWorksheet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/orders/${direction}/${orderID}/worksheet`, { ...requestOptions, impersonating,  } )
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
     * IntegrationEvents.As().List() // lists IntegrationEvents using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new IntegrationEvents();