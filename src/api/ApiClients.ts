import { ListPage } from '../models/ListPage';
import { ApiClient } from '../models/ApiClient';
import { ApiClientAssignment } from '../models/ApiClientAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class ApiClients {
    private impersonating:boolean = false;

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TApiClient extends ApiClient>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TApiClient>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TApiClient>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/apiclients`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param apiClient Required fields: AccessTokenDuration, AppName
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TApiClient extends ApiClient>(apiClient: ApiClient, accessToken?: string ): Promise<RequiredDeep<TApiClient>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/apiclients`, { data: apiClient, params: { accessToken, impersonating } }  );
    }

   /**
    * @param apiClientID ID of the api client.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TApiClient extends ApiClient>(apiClientID: string,  accessToken?: string ): Promise<RequiredDeep<TApiClient>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/apiclients/${apiClientID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param apiClientID ID of the api client.
    * @param apiClient Required fields: AccessTokenDuration, AppName
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TApiClient extends ApiClient>(apiClientID: string, apiClient: ApiClient, accessToken?: string ): Promise<RequiredDeep<TApiClient>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/apiclients/${apiClientID}`, { data: apiClient, params: { accessToken, impersonating } }  );
    }

   /**
    * @param apiClientID ID of the api client.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(apiClientID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/apiclients/${apiClientID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param apiClientID ID of the api client.
    * @param apiClient 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TApiClient extends ApiClient>(apiClientID: string, apiClient: PartialDeep<ApiClient>,  accessToken?: string ): Promise<RequiredDeep<TApiClient>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/apiclients/${apiClientID}`, { data: apiClient, params: { accessToken, impersonating } }  );
    }

   /**
    * @param options.apiClientID ID of the api client.
    * @param options.buyerID ID of the buyer.
    * @param options.supplierID ID of the supplier.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments<TApiClientAssignment extends ApiClientAssignment>( options: { apiClientID?: string, buyerID?: string, supplierID?: string, page?: number, pageSize?: number } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TApiClientAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/apiclients/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param apiClientAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment(apiClientAssignment: ApiClientAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/apiclients/assignments`, { data: apiClientAssignment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param apiClientID ID of the api client.
    * @param buyerID ID of the buyer.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteBuyerAssignment(apiClientID: string, buyerID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}/ApiClients/Assignments/${apiClientID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param apiClientID ID of the api client.
    * @param supplierID ID of the supplier.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteSupplierAssignment(apiClientID: string, supplierID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/suppliers/${supplierID}/ApiClients/Assignments/${apiClientID}`, { params: { accessToken, impersonating } } );
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