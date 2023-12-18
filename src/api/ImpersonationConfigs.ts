import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { ImpersonationConfig } from '../models/ImpersonationConfig';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
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
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List<TImpersonationConfig extends ImpersonationConfig>(listOptions: { search?: string, searchOn?: Searchable<'ImpersonationConfigs.List'>, sortBy?: Sortable<'ImpersonationConfigs.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TImpersonationConfig>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/impersonationconfig`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param impersonationConfig Required fields: SecurityProfileID, ClientID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TImpersonationConfig extends ImpersonationConfig>(impersonationConfig: ImpersonationConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TImpersonationConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/impersonationconfig`, { ...requestOptions, data: impersonationConfig, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TImpersonationConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/impersonationconfig/${impersonationConfigID}`, { ...requestOptions, impersonating,  } )
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
    * @param impersonationConfig Required fields: SecurityProfileID, ClientID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, impersonationConfig: ImpersonationConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TImpersonationConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/impersonationconfig/${impersonationConfigID}`, { ...requestOptions, data: impersonationConfig, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(impersonationConfigID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/impersonationconfig/${impersonationConfigID}`, { ...requestOptions, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, impersonationConfig: PartialDeep<ImpersonationConfig>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TImpersonationConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/impersonationconfig/${impersonationConfigID}`, { ...requestOptions, data: impersonationConfig, impersonating,  } )
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