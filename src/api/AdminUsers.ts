import { ListPage } from '../models/ListPage';
import { User } from '../models/User';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

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
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TUser extends User>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TUser>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TUser>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/adminusers`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TUser extends User>(user: User, accessToken?: string ): Promise<RequiredDeep<TUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/adminusers`, user, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param userID ID of the user.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TUser extends User>(userID: string,  accessToken?: string ): Promise<RequiredDeep<TUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/adminusers/${userID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param userID ID of the user.
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TUser extends User>(userID: string, user: User, accessToken?: string ): Promise<RequiredDeep<TUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/adminusers/${userID}`, user, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param userID ID of the user.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(userID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/adminusers/${userID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param userID ID of the user.
    * @param user 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TUser extends User>(userID: string, user: PartialDeep<User>,  accessToken?: string ): Promise<RequiredDeep<TUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/adminusers/${userID}`, user, { params: {  accessToken, impersonating } } );
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