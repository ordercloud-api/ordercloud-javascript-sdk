import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Address } from '../models/Address';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class AdminAddresses {
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
    * Get a list of admin addresses. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-addresses/list|api docs} for more info 
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
    public async List(listOptions?: { search?: string, searchOn?: Searchable<'AdminAddresses.List'>, sortBy?: Sortable<'AdminAddresses.List'>, page?: number, pageSize?: number, filters?: Filters<Required<Address>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<Address>>>;
    public async List<TAddress extends Address>(listOptions?: { search?: string, searchOn?: Searchable<'AdminAddresses.List'>, sortBy?: Sortable<'AdminAddresses.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TAddress>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TAddress>>>;
    public async List<TAddress extends Address>(listOptions: { search?: string, searchOn?: Searchable<'AdminAddresses.List'>, sortBy?: Sortable<'AdminAddresses.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TAddress>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TAddress>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/addresses`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new admin address. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-addresses/create|api docs} for more info 
    * 
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create(address: Address,requestOptions?: RequestOptions ): Promise<RequiredDeep<Address>>;
    public async Create<TAddress extends Address>(address: Address,requestOptions?: RequestOptions ): Promise<RequiredDeep<TAddress>>;
    public async Create<TAddress extends Address>(address: Address,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/addresses`, { ...requestOptions, data: address, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single admin address. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-addresses/get|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get(addressID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<Address>>;
    public async Get<TAddress extends Address>(addressID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<TAddress>>;
    public async Get<TAddress extends Address>(addressID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/addresses/${addressID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an admin address. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-addresses/save|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save(addressID: string, address: Address,requestOptions?: RequestOptions ): Promise<RequiredDeep<Address>>;
    public async Save<TAddress extends Address>(addressID: string, address: Address,requestOptions?: RequestOptions ): Promise<RequiredDeep<TAddress>>;
    public async Save<TAddress extends Address>(addressID: string, address: Address,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/addresses/${addressID}`, { ...requestOptions, data: address, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an admin address. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-addresses/delete|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(addressID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(addressID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(addressID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/addresses/${addressID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an admin address. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-addresses/patch|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param address 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch(addressID: string, address: PartialDeep<Address>, requestOptions?: RequestOptions ): Promise<RequiredDeep<Address>>;
    public async Patch<TAddress extends Address>(addressID: string, address: PartialDeep<Address>, requestOptions?: RequestOptions ): Promise<RequiredDeep<TAddress>>;
    public async Patch<TAddress extends Address>(addressID: string, address: PartialDeep<Address>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/addresses/${addressID}`, { ...requestOptions, data: address, impersonating, params: {   } } )
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
     * AdminAddresses.As().List() // lists AdminAddresses using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new AdminAddresses();