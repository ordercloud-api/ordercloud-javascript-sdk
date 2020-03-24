import { ListPage } from '../models/ListPage';
import { Incrementor } from '../models/Incrementor';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import httpClient from '../utils/HttpClient';
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
    * Get a list of incrementors. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/incrementors/list|api docs} for more info 
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
    public async List<TIncrementor extends Incrementor>( listOptions: { search?: string, searchOn?: ('ID' | 'Name')[], sortBy?: ('ID' | 'Name' | '!ID' | '!Name')[], page?: number, pageSize?: number, filters?: Filters<Required<TIncrementor>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TIncrementor>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/incrementors`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new incrementor. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/seller/incrementors/create|api docs} for more info 
    * 
    * @param incrementor Required fields: LastNumber, LeftPaddingCount
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create<TIncrementor extends Incrementor>(incrementor: Incrementor, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TIncrementor>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/incrementors`, incrementor, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single incrementor. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/incrementors/get|api docs} for more info 
    * 
    * @param incrementorID ID of the incrementor.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TIncrementor extends Incrementor>(incrementorID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TIncrementor>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/incrementors/${incrementorID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an incrementor. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/seller/incrementors/save|api docs} for more info 
    * 
    * @param incrementorID ID of the incrementor.
    * @param incrementor Required fields: LastNumber, LeftPaddingCount
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TIncrementor extends Incrementor>(incrementorID: string, incrementor: Incrementor, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TIncrementor>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/incrementors/${incrementorID}`, incrementor, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an incrementor. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/incrementors/delete|api docs} for more info 
    * 
    * @param incrementorID ID of the incrementor.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(incrementorID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/incrementors/${incrementorID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an incrementor. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/incrementors/patch|api docs} for more info 
    * 
    * @param incrementorID ID of the incrementor.
    * @param incrementor 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TIncrementor extends Incrementor>(incrementorID: string, incrementor: PartialDeep<Incrementor>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TIncrementor>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/incrementors/${incrementorID}`, incrementor, { ...requestOptions, impersonating, params: {   } } )
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