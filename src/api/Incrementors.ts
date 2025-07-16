import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Incrementor } from '../models/Incrementor';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Incrementors {
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
    * List incrementors 
    * Check out the {@link https://ordercloud.io/api-reference/marketplace-owner/incrementors/list|api docs} for more info 
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
    public async List<TIncrementor extends Incrementor>(listOptions: { search?: string, searchOn?: Searchable<'Incrementors.List'>, sortBy?: Sortable<'Incrementors.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TIncrementor>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/incrementors`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create an incrementor 
    * Check out the {@link https://ordercloud.io/api-reference/marketplace-owner/incrementors/create|api docs} for more info 
    * 
    * @param incrementor Required fields: LastNumber, LeftPaddingCount
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TIncrementor extends Incrementor>(incrementor: Incrementor,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TIncrementor>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/incrementors`, { ...requestOptions, data: incrementor, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve an incrementor 
    * Check out the {@link https://ordercloud.io/api-reference/marketplace-owner/incrementors/get|api docs} for more info 
    * 
    * @param incrementorID ID of the incrementor.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TIncrementor extends Incrementor>(incrementorID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TIncrementor>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/incrementors/${incrementorID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an incrementor If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/marketplace-owner/incrementors/save|api docs} for more info 
    * 
    * @param incrementorID ID of the incrementor.
    * @param incrementor Required fields: LastNumber, LeftPaddingCount
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TIncrementor extends Incrementor>(incrementorID: string, incrementor: Incrementor,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TIncrementor>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/incrementors/${incrementorID}`, { ...requestOptions, data: incrementor, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an incrementor 
    * Check out the {@link https://ordercloud.io/api-reference/marketplace-owner/incrementors/delete|api docs} for more info 
    * 
    * @param incrementorID ID of the incrementor.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(incrementorID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/incrementors/${incrementorID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an incrementor 
    * Check out the {@link https://ordercloud.io/api-reference/marketplace-owner/incrementors/patch|api docs} for more info 
    * 
    * @param incrementorID ID of the incrementor.
    * @param incrementor 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TIncrementor extends Incrementor>(incrementorID: string, incrementor: PartialDeep<Incrementor>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TIncrementor>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/incrementors/${incrementorID}`, { ...requestOptions, data: incrementor, impersonating,  } )
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
     * Incrementors.As().List() // lists Incrementors using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Incrementors();