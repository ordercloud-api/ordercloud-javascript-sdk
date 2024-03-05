import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { OrderReturn } from '../models/OrderReturn';
import { OrderReturnApproval } from '../models/OrderReturnApproval';
import { ApprovalInfo } from '../models/ApprovalInfo';
import { User } from '../models/User';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class OrderReturns {
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
        this.ListApprovals = this.ListApprovals.bind(this);
        this.Approve = this.Approve.bind(this);
        this.Cancel = this.Cancel.bind(this);
        this.Complete = this.Complete.bind(this);
        this.Decline = this.Decline.bind(this);
        this.ListEligibleApprovers = this.ListEligibleApprovers.bind(this);
        this.DeleteItem = this.DeleteItem.bind(this);
        this.Submit = this.Submit.bind(this);
    }

   /**
    * Get a list of order returns. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/order-returns/list|api docs} for more info 
    * 
    * @param listOptions.approvable Only returns orders awaiting the user's approval if true.
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
    public async List<TOrderReturn extends OrderReturn>(listOptions: { approvable?: boolean, search?: string, searchOn?: Searchable<'OrderReturns.List'>, sortBy?: Sortable<'OrderReturns.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TOrderReturn>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/orderreturns`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new order return. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/order-returns/create|api docs} for more info 
    * 
    * @param orderReturn Required fields: OrderID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TOrderReturn extends OrderReturn>(orderReturn: OrderReturn,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderReturn>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orderreturns`, { ...requestOptions, data: orderReturn, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single order return. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/order-returns/get|api docs} for more info 
    * 
    * @param returnID ID of the return.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TOrderReturn extends OrderReturn>(returnID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderReturn>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/orderreturns/${returnID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an order return. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/order-returns/save|api docs} for more info 
    * 
    * @param returnID ID of the return.
    * @param orderReturn Required fields: OrderID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TOrderReturn extends OrderReturn>(returnID: string, orderReturn: OrderReturn,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderReturn>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/orderreturns/${returnID}`, { ...requestOptions, data: orderReturn, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an order return. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/order-returns/delete|api docs} for more info 
    * 
    * @param returnID ID of the return.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(returnID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/orderreturns/${returnID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an order return. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/order-returns/patch|api docs} for more info 
    * 
    * @param returnID ID of the return.
    * @param orderReturn 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TOrderReturn extends OrderReturn>(returnID: string, orderReturn: PartialDeep<OrderReturn>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderReturn>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/orderreturns/${returnID}`, { ...requestOptions, data: orderReturn, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of order return approvals. Returns all Approvals associated with the Order Return.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/order-returns/list-approvals|api docs} for more info 
    * 
    * @param returnID ID of the return.
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
    public async ListApprovals<TOrderReturnApproval extends OrderReturnApproval>(returnID: string, listOptions: { search?: string, searchOn?: Searchable<'OrderReturns.ListApprovals'>, sortBy?: Sortable<'OrderReturns.ListApprovals'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TOrderReturnApproval>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/orderreturns/${returnID}/approvals`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Approve an order return. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/order-returns/approve|api docs} for more info 
    * 
    * @param returnID ID of the return.
    * @param approvalInfo 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Approve<TOrderReturn extends OrderReturn>(returnID: string, approvalInfo: ApprovalInfo,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderReturn>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orderreturns/${returnID}/approve`, { ...requestOptions, data: approvalInfo, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Cancel an OrderReturn. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/order-returns/cancel|api docs} for more info 
    * 
    * @param returnID ID of the return.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Cancel<TOrderReturn extends OrderReturn>(returnID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderReturn>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orderreturns/${returnID}/cancel`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Complete an OrderReturn. Use only when an order return won't have an associated payment. You will not to reopen an order return after completing it.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/order-returns/complete|api docs} for more info 
    * 
    * @param returnID ID of the return.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Complete<TOrderReturn extends OrderReturn>(returnID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderReturn>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orderreturns/${returnID}/complete`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Decline an order return. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/order-returns/decline|api docs} for more info 
    * 
    * @param returnID ID of the return.
    * @param approvalInfo 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Decline<TOrderReturn extends OrderReturn>(returnID: string, approvalInfo: ApprovalInfo,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderReturn>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orderreturns/${returnID}/decline`, { ...requestOptions, data: approvalInfo, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of order return eligible approvers. Returns all Users who can approve or decline this order return (but have not done so).
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/order-returns/list-eligible-approvers|api docs} for more info 
    * 
    * @param returnID ID of the return.
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
    public async ListEligibleApprovers<TUser extends User>(returnID: string, listOptions: { search?: string, searchOn?: Searchable<'OrderReturns.ListEligibleApprovers'>, sortBy?: Sortable<'OrderReturns.ListEligibleApprovers'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TUser>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/orderreturns/${returnID}/eligibleapprovers`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an order return item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/order-returns/delete-item|api docs} for more info 
    * 
    * @param returnID ID of the return.
    * @param lineItemID ID of the line item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteItem<TOrderReturn extends OrderReturn>(returnID: string, lineItemID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderReturn>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/orderreturns/${returnID}/items/${lineItemID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Submit an order return. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/order-returns/submit|api docs} for more info 
    * 
    * @param returnID ID of the return.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Submit<TOrderReturn extends OrderReturn>(returnID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderReturn>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orderreturns/${returnID}/submit`, { ...requestOptions, impersonating,  } )
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
     * OrderReturns.As().List() // lists OrderReturns using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new OrderReturns();