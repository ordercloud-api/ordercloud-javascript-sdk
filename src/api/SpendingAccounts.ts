import { ListPage } from '../models/ListPage';
import { SpendingAccount } from '../models/SpendingAccount';
import { SpendingAccountAssignment } from '../models/SpendingAccountAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class SpendingAccounts {
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
    public async List<TSpendingAccount extends SpendingAccount>(buyerID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TSpendingAccount>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TSpendingAccount>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/spendingaccounts`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param spendingAccount Required fields: Name, Balance
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TSpendingAccount extends SpendingAccount>(buyerID: string, spendingAccount: SpendingAccount, accessToken?: string ): Promise<RequiredDeep<TSpendingAccount>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/${buyerID}/spendingaccounts`, { data: spendingAccount, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TSpendingAccount extends SpendingAccount>(buyerID: string, spendingAccountID: string,  accessToken?: string ): Promise<RequiredDeep<TSpendingAccount>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/spendingaccounts/${spendingAccountID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param spendingAccount Required fields: Name, Balance
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TSpendingAccount extends SpendingAccount>(buyerID: string, spendingAccountID: string, spendingAccount: SpendingAccount, accessToken?: string ): Promise<RequiredDeep<TSpendingAccount>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/buyers/${buyerID}/spendingaccounts/${spendingAccountID}`, { data: spendingAccount, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(buyerID: string, spendingAccountID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}/spendingaccounts/${spendingAccountID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param spendingAccount 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TSpendingAccount extends SpendingAccount>(buyerID: string, spendingAccountID: string, spendingAccount: PartialDeep<SpendingAccount>,  accessToken?: string ): Promise<RequiredDeep<TSpendingAccount>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/buyers/${buyerID}/spendingaccounts/${spendingAccountID}`, { data: spendingAccount, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment(buyerID: string, spendingAccountID: string,  options: { userID?: string, userGroupID?: string } = {}, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}/spendingaccounts/${spendingAccountID}/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param options.spendingAccountID ID of the spending account.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.level Level of the spending account assignment. Possible values: User, Group, Company.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments<TSpendingAccountAssignment extends SpendingAccountAssignment>(buyerID: string,  options: { spendingAccountID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TSpendingAccountAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/spendingaccounts/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param spendingAccountAssignment Required fields: SpendingAccountID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment(buyerID: string, spendingAccountAssignment: SpendingAccountAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/${buyerID}/spendingaccounts/assignments`, { data: spendingAccountAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * SpendingAccounts.As().List() // lists SpendingAccounts using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new SpendingAccounts();