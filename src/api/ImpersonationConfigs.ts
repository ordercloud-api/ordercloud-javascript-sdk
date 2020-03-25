import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { ImpersonationConfig } from '../models/ImpersonationConfig';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
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
    * Get a list of impersonation configs. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/impersonation-configs/list|api docs} for more info 
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
    public async List(listOptions?: { search?: string, searchOn?: Searchable<'ImpersonationConfigs.List'>, sortBy?: Sortable<'ImpersonationConfigs.List'>, page?: number, pageSize?: number, filters?: Filters<Required<ImpersonationConfig>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<ImpersonationConfig>>>;
    public async List<TImpersonationConfig extends ImpersonationConfig>(listOptions?: { search?: string, searchOn?: Searchable<'ImpersonationConfigs.List'>, sortBy?: Sortable<'ImpersonationConfigs.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TImpersonationConfig>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TImpersonationConfig>>>;
    public async List<TImpersonationConfig extends ImpersonationConfig>(listOptions: { search?: string, searchOn?: Searchable<'ImpersonationConfigs.List'>, sortBy?: Sortable<'ImpersonationConfigs.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TImpersonationConfig>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TImpersonationConfig>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/impersonationconfig`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new impersonation config. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/impersonation-configs/create|api docs} for more info 
    * 
    * @param impersonationConfig Required fields: BuyerID, SecurityProfileID, ClientID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create(impersonationConfig: ImpersonationConfig,requestOptions?: RequestOptions ): Promise<RequiredDeep<ImpersonationConfig>>;
    public async Create<TImpersonationConfig extends ImpersonationConfig>(impersonationConfig: ImpersonationConfig,requestOptions?: RequestOptions ): Promise<RequiredDeep<TImpersonationConfig>>;
    public async Create<TImpersonationConfig extends ImpersonationConfig>(impersonationConfig: ImpersonationConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TImpersonationConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/impersonationconfig`, { ...requestOptions, data: impersonationConfig, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single impersonation config. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/impersonation-configs/get|api docs} for more info 
    * 
    * @param impersonationConfigID ID of the impersonation config.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get(impersonationConfigID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<ImpersonationConfig>>;
    public async Get<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<TImpersonationConfig>>;
    public async Get<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TImpersonationConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/impersonationconfig/${impersonationConfigID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an impersonation config. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/impersonation-configs/save|api docs} for more info 
    * 
    * @param impersonationConfigID ID of the impersonation config.
    * @param impersonationConfig Required fields: BuyerID, SecurityProfileID, ClientID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save(impersonationConfigID: string, impersonationConfig: ImpersonationConfig,requestOptions?: RequestOptions ): Promise<RequiredDeep<ImpersonationConfig>>;
    public async Save<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, impersonationConfig: ImpersonationConfig,requestOptions?: RequestOptions ): Promise<RequiredDeep<TImpersonationConfig>>;
    public async Save<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, impersonationConfig: ImpersonationConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TImpersonationConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/impersonationconfig/${impersonationConfigID}`, { ...requestOptions, data: impersonationConfig, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an impersonation config. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/impersonation-configs/delete|api docs} for more info 
    * 
    * @param impersonationConfigID ID of the impersonation config.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(impersonationConfigID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(impersonationConfigID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(impersonationConfigID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/impersonationconfig/${impersonationConfigID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an impersonation config. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/impersonation-configs/patch|api docs} for more info 
    * 
    * @param impersonationConfigID ID of the impersonation config.
    * @param impersonationConfig 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch(impersonationConfigID: string, impersonationConfig: PartialDeep<ImpersonationConfig>, requestOptions?: RequestOptions ): Promise<RequiredDeep<ImpersonationConfig>>;
    public async Patch<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, impersonationConfig: PartialDeep<ImpersonationConfig>, requestOptions?: RequestOptions ): Promise<RequiredDeep<TImpersonationConfig>>;
    public async Patch<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, impersonationConfig: PartialDeep<ImpersonationConfig>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TImpersonationConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/impersonationconfig/${impersonationConfigID}`, { ...requestOptions, data: impersonationConfig, impersonating, params: {   } } )
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