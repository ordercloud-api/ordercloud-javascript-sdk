import { ListPage } from '../models/ListPage';
import { SecurityProfile } from '../models/SecurityProfile';
import { SecurityProfileAssignment } from '../models/SecurityProfileAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

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
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TSecurityProfile extends SecurityProfile>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TSecurityProfile>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TSecurityProfile>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/securityprofiles`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param securityProfile Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TSecurityProfile extends SecurityProfile>(securityProfile: SecurityProfile, accessToken?: string ): Promise<RequiredDeep<TSecurityProfile>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/securityprofiles`, { data: securityProfile, params: { accessToken, impersonating } }  );
    }

   /**
    * @param securityProfileID ID of the security profile.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TSecurityProfile extends SecurityProfile>(securityProfileID: string,  accessToken?: string ): Promise<RequiredDeep<TSecurityProfile>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/securityprofiles/${securityProfileID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param securityProfileID ID of the security profile.
    * @param securityProfile Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TSecurityProfile extends SecurityProfile>(securityProfileID: string, securityProfile: SecurityProfile, accessToken?: string ): Promise<RequiredDeep<TSecurityProfile>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/securityprofiles/${securityProfileID}`, { data: securityProfile, params: { accessToken, impersonating } }  );
    }

   /**
    * @param securityProfileID ID of the security profile.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(securityProfileID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/securityprofiles/${securityProfileID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param securityProfileID ID of the security profile.
    * @param securityProfile 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TSecurityProfile extends SecurityProfile>(securityProfileID: string, securityProfile: PartialDeep<SecurityProfile>,  accessToken?: string ): Promise<RequiredDeep<TSecurityProfile>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/securityprofiles/${securityProfileID}`, { data: securityProfile, params: { accessToken, impersonating } }  );
    }

   /**
    * @param securityProfileID ID of the security profile.
    * @param options.buyerID ID of the buyer.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.supplierID ID of the supplier.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment(securityProfileID: string,  options: { buyerID?: string, userID?: string, userGroupID?: string, supplierID?: string } = {}, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/securityprofiles/${securityProfileID}/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param options.buyerID ID of the buyer.
    * @param options.supplierID ID of the supplier.
    * @param options.securityProfileID ID of the security profile.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.commerceRole Commerce role of the security profile assignment. Possible values: Buyer, Seller, Supplier.
    * @param options.level Level of the security profile assignment. Possible values: User, Group, Company.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments<TSecurityProfileAssignment extends SecurityProfileAssignment>( options: { buyerID?: string, supplierID?: string, securityProfileID?: string, userID?: string, userGroupID?: string, commerceRole?: string, level?: string, page?: number, pageSize?: number } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TSecurityProfileAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/securityprofiles/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param securityProfileAssignment Required fields: SecurityProfileID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment(securityProfileAssignment: SecurityProfileAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/securityprofiles/assignments`, { data: securityProfileAssignment, params: { accessToken, impersonating } }  );
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