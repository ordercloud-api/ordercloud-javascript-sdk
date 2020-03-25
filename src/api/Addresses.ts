import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Address } from '../models/Address';
import { AddressAssignment } from '../models/AddressAssignment';
import { PartyType } from '../models/PartyType';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Addresses {
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
        this.DeleteAssignment = this.DeleteAssignment.bind(this);
        this.ListAssignments = this.ListAssignments.bind(this);
        this.SaveAssignment = this.SaveAssignment.bind(this);
    }

   /**
    * Get a list of addresses. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/list|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async List(buyerID: string, listOptions?: { search?: string, searchOn?: Searchable<'Addresses.List'>, sortBy?: Sortable<'Addresses.List'>, page?: number, pageSize?: number, filters?: Filters<Required<Address>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<Address>>>;
    public async List<TAddress extends Address>(buyerID: string, listOptions?: { search?: string, searchOn?: Searchable<'Addresses.List'>, sortBy?: Sortable<'Addresses.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TAddress>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TAddress>>>;
    public async List<TAddress extends Address>(buyerID: string, listOptions: { search?: string, searchOn?: Searchable<'Addresses.List'>, sortBy?: Sortable<'Addresses.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TAddress>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TAddress>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/buyers/${buyerID}/addresses`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new address. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/create|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create(buyerID: string, address: Address,requestOptions?: RequestOptions ): Promise<RequiredDeep<Address>>;
    public async Create<TAddress extends Address>(buyerID: string, address: Address,requestOptions?: RequestOptions ): Promise<RequiredDeep<TAddress>>;
    public async Create<TAddress extends Address>(buyerID: string, address: Address,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/buyers/${buyerID}/addresses`, { ...requestOptions, data: address, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single address. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/get|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get(buyerID: string, addressID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<Address>>;
    public async Get<TAddress extends Address>(buyerID: string, addressID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<TAddress>>;
    public async Get<TAddress extends Address>(buyerID: string, addressID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/buyers/${buyerID}/addresses/${addressID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an address. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/save|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save(buyerID: string, addressID: string, address: Address,requestOptions?: RequestOptions ): Promise<RequiredDeep<Address>>;
    public async Save<TAddress extends Address>(buyerID: string, addressID: string, address: Address,requestOptions?: RequestOptions ): Promise<RequiredDeep<TAddress>>;
    public async Save<TAddress extends Address>(buyerID: string, addressID: string, address: Address,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/buyers/${buyerID}/addresses/${addressID}`, { ...requestOptions, data: address, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an address. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/delete|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(buyerID: string, addressID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(buyerID: string, addressID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(buyerID: string, addressID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/buyers/${buyerID}/addresses/${addressID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an address. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/patch|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param address 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch(buyerID: string, addressID: string, address: PartialDeep<Address>, requestOptions?: RequestOptions ): Promise<RequiredDeep<Address>>;
    public async Patch<TAddress extends Address>(buyerID: string, addressID: string, address: PartialDeep<Address>, requestOptions?: RequestOptions ): Promise<RequiredDeep<TAddress>>;
    public async Patch<TAddress extends Address>(buyerID: string, addressID: string, address: PartialDeep<Address>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/buyers/${buyerID}/addresses/${addressID}`, { ...requestOptions, data: address, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an address assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/delete-assignment|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteAssignment(buyerID: string, addressID: string, listOptions?: { userID?: string, userGroupID?: string }, requestOptions?: RequestOptions ): Promise<void>;
    public async DeleteAssignment(buyerID: string, addressID: string, listOptions?: { userID?: string, userGroupID?: string }, requestOptions?: RequestOptions ): Promise<void>;
    public async DeleteAssignment(buyerID: string, addressID: string, listOptions: { userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/buyers/${buyerID}/addresses/${addressID}/assignments`, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of address assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/list-assignments|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param listOptions.addressID ID of the address.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the address assignment. Possible values: User, Group, Company.
    * @param listOptions.isShipping Is shipping of the address assignment.
    * @param listOptions.isBilling Is billing of the address assignment.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListAssignments(buyerID: string, listOptions?: { addressID?: string, userID?: string, userGroupID?: string, level?: PartyType, isShipping?: boolean, isBilling?: boolean, page?: number, pageSize?: number }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<AddressAssignment>>>;
    public async ListAssignments<TAddressAssignment extends AddressAssignment>(buyerID: string, listOptions?: { addressID?: string, userID?: string, userGroupID?: string, level?: PartyType, isShipping?: boolean, isBilling?: boolean, page?: number, pageSize?: number }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TAddressAssignment>>>;
    public async ListAssignments<TAddressAssignment extends AddressAssignment>(buyerID: string, listOptions: { addressID?: string, userID?: string, userGroupID?: string, level?: PartyType, isShipping?: boolean, isBilling?: boolean, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TAddressAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/buyers/${buyerID}/addresses/assignments`, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an address assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/save-assignment|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param addressAssignment Required fields: AddressID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SaveAssignment(buyerID: string, addressAssignment: AddressAssignment,requestOptions?: RequestOptions ): Promise<void>;
    public async SaveAssignment(buyerID: string, addressAssignment: AddressAssignment,requestOptions?: RequestOptions ): Promise<void>;
    public async SaveAssignment(buyerID: string, addressAssignment: AddressAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/buyers/${buyerID}/addresses/assignments`, { ...requestOptions, data: addressAssignment, impersonating, params: {   } } )
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
     * Addresses.As().List() // lists Addresses using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Addresses();