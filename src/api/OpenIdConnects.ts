import { ListPage } from '../models/ListPage';
import { OpenIdConnect } from '../models/OpenIdConnect';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import httpClient from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class OpenIdConnects {
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
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async List<TOpenIdConnect extends OpenIdConnect>( options: { search?: string, searchOn?: ('ID')[], sortBy?: ('ID' | '!ID')[], page?: number, pageSize?: number, filters?: Filters<Required<TOpenIdConnect>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TOpenIdConnect>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/openidconnects`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param openIdConnect Required fields: OrderCloudApiClientID, ConnectClientID, ConnectClientSecret, AppStartUrl, AuthorizationEndpoint, TokenEndpoint
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create<TOpenIdConnect extends OpenIdConnect>(openIdConnect: OpenIdConnect, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOpenIdConnect>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/openidconnects`, openIdConnect, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param openidconnectID ID of the openidconnect.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TOpenIdConnect extends OpenIdConnect>(openidconnectID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOpenIdConnect>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/openidconnects/${openidconnectID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param openidconnectID ID of the openidconnect.
    * @param openIdConnect Required fields: OrderCloudApiClientID, ConnectClientID, ConnectClientSecret, AppStartUrl, AuthorizationEndpoint, TokenEndpoint
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TOpenIdConnect extends OpenIdConnect>(openidconnectID: string, openIdConnect: OpenIdConnect, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOpenIdConnect>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/openidconnects/${openidconnectID}`, openIdConnect, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param openidconnectID ID of the openidconnect.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(openidconnectID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/openidconnects/${openidconnectID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param openidconnectID ID of the openidconnect.
    * @param openIdConnect 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TOpenIdConnect extends OpenIdConnect>(openidconnectID: string, openIdConnect: PartialDeep<OpenIdConnect>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOpenIdConnect>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/openidconnects/${openidconnectID}`, openIdConnect, { params: {  ...requestOptions, impersonating } } )
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
     * OpenIdConnects.As().List() // lists OpenIdConnects using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new OpenIdConnects();