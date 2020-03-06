import { ListPage } from '../models/ListPage';
import { ImpersonationConfig } from '../models/ImpersonationConfig';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import httpClient from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class ImpersonationConfigs {
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
    public async List<TImpersonationConfig extends ImpersonationConfig>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TImpersonationConfig>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TImpersonationConfig>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/impersonationconfig`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param impersonationConfig Required fields: BuyerID, SecurityProfileID, ClientID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create<TImpersonationConfig extends ImpersonationConfig>(impersonationConfig: ImpersonationConfig, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TImpersonationConfig>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/impersonationconfig`, impersonationConfig, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param impersonationConfigID ID of the impersonation config.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TImpersonationConfig>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/impersonationconfig/${impersonationConfigID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param impersonationConfigID ID of the impersonation config.
    * @param impersonationConfig Required fields: BuyerID, SecurityProfileID, ClientID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, impersonationConfig: ImpersonationConfig, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TImpersonationConfig>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/impersonationconfig/${impersonationConfigID}`, impersonationConfig, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param impersonationConfigID ID of the impersonation config.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(impersonationConfigID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/impersonationconfig/${impersonationConfigID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param impersonationConfigID ID of the impersonation config.
    * @param impersonationConfig 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, impersonationConfig: PartialDeep<ImpersonationConfig>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TImpersonationConfig>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/impersonationconfig/${impersonationConfigID}`, impersonationConfig, { params: {  ...requestOptions, impersonating } } )
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
     * ImpersonationConfigs.As().List() // lists ImpersonationConfigs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new ImpersonationConfigs();