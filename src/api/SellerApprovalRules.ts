import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { SellerApprovalRule } from '../models/SellerApprovalRule';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class SellerApprovalRules {
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
    * Get a list of seller approval rules. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/seller-approval-rules/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List<TSellerApprovalRule extends SellerApprovalRule>(listOptions: { search?: string, searchOn?: Searchable<'SellerApprovalRules.List'>, sortBy?: Sortable<'SellerApprovalRules.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSellerApprovalRule>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/approvalrules`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new seller approval rule. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/seller-approval-rules/create|api docs} for more info 
    * 
    * @param sellerApprovalRule Required fields: ApprovalType, ApprovingGroupID, RuleExpression
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TSellerApprovalRule extends SellerApprovalRule>(sellerApprovalRule: SellerApprovalRule,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSellerApprovalRule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/approvalrules`, { ...requestOptions, data: sellerApprovalRule, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single seller approval rule. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/seller-approval-rules/get|api docs} for more info 
    * 
    * @param approvalRuleID ID of the approval rule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TSellerApprovalRule extends SellerApprovalRule>(approvalRuleID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSellerApprovalRule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/approvalrules/${approvalRuleID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a seller approval rule. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/seller-approval-rules/save|api docs} for more info 
    * 
    * @param approvalRuleID ID of the approval rule.
    * @param sellerApprovalRule Required fields: ApprovalType, ApprovingGroupID, RuleExpression
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TSellerApprovalRule extends SellerApprovalRule>(approvalRuleID: string, sellerApprovalRule: SellerApprovalRule,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSellerApprovalRule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/approvalrules/${approvalRuleID}`, { ...requestOptions, data: sellerApprovalRule, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a seller approval rule. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/seller-approval-rules/delete|api docs} for more info 
    * 
    * @param approvalRuleID ID of the approval rule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(approvalRuleID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/approvalrules/${approvalRuleID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a seller approval rule. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/seller-approval-rules/patch|api docs} for more info 
    * 
    * @param approvalRuleID ID of the approval rule.
    * @param sellerApprovalRule 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TSellerApprovalRule extends SellerApprovalRule>(approvalRuleID: string, sellerApprovalRule: PartialDeep<SellerApprovalRule>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSellerApprovalRule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/approvalrules/${approvalRuleID}`, { ...requestOptions, data: sellerApprovalRule, impersonating,  } )
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
     * SellerApprovalRules.As().List() // lists SellerApprovalRules using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new SellerApprovalRules();