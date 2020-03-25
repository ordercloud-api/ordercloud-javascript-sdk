import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { User } from '../models/User';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class AdminUsers {
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
    * Get a list of admin users. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-users/list|api docs} for more info 
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
    public async List(listOptions?: { search?: string, searchOn?: Searchable<'AdminUsers.List'>, sortBy?: Sortable<'AdminUsers.List'>, page?: number, pageSize?: number, filters?: Filters<Required<User>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<User>>>;
    public async List<TUser extends User>(listOptions?: { search?: string, searchOn?: Searchable<'AdminUsers.List'>, sortBy?: Sortable<'AdminUsers.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TUser>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TUser>>>;
    public async List<TUser extends User>(listOptions: { search?: string, searchOn?: Searchable<'AdminUsers.List'>, sortBy?: Sortable<'AdminUsers.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TUser>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TUser>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/adminusers`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new admin user. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-users/create|api docs} for more info 
    * 
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create(user: User,requestOptions?: RequestOptions ): Promise<RequiredDeep<User>>;
    public async Create<TUser extends User>(user: User,requestOptions?: RequestOptions ): Promise<RequiredDeep<TUser>>;
    public async Create<TUser extends User>(user: User,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/adminusers`, { ...requestOptions, data: user, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single admin user. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-users/get|api docs} for more info 
    * 
    * @param userID ID of the user.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get(userID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<User>>;
    public async Get<TUser extends User>(userID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<TUser>>;
    public async Get<TUser extends User>(userID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/adminusers/${userID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an admin user. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-users/save|api docs} for more info 
    * 
    * @param userID ID of the user.
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save(userID: string, user: User,requestOptions?: RequestOptions ): Promise<RequiredDeep<User>>;
    public async Save<TUser extends User>(userID: string, user: User,requestOptions?: RequestOptions ): Promise<RequiredDeep<TUser>>;
    public async Save<TUser extends User>(userID: string, user: User,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/adminusers/${userID}`, { ...requestOptions, data: user, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an admin user. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-users/delete|api docs} for more info 
    * 
    * @param userID ID of the user.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(userID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(userID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(userID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/adminusers/${userID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an admin user. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-users/patch|api docs} for more info 
    * 
    * @param userID ID of the user.
    * @param user 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch(userID: string, user: PartialDeep<User>, requestOptions?: RequestOptions ): Promise<RequiredDeep<User>>;
    public async Patch<TUser extends User>(userID: string, user: PartialDeep<User>, requestOptions?: RequestOptions ): Promise<RequiredDeep<TUser>>;
    public async Patch<TUser extends User>(userID: string, user: PartialDeep<User>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/adminusers/${userID}`, { ...requestOptions, data: user, impersonating, params: {   } } )
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
     * AdminUsers.As().List() // lists AdminUsers using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new AdminUsers();