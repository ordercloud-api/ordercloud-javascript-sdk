import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Order } from '../models/Order';
import { OrderDirection } from '../models/OrderDirection';
import { SearchType } from '../models/SearchType';
import { OrderApproval } from '../models/OrderApproval';
import { OrderApprovalInfo } from '../models/OrderApprovalInfo';
import { Address } from '../models/Address';
import { User } from '../models/User';
import { Promotion } from '../models/Promotion';
import { OrderSplitResult } from '../models/OrderSplitResult';
import { OrderPromotion } from '../models/OrderPromotion';
import { Shipment } from '../models/Shipment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Orders {
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
        this.ApplyPromotions = this.ApplyPromotions.bind(this);
        this.ListApprovals = this.ListApprovals.bind(this);
        this.Approve = this.Approve.bind(this);
        this.SetBillingAddress = this.SetBillingAddress.bind(this);
        this.PatchBillingAddress = this.PatchBillingAddress.bind(this);
        this.Cancel = this.Cancel.bind(this);
        this.Complete = this.Complete.bind(this);
        this.Decline = this.Decline.bind(this);
        this.ListEligibleApprovers = this.ListEligibleApprovers.bind(this);
        this.ListEligiblePromotions = this.ListEligiblePromotions.bind(this);
        this.Forward = this.Forward.bind(this);
        this.PatchFromUser = this.PatchFromUser.bind(this);
        this.ListPromotions = this.ListPromotions.bind(this);
        this.AddPromotion = this.AddPromotion.bind(this);
        this.RemovePromotion = this.RemovePromotion.bind(this);
        this.Ship = this.Ship.bind(this);
        this.ListShipments = this.ListShipments.bind(this);
        this.SetShippingAddress = this.SetShippingAddress.bind(this);
        this.PatchShippingAddress = this.PatchShippingAddress.bind(this);
        this.Split = this.Split.bind(this);
        this.Submit = this.Submit.bind(this);
        this.Validate = this.Validate.bind(this);
    }

   /**
    * Get a list of orders. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/list|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.supplierID ID of the supplier.
    * @param listOptions.from Lower bound of date range that the order was created.
    * @param listOptions.to Upper bound of date range that the order was created.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.searchType Type of search to perform. Possible values: AnyTerm (default), AllTermsAnyField, AllTermsSameField, ExactPhrase, ExactPhrasePrefix.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List<TOrder extends Order>(direction: OrderDirection, listOptions: { buyerID?: string, supplierID?: string, from?: string, to?: string, search?: string, searchOn?: Searchable<'Orders.List'>, searchType?: SearchType, sortBy?: Sortable<'Orders.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TOrder>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/orders/${direction}`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new order. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/create|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param order 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TOrder extends Order>(direction: OrderDirection, order: Order,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}`, { ...requestOptions, data: order, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/get|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TOrder extends Order>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/orders/${direction}/${orderID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an order. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/save|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param order 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TOrder extends Order>(direction: OrderDirection, orderID: string, order: Order,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/orders/${direction}/${orderID}`, { ...requestOptions, data: order, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/delete|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/orders/${direction}/${orderID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/patch|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param order 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TOrder extends Order>(direction: OrderDirection, orderID: string, order: PartialDeep<Order>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/orders/${direction}/${orderID}`, { ...requestOptions, data: order, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * AutoApply eligible promotions. Apply up to 100 eligible promotions to an order.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/apply-promotions|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ApplyPromotions<TOrder extends Order>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/applypromotions`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of order approvals. Returns all Approvals associated with the Order.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/list-approvals|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
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
    public async ListApprovals<TOrderApproval extends OrderApproval>(direction: OrderDirection, orderID: string, listOptions: { search?: string, searchOn?: Searchable<'Orders.ListApprovals'>, sortBy?: Sortable<'Orders.ListApprovals'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TOrderApproval>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/orders/${direction}/${orderID}/approvals`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Approve an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/approve|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param orderApprovalInfo 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Approve<TOrder extends Order>(direction: OrderDirection, orderID: string, orderApprovalInfo: OrderApprovalInfo,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/approve`, { ...requestOptions, data: orderApprovalInfo, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Set a billing address. Use only when the address is not to be saved/reused.<br/></br>To use a saved address (i.e. from the Addresses resource), PATCH the order's BillingAddressID property instead.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/set-billing-address|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SetBillingAddress<TOrder extends Order>(direction: OrderDirection, orderID: string, address: Address,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/orders/${direction}/${orderID}/billto`, { ...requestOptions, data: address, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an order billing address. Not allowed on unsubmitted orders where BillingAddressID has been set. In that case, use the Addresses resource to update the saved address.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/patch-billing-address|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param address 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchBillingAddress<TOrder extends Order>(direction: OrderDirection, orderID: string, address: PartialDeep<Address>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/orders/${direction}/${orderID}/billto`, { ...requestOptions, data: address, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Cancel an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/cancel|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Cancel<TOrder extends Order>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/cancel`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Complete an order. Use only when an order doesn't need a shipment. You will not be able to ship or reopen an order after completing it.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/complete|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Complete<TOrder extends Order>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/complete`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Decline an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/decline|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param orderApprovalInfo 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Decline<TOrder extends Order>(direction: OrderDirection, orderID: string, orderApprovalInfo: OrderApprovalInfo,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/decline`, { ...requestOptions, data: orderApprovalInfo, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of order eligible approvers. Returns all Users who can approve or decline this order (but have not done so).
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/list-eligible-approvers|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
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
    public async ListEligibleApprovers<TUser extends User>(direction: OrderDirection, orderID: string, listOptions: { search?: string, searchOn?: Searchable<'Orders.ListEligibleApprovers'>, sortBy?: Sortable<'Orders.ListEligibleApprovers'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TUser>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/orders/${direction}/${orderID}/eligibleapprovers`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * List eligible promotions. Get a list of promotions eligible for an order.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/list-eligible-promotions|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
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
    public async ListEligiblePromotions<TPromotion extends Promotion>(direction: OrderDirection, orderID: string, listOptions: { search?: string, searchOn?: Searchable<'Orders.ListEligiblePromotions'>, sortBy?: Sortable<'Orders.ListEligiblePromotions'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TPromotion>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/orders/${direction}/${orderID}/eligiblepromotions`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Forward an order. Creates and submits 0 or more outgoing Orders to Suppliers, one for each unique Product.DefaultSupplierID on this Order.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/forward|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Forward<TOrderSplitResult extends OrderSplitResult>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderSplitResult>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/forward`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Update order FromUser. Only FirstName, LastName, and Email can be updated.<br/></br>Primarily used to facilitate guest checkout scenarios.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/patch-from-user|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param user 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchFromUser<TOrder extends Order>(direction: OrderDirection, orderID: string, user: PartialDeep<User>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/orders/${direction}/${orderID}/fromuser`, { ...requestOptions, data: user, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of order promotions. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/list-promotions|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
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
    public async ListPromotions<TOrderPromotion extends OrderPromotion>(direction: OrderDirection, orderID: string, listOptions: { search?: string, searchOn?: Searchable<'Orders.ListPromotions'>, sortBy?: Sortable<'Orders.ListPromotions'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TOrderPromotion>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/orders/${direction}/${orderID}/promotions`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Add a promotion to an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/add-promotion|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param promoCode Promo code of the order promotion.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async AddPromotion<TOrderPromotion extends OrderPromotion>(direction: OrderDirection, orderID: string, promoCode: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderPromotion>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/promotions/${promoCode}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Remove a promotion from an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/remove-promotion|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param promoCode Promo code of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async RemovePromotion<TOrder extends Order>(direction: OrderDirection, orderID: string, promoCode: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/orders/${direction}/${orderID}/promotions/${promoCode}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new shipment containing all items on an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/ship|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param shipment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Ship<TOrder extends Order>(direction: OrderDirection, orderID: string, shipment: Shipment,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/ship`, { ...requestOptions, data: shipment, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * List shipments for an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/list-shipments|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
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
    public async ListShipments<TShipment extends Shipment>(direction: OrderDirection, orderID: string, listOptions: { search?: string, searchOn?: Searchable<'Orders.ListShipments'>, sortBy?: Sortable<'Orders.ListShipments'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TShipment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/orders/${direction}/${orderID}/shipments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Set a shipping address. Use only when the address is not to be saved/reused. To use a saved address (i.e. from the Addresses resource), PATCH the order's ShippingAddressID property instead. The address used will be populated on the ShippingAddress property of each LineItem.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/set-shipping-address|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SetShippingAddress<TOrder extends Order>(direction: OrderDirection, orderID: string, address: Address,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/orders/${direction}/${orderID}/shipto`, { ...requestOptions, data: address, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an order shipping address. Not allowed on unsubmitted orders where ShippingAddressID has been set. In that case, use the Addresses resource to update the saved address.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/patch-shipping-address|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param address 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchShippingAddress<TOrder extends Order>(direction: OrderDirection, orderID: string, address: PartialDeep<Address>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/orders/${direction}/${orderID}/shipto`, { ...requestOptions, data: address, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Split an order. Creates, but does not submit, 0 or more outgoing Orders to Suppliers, one for each unique Product.DefaultSupplierID on this Order.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/split|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Split<TOrderSplitResult extends OrderSplitResult>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderSplitResult>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/split`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Submit an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/submit|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Submit<TOrder extends Order>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/submit`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Validate an order in its current state. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/validate|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Validate(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/orders/${direction}/${orderID}/validate`, { ...requestOptions, impersonating,  } )
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
     * Orders.As().List() // lists Orders using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Orders();