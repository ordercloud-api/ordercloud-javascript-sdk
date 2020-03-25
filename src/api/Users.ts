import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { User } from '../models/User';
import { ImpersonateTokenRequest } from '../models/ImpersonateTokenRequest';
import { AccessToken } from '../models/AccessToken';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import httpClient from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Users {
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
        this.GetAccessToken = this.GetAccessToken.bind(this);
        this.Move = this.Move.bind(this);
    }

   /**
    * Get a list of users. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/list|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async List<TUser extends User>(buyerID: string,  listOptions: { userGroupID?: string, search?: string, searchOn?: Searchable<'Users.List'>, sortBy?: Sortable<'Users.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TUser>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TUser>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/users`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new user. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/create|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create<TUser extends User>(buyerID: string, user: User, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/${buyerID}/users`, user, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single user. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/get|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userID ID of the user.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TUser extends User>(buyerID: string, userID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/users/${userID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a user. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/save|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userID ID of the user.
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TUser extends User>(buyerID: string, userID: string, user: User, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/buyers/${buyerID}/users/${userID}`, user, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a user. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/delete|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userID ID of the user.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(buyerID: string, userID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}/users/${userID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a user. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/patch|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userID ID of the user.
    * @param user 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TUser extends User>(buyerID: string, userID: string, user: PartialDeep<User>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/buyers/${buyerID}/users/${userID}`, user, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single user access token. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/get-access-token|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userID ID of the user.
    * @param impersonateTokenRequest Required fields: ClientID, Roles
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetAccessToken<TAccessToken extends AccessToken>(buyerID: string, userID: string, impersonateTokenRequest: ImpersonateTokenRequest, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAccessToken>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/${buyerID}/users/${userID}/accesstoken`, impersonateTokenRequest, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Move a user to a different buyer 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/move|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userID ID of the user.
    * @param newBuyerID ID of the new buyer.
    * @param listOptions.orders Orders of the user. Possible values: None, Unsubmitted, All.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Move<TUser extends User>(buyerID: string, userID: string, newBuyerID: string,  listOptions: { orders?: 'None' | 'Unsubmitted' | 'All' } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/${buyerID}/users/${userID}/moveto/${newBuyerID}`, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
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
     * Users.As().List() // lists Users using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Users();