import { ListPage } from '../models/ListPage';
import { User } from '../models/User';
import { ImpersonateTokenRequest } from '../models/ImpersonateTokenRequest';
import { AccessToken } from '../models/AccessToken';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class SupplierUsers {
    private impersonating:boolean = false;

   /**
    * @param supplierID ID of the supplier.
    * @param options.userGroupID ID of the user group.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TUser extends User>(supplierID: string,  options: { userGroupID?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TUser>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TUser>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/suppliers/${supplierID}/users`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TUser extends User>(supplierID: string, user: User, accessToken?: string ): Promise<RequiredDeep<TUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/suppliers/${supplierID}/users`, { data: user, params: { accessToken, impersonating } }  );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TUser extends User>(supplierID: string, userID: string,  accessToken?: string ): Promise<RequiredDeep<TUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/suppliers/${supplierID}/users/${userID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TUser extends User>(supplierID: string, userID: string, user: User, accessToken?: string ): Promise<RequiredDeep<TUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/suppliers/${supplierID}/users/${userID}`, { data: user, params: { accessToken, impersonating } }  );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(supplierID: string, userID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/suppliers/${supplierID}/users/${userID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param user 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TUser extends User>(supplierID: string, userID: string, user: PartialDeep<User>,  accessToken?: string ): Promise<RequiredDeep<TUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/suppliers/${supplierID}/users/${userID}`, { data: user, params: { accessToken, impersonating } }  );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param impersonateTokenRequest Required fields: ClientID, Roles
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetAccessToken<TAccessToken extends AccessToken>(supplierID: string, userID: string, impersonateTokenRequest: ImpersonateTokenRequest, accessToken?: string ): Promise<RequiredDeep<TAccessToken>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/suppliers/${supplierID}/users/${userID}/accesstoken`, { data: impersonateTokenRequest, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * SupplierUsers.As().List() // lists SupplierUsers using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new SupplierUsers();