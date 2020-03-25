import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { SecurityProfile } from '../models/SecurityProfile';
import { SecurityProfileAssignment } from '../models/SecurityProfileAssignment';
import { CommerceRole } from '../models/CommerceRole';
import { PartyType } from '../models/PartyType';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class SecurityProfiles {
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
    * Get a list of security profiles. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/list|api docs} for more info 
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
    public async List(listOptions?: { search?: string, searchOn?: Searchable<'SecurityProfiles.List'>, sortBy?: Sortable<'SecurityProfiles.List'>, page?: number, pageSize?: number, filters?: Filters<Required<SecurityProfile>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<SecurityProfile>>>;
    public async List<TSecurityProfile extends SecurityProfile>(listOptions?: { search?: string, searchOn?: Searchable<'SecurityProfiles.List'>, sortBy?: Sortable<'SecurityProfiles.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TSecurityProfile>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TSecurityProfile>>>;
    public async List<TSecurityProfile extends SecurityProfile>(listOptions: { search?: string, searchOn?: Searchable<'SecurityProfiles.List'>, sortBy?: Sortable<'SecurityProfiles.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TSecurityProfile>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSecurityProfile>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/securityprofiles`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new security profile. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/create|api docs} for more info 
    * 
    * @param securityProfile Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create(securityProfile: SecurityProfile,requestOptions?: RequestOptions ): Promise<RequiredDeep<SecurityProfile>>;
    public async Create<TSecurityProfile extends SecurityProfile>(securityProfile: SecurityProfile,requestOptions?: RequestOptions ): Promise<RequiredDeep<TSecurityProfile>>;
    public async Create<TSecurityProfile extends SecurityProfile>(securityProfile: SecurityProfile,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSecurityProfile>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/securityprofiles`, { ...requestOptions, data: securityProfile, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single security profile. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/get|api docs} for more info 
    * 
    * @param securityProfileID ID of the security profile.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get(securityProfileID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<SecurityProfile>>;
    public async Get<TSecurityProfile extends SecurityProfile>(securityProfileID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<TSecurityProfile>>;
    public async Get<TSecurityProfile extends SecurityProfile>(securityProfileID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSecurityProfile>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/securityprofiles/${securityProfileID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a security profile. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/save|api docs} for more info 
    * 
    * @param securityProfileID ID of the security profile.
    * @param securityProfile Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save(securityProfileID: string, securityProfile: SecurityProfile,requestOptions?: RequestOptions ): Promise<RequiredDeep<SecurityProfile>>;
    public async Save<TSecurityProfile extends SecurityProfile>(securityProfileID: string, securityProfile: SecurityProfile,requestOptions?: RequestOptions ): Promise<RequiredDeep<TSecurityProfile>>;
    public async Save<TSecurityProfile extends SecurityProfile>(securityProfileID: string, securityProfile: SecurityProfile,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSecurityProfile>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/securityprofiles/${securityProfileID}`, { ...requestOptions, data: securityProfile, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a security profile. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/delete|api docs} for more info 
    * 
    * @param securityProfileID ID of the security profile.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(securityProfileID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(securityProfileID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(securityProfileID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/securityprofiles/${securityProfileID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a security profile. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/patch|api docs} for more info 
    * 
    * @param securityProfileID ID of the security profile.
    * @param securityProfile 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch(securityProfileID: string, securityProfile: PartialDeep<SecurityProfile>, requestOptions?: RequestOptions ): Promise<RequiredDeep<SecurityProfile>>;
    public async Patch<TSecurityProfile extends SecurityProfile>(securityProfileID: string, securityProfile: PartialDeep<SecurityProfile>, requestOptions?: RequestOptions ): Promise<RequiredDeep<TSecurityProfile>>;
    public async Patch<TSecurityProfile extends SecurityProfile>(securityProfileID: string, securityProfile: PartialDeep<SecurityProfile>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSecurityProfile>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/securityprofiles/${securityProfileID}`, { ...requestOptions, data: securityProfile, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a security profile assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/delete-assignment|api docs} for more info 
    * 
    * @param securityProfileID ID of the security profile.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteAssignment(securityProfileID: string, listOptions?: { buyerID?: string, userID?: string, userGroupID?: string, supplierID?: string }, requestOptions?: RequestOptions ): Promise<void>;
    public async DeleteAssignment(securityProfileID: string, listOptions?: { buyerID?: string, userID?: string, userGroupID?: string, supplierID?: string }, requestOptions?: RequestOptions ): Promise<void>;
    public async DeleteAssignment(securityProfileID: string, listOptions: { buyerID?: string, userID?: string, userGroupID?: string, supplierID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/securityprofiles/${securityProfileID}/assignments`, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of security profile assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/list-assignments|api docs} for more info 
    * 
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.supplierID ID of the supplier.
    * @param listOptions.securityProfileID ID of the security profile.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.commerceRole Commerce role of the security profile assignment. Possible values: Buyer, Seller, Supplier.
    * @param listOptions.level Level of the security profile assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListAssignments(listOptions?: { buyerID?: string, supplierID?: string, securityProfileID?: string, userID?: string, userGroupID?: string, commerceRole?: CommerceRole, level?: PartyType, page?: number, pageSize?: number }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<SecurityProfileAssignment>>>;
    public async ListAssignments<TSecurityProfileAssignment extends SecurityProfileAssignment>(listOptions?: { buyerID?: string, supplierID?: string, securityProfileID?: string, userID?: string, userGroupID?: string, commerceRole?: CommerceRole, level?: PartyType, page?: number, pageSize?: number }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TSecurityProfileAssignment>>>;
    public async ListAssignments<TSecurityProfileAssignment extends SecurityProfileAssignment>(listOptions: { buyerID?: string, supplierID?: string, securityProfileID?: string, userID?: string, userGroupID?: string, commerceRole?: CommerceRole, level?: PartyType, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSecurityProfileAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/securityprofiles/assignments`, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a security profile assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/save-assignment|api docs} for more info 
    * 
    * @param securityProfileAssignment Required fields: SecurityProfileID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SaveAssignment(securityProfileAssignment: SecurityProfileAssignment,requestOptions?: RequestOptions ): Promise<void>;
    public async SaveAssignment(securityProfileAssignment: SecurityProfileAssignment,requestOptions?: RequestOptions ): Promise<void>;
    public async SaveAssignment(securityProfileAssignment: SecurityProfileAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/securityprofiles/assignments`, { ...requestOptions, data: securityProfileAssignment, impersonating, params: {   } } )
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
     * SecurityProfiles.As().List() // lists SecurityProfiles using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new SecurityProfiles();