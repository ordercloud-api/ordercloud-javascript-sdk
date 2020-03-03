import { ListPage } from '../models/ListPage';
import { CostCenter } from '../models/CostCenter';
import { CostCenterAssignment } from '../models/CostCenterAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class CostCenters {
    private impersonating:boolean = false;

   /**
    * @param buyerID ID of the buyer.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TCostCenter extends CostCenter>(buyerID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TCostCenter>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TCostCenter>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/costcenters`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param costCenter Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TCostCenter extends CostCenter>(buyerID: string, costCenter: CostCenter, accessToken?: string ): Promise<RequiredDeep<TCostCenter>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/${buyerID}/costcenters`, { data: costCenter, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param costCenterID ID of the cost center.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TCostCenter extends CostCenter>(buyerID: string, costCenterID: string,  accessToken?: string ): Promise<RequiredDeep<TCostCenter>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/costcenters/${costCenterID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param costCenterID ID of the cost center.
    * @param costCenter Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TCostCenter extends CostCenter>(buyerID: string, costCenterID: string, costCenter: CostCenter, accessToken?: string ): Promise<RequiredDeep<TCostCenter>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/buyers/${buyerID}/costcenters/${costCenterID}`, { data: costCenter, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param costCenterID ID of the cost center.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(buyerID: string, costCenterID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}/costcenters/${costCenterID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param costCenterID ID of the cost center.
    * @param costCenter 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TCostCenter extends CostCenter>(buyerID: string, costCenterID: string, costCenter: PartialDeep<CostCenter>,  accessToken?: string ): Promise<RequiredDeep<TCostCenter>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/buyers/${buyerID}/costcenters/${costCenterID}`, { data: costCenter, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param costCenterID ID of the cost center.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment(buyerID: string, costCenterID: string,  options: { userID?: string, userGroupID?: string } = {}, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}/costcenters/${costCenterID}/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param options.costCenterID ID of the cost center.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.level Level of the cost center assignment. Possible values: User, Group, Company.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments<TCostCenterAssignment extends CostCenterAssignment>(buyerID: string,  options: { costCenterID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TCostCenterAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/costcenters/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param costCenterAssignment Required fields: CostCenterID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment(buyerID: string, costCenterAssignment: CostCenterAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/${buyerID}/costcenters/assignments`, { data: costCenterAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * CostCenters.As().List() // lists CostCenters using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new CostCenters();