import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { ApiClient } from '../models/ApiClient';
import { ApiClientSecret } from '../models/ApiClientSecret';
import { ApiClientSecretCreateResponse } from '../models/ApiClientSecretCreateResponse';
import { ApiClientAssignment } from '../models/ApiClientAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
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
        this.ListSecrets = this.ListSecrets.bind(this);
        this.CreateSecret = this.CreateSecret.bind(this);
        this.GetSecret = this.GetSecret.bind(this);
        this.DeleteSecret = this.DeleteSecret.bind(this);
        this.PatchSecret = this.PatchSecret.bind(this);
        this.ListAssignments = this.ListAssignments.bind(this);
        this.SaveAssignment = this.SaveAssignment.bind(this);
        this.DeleteBuyerAssignment = this.DeleteBuyerAssignment.bind(this);
        this.DeleteSupplierAssignment = this.DeleteSupplierAssignment.bind(this);
    }

   /**
    * List API clients 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/list|api docs} for more info 
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
    public async List<TApiClient extends ApiClient>(listOptions: { search?: string, searchOn?: Searchable<'ApiClients.List'>, sortBy?: Sortable<'ApiClients.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TApiClient>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/apiclients`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create an API client 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/create|api docs} for more info 
    * 
    * @param apiClient Required fields: AccessTokenDuration, AppName
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TApiClient extends ApiClient>(apiClient: ApiClient,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApiClient>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/apiclients`, { ...requestOptions, data: apiClient, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve an API client 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/get|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TApiClient extends ApiClient>(apiClientID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApiClient>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/apiclients/${apiClientID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an API client If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/save|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param apiClient Required fields: AccessTokenDuration, AppName
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TApiClient extends ApiClient>(apiClientID: string, apiClient: ApiClient,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApiClient>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/apiclients/${apiClientID}`, { ...requestOptions, data: apiClient, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an API client 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/delete|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(apiClientID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/apiclients/${apiClientID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an API client 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/patch|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param apiClient 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TApiClient extends ApiClient>(apiClientID: string, apiClient: PartialDeep<ApiClient>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApiClient>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/apiclients/${apiClientID}`, { ...requestOptions, data: apiClient, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * List API client secrets 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/list-secrets|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
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
    public async ListSecrets<TApiClientSecret extends ApiClientSecret>(apiClientID: string, listOptions: { search?: string, searchOn?: Searchable<'ApiClients.ListSecrets'>, sortBy?: Sortable<'ApiClients.ListSecrets'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TApiClientSecret>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/apiclients/${apiClientID}/secrets`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create an API client secret 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/create-secret|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param apiClientSecret Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async CreateSecret<TApiClientSecretCreateResponse extends ApiClientSecretCreateResponse>(apiClientID: string, apiClientSecret: ApiClientSecret,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApiClientSecretCreateResponse>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/apiclients/${apiClientID}/secrets`, { ...requestOptions, data: apiClientSecret, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve an API client secret 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/get-secret|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param apiClientSecretID ID of the api client secret.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetSecret<TApiClientSecret extends ApiClientSecret>(apiClientID: string, apiClientSecretID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApiClientSecret>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/apiclients/${apiClientID}/secrets/${apiClientSecretID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an API client secret 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/delete-secret|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param apiClientSecretID ID of the api client secret.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteSecret(apiClientID: string, apiClientSecretID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/apiclients/${apiClientID}/secrets/${apiClientSecretID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an API client secret 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/patch-secret|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param apiClientSecretID ID of the api client secret.
    * @param apiClientSecret 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchSecret<TApiClientSecret extends ApiClientSecret>(apiClientID: string, apiClientSecretID: string, apiClientSecret: PartialDeep<ApiClientSecret>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApiClientSecret>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/apiclients/${apiClientID}/secrets/${apiClientSecretID}`, { ...requestOptions, data: apiClientSecret, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * List API client assignments 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/list-assignments|api docs} for more info 
    * 
    * @param listOptions.apiClientID ID of the api client.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.supplierID ID of the supplier.
    * @param listOptions.page Page of results to return. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListAssignments<TApiClientAssignment extends ApiClientAssignment>(listOptions: { apiClientID?: string, buyerID?: string, supplierID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TApiClientAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/apiclients/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an API client assignment 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/save-assignment|api docs} for more info 
    * 
    * @param apiClientAssignment Required fields: ApiClientID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveAssignment(apiClientAssignment: ApiClientAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/apiclients/assignments`, { ...requestOptions, data: apiClientAssignment, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an API client buyer assignment 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/delete-buyer-assignment|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param buyerID ID of the buyer.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteBuyerAssignment(apiClientID: string, buyerID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/buyers/${buyerID}/ApiClients/Assignments/${apiClientID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an API client supplier assignment 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/delete-supplier-assignment|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteSupplierAssignment(apiClientID: string, supplierID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/suppliers/${supplierID}/ApiClients/Assignments/${apiClientID}`, { ...requestOptions, impersonating,  } )
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