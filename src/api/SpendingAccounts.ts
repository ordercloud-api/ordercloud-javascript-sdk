import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { SpendingAccount } from '../models/SpendingAccount';
import { SpendingAccountAssignment } from '../models/SpendingAccountAssignment';
import { PartyType } from '../models/PartyType';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class SpendingAccounts {
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
    * List spending accounts 
    * Check out the {@link https://ordercloud.io/api-reference/buyer/spending-accounts/list|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List<TSpendingAccount extends SpendingAccount>(buyerID: string, listOptions: { search?: string, searchOn?: Searchable<'SpendingAccounts.List'>, sortBy?: Sortable<'SpendingAccounts.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpendingAccount>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/buyers/${buyerID}/spendingaccounts`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a spending account 
    * Check out the {@link https://ordercloud.io/api-reference/buyer/spending-accounts/create|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param spendingAccount Required fields: Name, Balance
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TSpendingAccount extends SpendingAccount>(buyerID: string, spendingAccount: SpendingAccount,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpendingAccount>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/buyers/${buyerID}/spendingaccounts`, { ...requestOptions, data: spendingAccount, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve a spending account 
    * Check out the {@link https://ordercloud.io/api-reference/buyer/spending-accounts/get|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TSpendingAccount extends SpendingAccount>(buyerID: string, spendingAccountID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpendingAccount>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/buyers/${buyerID}/spendingaccounts/${spendingAccountID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a spending account If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/buyer/spending-accounts/save|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param spendingAccount Required fields: Name, Balance
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TSpendingAccount extends SpendingAccount>(buyerID: string, spendingAccountID: string, spendingAccount: SpendingAccount,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpendingAccount>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/buyers/${buyerID}/spendingaccounts/${spendingAccountID}`, { ...requestOptions, data: spendingAccount, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a spending account 
    * Check out the {@link https://ordercloud.io/api-reference/buyer/spending-accounts/delete|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(buyerID: string, spendingAccountID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/buyers/${buyerID}/spendingaccounts/${spendingAccountID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a spending account 
    * Check out the {@link https://ordercloud.io/api-reference/buyer/spending-accounts/patch|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param spendingAccount 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TSpendingAccount extends SpendingAccount>(buyerID: string, spendingAccountID: string, spendingAccount: PartialDeep<SpendingAccount>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpendingAccount>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/buyers/${buyerID}/spendingaccounts/${spendingAccountID}`, { ...requestOptions, data: spendingAccount, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a spending account assignment 
    * Check out the {@link https://ordercloud.io/api-reference/buyer/spending-accounts/delete-assignment|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteAssignment(buyerID: string, spendingAccountID: string, listOptions: { userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/buyers/${buyerID}/spendingaccounts/${spendingAccountID}/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * List spending account assignments 
    * Check out the {@link https://ordercloud.io/api-reference/buyer/spending-accounts/list-assignments|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param listOptions.spendingAccountID ID of the spending account.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the spending account assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListAssignments<TSpendingAccountAssignment extends SpendingAccountAssignment>(buyerID: string, listOptions: { spendingAccountID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpendingAccountAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/buyers/${buyerID}/spendingaccounts/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a spending account assignment 
    * Check out the {@link https://ordercloud.io/api-reference/buyer/spending-accounts/save-assignment|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param spendingAccountAssignment Required fields: SpendingAccountID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveAssignment(buyerID: string, spendingAccountAssignment: SpendingAccountAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/buyers/${buyerID}/spendingaccounts/assignments`, { ...requestOptions, data: spendingAccountAssignment, impersonating,  } )
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
     * SpendingAccounts.As().List() // lists SpendingAccounts using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new SpendingAccounts();