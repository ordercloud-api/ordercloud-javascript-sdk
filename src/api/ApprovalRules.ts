import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { ApprovalRule } from '../models/ApprovalRule';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import httpClient from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class ApprovalRules {
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
    * Get a list of approval rules. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/approval-rules/list|api docs} for more info 
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
    public async List<TApprovalRule extends ApprovalRule>(buyerID: string,  listOptions: { search?: string, searchOn?: Searchable<'ApprovalRules.List'>, sortBy?: Sortable<'ApprovalRules.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TApprovalRule>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TApprovalRule>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/approvalrules`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new approval rule. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/approval-rules/create|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param approvalRule Required fields: ApprovingGroupID, RuleExpression
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create<TApprovalRule extends ApprovalRule>(buyerID: string, approvalRule: ApprovalRule, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApprovalRule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/${buyerID}/approvalrules`, approvalRule, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single approval rule. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/approval-rules/get|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param approvalRuleID ID of the approval rule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TApprovalRule extends ApprovalRule>(buyerID: string, approvalRuleID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApprovalRule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/approvalrules/${approvalRuleID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an approval rule. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/approval-rules/save|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param approvalRuleID ID of the approval rule.
    * @param approvalRule Required fields: ApprovingGroupID, RuleExpression
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TApprovalRule extends ApprovalRule>(buyerID: string, approvalRuleID: string, approvalRule: ApprovalRule, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApprovalRule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/buyers/${buyerID}/approvalrules/${approvalRuleID}`, approvalRule, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an approval rule. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/approval-rules/delete|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param approvalRuleID ID of the approval rule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(buyerID: string, approvalRuleID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}/approvalrules/${approvalRuleID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an approval rule. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/approval-rules/patch|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param approvalRuleID ID of the approval rule.
    * @param approvalRule 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TApprovalRule extends ApprovalRule>(buyerID: string, approvalRuleID: string, approvalRule: PartialDeep<ApprovalRule>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TApprovalRule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/buyers/${buyerID}/approvalrules/${approvalRuleID}`, approvalRule, { ...requestOptions, impersonating, params: {   } } )
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
     * ApprovalRules.As().List() // lists ApprovalRules using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new ApprovalRules();