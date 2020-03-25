import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { ApiClient } from '../models/ApiClient';
import { ApiClientAssignment } from '../models/ApiClientAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class ApiClients {
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
        this.ListAssignments = this.ListAssignments.bind(this);
        this.SaveAssignment = this.SaveAssignment.bind(this);
        this.DeleteBuyerAssignment = this.DeleteBuyerAssignment.bind(this);
        this.DeleteSupplierAssignment = this.DeleteSupplierAssignment.bind(this);
    }

   /**
    * Get a list of api clients. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async List<TApiClient extends ApiClient>( listOptions: { search?: string, searchOn?: Searchable<'ApiClients.List'>, sortBy?: Sortable<'ApiClients.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TApiClient>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TApiClient>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/apiclients`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new api client. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/create|api docs} for more info 
    * 
    * @param apiClient Required fields: AccessTokenDuration, AppName
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create<TApiClient extends ApiClient>(apiClient: ApiClient, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApiClient>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/apiclients`, { ...requestOptions, data: apiClient, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single api client. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/get|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TApiClient extends ApiClient>(apiClientID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApiClient>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/apiclients/${apiClientID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an api client. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/save|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param apiClient Required fields: AccessTokenDuration, AppName
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TApiClient extends ApiClient>(apiClientID: string, apiClient: ApiClient, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApiClient>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/apiclients/${apiClientID}`, { ...requestOptions, data: apiClient, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an api client. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/delete|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(apiClientID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/apiclients/${apiClientID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an api client. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/patch|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param apiClient 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TApiClient extends ApiClient>(apiClientID: string, apiClient: PartialDeep<ApiClient>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApiClient>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/apiclients/${apiClientID}`, { ...requestOptions, data: apiClient, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of api client assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/list-assignments|api docs} for more info 
    * 
    * @param listOptions.apiClientID ID of the api client.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.supplierID ID of the supplier.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListAssignments<TApiClientAssignment extends ApiClientAssignment>( listOptions: { apiClientID?: string, buyerID?: string, supplierID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TApiClientAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/apiclients/assignments`, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an api client assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/save-assignment|api docs} for more info 
    * 
    * @param apiClientAssignment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SaveAssignment(apiClientAssignment: ApiClientAssignment, requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/apiclients/assignments`, { ...requestOptions, data: apiClientAssignment, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an api client buyer assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/delete-buyer-assignment|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param buyerID ID of the buyer.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteBuyerAssignment(apiClientID: string, buyerID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/buyers/${buyerID}/ApiClients/Assignments/${apiClientID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an api client supplier assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/delete-supplier-assignment|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteSupplierAssignment(apiClientID: string, supplierID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/suppliers/${supplierID}/ApiClients/Assignments/${apiClientID}`, { ...requestOptions, impersonating, params: {   } } )
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
     * ApiClients.As().List() // lists ApiClients using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new ApiClients();