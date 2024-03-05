import { Order } from '../models/Order';
import { Address } from '../models/Address';
import { BundleItems } from '../models/BundleItems';
import { LineItem } from '../models/LineItem';
import { OrderWorksheet } from '../models/OrderWorksheet';
import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Promotion } from '../models/Promotion';
import { User } from '../models/User';
import { Payment } from '../models/Payment';
import { PaymentTransaction } from '../models/PaymentTransaction';
import { OrderPromotion } from '../models/OrderPromotion';
import { OrderShipMethodSelection } from '../models/OrderShipMethodSelection';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Cart {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.Get = this.Get.bind(this);
        this.Save = this.Save.bind(this);
        this.Delete = this.Delete.bind(this);
        this.Patch = this.Patch.bind(this);
        this.SetActiveCart = this.SetActiveCart.bind(this);
        this.ApplyPromotions = this.ApplyPromotions.bind(this);
        this.SetBillingAddress = this.SetBillingAddress.bind(this);
        this.PatchBillingAddress = this.PatchBillingAddress.bind(this);
        this.CreateBundleItem = this.CreateBundleItem.bind(this);
        this.DeleteBundleItem = this.DeleteBundleItem.bind(this);
        this.Calculate = this.Calculate.bind(this);
        this.ListEligiblePromotions = this.ListEligiblePromotions.bind(this);
        this.EstimateShipping = this.EstimateShipping.bind(this);
        this.PatchFromUser = this.PatchFromUser.bind(this);
        this.ListLineItems = this.ListLineItems.bind(this);
        this.CreateLineItem = this.CreateLineItem.bind(this);
        this.GetLineItem = this.GetLineItem.bind(this);
        this.SaveLineItem = this.SaveLineItem.bind(this);
        this.DeleteLineItem = this.DeleteLineItem.bind(this);
        this.PatchLineItem = this.PatchLineItem.bind(this);
        this.ListPayments = this.ListPayments.bind(this);
        this.CreatePayment = this.CreatePayment.bind(this);
        this.GetPayment = this.GetPayment.bind(this);
        this.DeletePayment = this.DeletePayment.bind(this);
        this.PatchPayment = this.PatchPayment.bind(this);
        this.CreatePaymentTransaction = this.CreatePaymentTransaction.bind(this);
        this.DeletePaymentTransaction = this.DeletePaymentTransaction.bind(this);
        this.ListPromotions = this.ListPromotions.bind(this);
        this.AddPromotion = this.AddPromotion.bind(this);
        this.DeletePromotion = this.DeletePromotion.bind(this);
        this.SelectShipMethods = this.SelectShipMethods.bind(this);
        this.SetShippingAddress = this.SetShippingAddress.bind(this);
        this.PatchShippingAddress = this.PatchShippingAddress.bind(this);
        this.Submit = this.Submit.bind(this);
        this.Validate = this.Validate.bind(this);
        this.GetOrderWorksheet = this.GetOrderWorksheet.bind(this);
    }

   /**
    * Get a single cart. If the ID of the Order returned is null, the cart has not yet been interacted with. Once an item is added, the Order.ID will be populated.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/get|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TOrder extends Order>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/cart`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a cart. If an object with the same ID already exists, it will be overwritten.<br/></br>The recommended way to initiate a new cart is to add a line item. If there is a specific reason an order needs to exist prior to adding a line item, this method can be used to initiate a new cart.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/save|api docs} for more info 
    * 
    * @param order 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TOrder extends Order>(order: Order,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/cart`, { ...requestOptions, data: order, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a cart. Empties the cart. Any promotions, payments or other items associated with the cart will also be removed.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/delete|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/cart`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a cart. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/patch|api docs} for more info 
    * 
    * @param order 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TOrder extends Order>(order: PartialDeep<Order>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/cart`, { ...requestOptions, data: order, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Set an active cart. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/set-active-cart|api docs} for more info 
    * 
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SetActiveCart(orderID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/cart/${orderID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * AutoApply eligible promotions. Apply up to 100 eligible promotions to the cart.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/apply-promotions|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ApplyPromotions<TOrder extends Order>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/cart/applypromotions`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Set a billing address. Use only when the address is not to be saved/reused.<br/></br>To use a saved address (i.e. from the Addresses resource), PATCH the order's BillingAddressID property instead.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/set-billing-address|api docs} for more info 
    * 
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SetBillingAddress<TOrder extends Order>(address: Address,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/cart/billto`, { ...requestOptions, data: address, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a cart billing address. Not allowed on carts where BillingAddressID has been set. In that case, use the Addresses resource to update the saved address.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/patch-billing-address|api docs} for more info 
    * 
    * @param address 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchBillingAddress<TOrder extends Order>(address: PartialDeep<Address>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/cart/billto`, { ...requestOptions, data: address, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new cart bundle item. Adds bundle line items to the cart
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/create-bundle-item|api docs} for more info 
    * 
    * @param bundleID ID of the bundle.
    * @param bundleItems 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async CreateBundleItem<TLineItem extends LineItem>(bundleID: string, bundleItems: BundleItems,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/cart/bundles/${bundleID}`, { ...requestOptions, data: bundleItems, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a cart bundle item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/delete-bundle-item|api docs} for more info 
    * 
    * @param bundleID ID of the bundle.
    * @param bundleItemID ID of the bundle item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteBundleItem(bundleID: string, bundleItemID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/cart/bundles/${bundleID}/${bundleItemID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Calculate the cart. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/calculate|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Calculate<TOrderWorksheet extends OrderWorksheet>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderWorksheet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/cart/calculate`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * List eligible promotions. Get a list of promotions eligible for the cart.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/list-eligible-promotions|api docs} for more info 
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
    public async ListEligiblePromotions<TPromotion extends Promotion>(listOptions: { search?: string, searchOn?: Searchable<'Cart.ListEligiblePromotions'>, sortBy?: Sortable<'Cart.ListEligiblePromotions'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TPromotion>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/cart/eligiblepromotions`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Estimate shipping cost. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/estimate-shipping|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async EstimateShipping<TOrderWorksheet extends OrderWorksheet>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderWorksheet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/cart/estimateshipping`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Update cart FromUser. Only FirstName, LastName, and Email can be updated.<br/></br>Primarily used to facilitate guest checkout scenarios.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/patch-from-user|api docs} for more info 
    * 
    * @param user 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchFromUser<TOrder extends Order>(user: PartialDeep<User>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/cart/fromuser`, { ...requestOptions, data: user, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of cart line items. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/list-line-items|api docs} for more info 
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
    public async ListLineItems<TLineItem extends LineItem>(listOptions: { search?: string, searchOn?: Searchable<'Cart.ListLineItems'>, sortBy?: Sortable<'Cart.ListLineItems'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TLineItem>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/cart/lineitems`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new cart line item. Adds a line item to the cart
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/create-line-item|api docs} for more info 
    * 
    * @param lineItem Required fields: ProductID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async CreateLineItem<TLineItem extends LineItem>(lineItem: LineItem,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/cart/lineitems`, { ...requestOptions, data: lineItem, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single cart line item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/get-line-item|api docs} for more info 
    * 
    * @param lineItemID ID of the line item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetLineItem<TLineItem extends LineItem>(lineItemID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/cart/lineitems/${lineItemID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a cart line item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/save-line-item|api docs} for more info 
    * 
    * @param lineItemID ID of the line item.
    * @param lineItem Required fields: ProductID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveLineItem<TLineItem extends LineItem>(lineItemID: string, lineItem: LineItem,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/cart/lineitems/${lineItemID}`, { ...requestOptions, data: lineItem, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a cart line item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/delete-line-item|api docs} for more info 
    * 
    * @param lineItemID ID of the line item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteLineItem(lineItemID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/cart/lineitems/${lineItemID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a cart line item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/patch-line-item|api docs} for more info 
    * 
    * @param lineItemID ID of the line item.
    * @param lineItem 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchLineItem<TLineItem extends LineItem>(lineItemID: string, lineItem: PartialDeep<LineItem>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/cart/lineitems/${lineItemID}`, { ...requestOptions, data: lineItem, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of cart payments. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/list-payments|api docs} for more info 
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
    public async ListPayments<TPayment extends Payment>(listOptions: { search?: string, searchOn?: Searchable<'Cart.ListPayments'>, sortBy?: Sortable<'Cart.ListPayments'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TPayment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/cart/payments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new cart payment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/create-payment|api docs} for more info 
    * 
    * @param payment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async CreatePayment<TPayment extends Payment>(payment: Payment,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPayment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/cart/payments`, { ...requestOptions, data: payment, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single cart payment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/get-payment|api docs} for more info 
    * 
    * @param paymentID ID of the payment.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetPayment<TPayment extends Payment>(paymentID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPayment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/cart/payments/${paymentID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a cart payment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/delete-payment|api docs} for more info 
    * 
    * @param paymentID ID of the payment.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeletePayment(paymentID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/cart/payments/${paymentID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a cart payment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/patch-payment|api docs} for more info 
    * 
    * @param paymentID ID of the payment.
    * @param payment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchPayment<TPayment extends Payment>(paymentID: string, payment: PartialDeep<Payment>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPayment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/cart/payments/${paymentID}`, { ...requestOptions, data: payment, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new cart payment transaction. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/create-payment-transaction|api docs} for more info 
    * 
    * @param paymentID ID of the payment.
    * @param paymentTransaction Required fields: Type, DateExecuted
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async CreatePaymentTransaction<TPaymentTransaction extends PaymentTransaction>(paymentID: string, paymentTransaction: PaymentTransaction,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPaymentTransaction>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/cart/payments/${paymentID}/transactions`, { ...requestOptions, data: paymentTransaction, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a cart payment transaction. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/delete-payment-transaction|api docs} for more info 
    * 
    * @param paymentID ID of the payment.
    * @param transactionID ID of the transaction.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeletePaymentTransaction(paymentID: string, transactionID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/cart/payments/${paymentID}/transactions/${transactionID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of cart promotions. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/list-promotions|api docs} for more info 
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
    public async ListPromotions<TOrderPromotion extends OrderPromotion>(listOptions: { search?: string, searchOn?: Searchable<'Cart.ListPromotions'>, sortBy?: Sortable<'Cart.ListPromotions'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TOrderPromotion>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/cart/promotions`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Add a promotion. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/add-promotion|api docs} for more info 
    * 
    * @param promoCode Promo code of the order promotion.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async AddPromotion<TOrderPromotion extends OrderPromotion>(promoCode: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderPromotion>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/cart/promotions/${promoCode}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a cart promotion. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/delete-promotion|api docs} for more info 
    * 
    * @param promoCode Promo code of the cart.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeletePromotion(promoCode: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/cart/promotions/${promoCode}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Select a ship method. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/select-ship-methods|api docs} for more info 
    * 
    * @param orderShipMethodSelection 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SelectShipMethods<TOrderWorksheet extends OrderWorksheet>(orderShipMethodSelection: OrderShipMethodSelection,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderWorksheet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/cart/shipmethods`, { ...requestOptions, data: orderShipMethodSelection, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Set a shipping address. Use only when the address is not to be saved/reused. To use a saved address (i.e. from the Addresses resource), PATCH the order's ShippingAddressID property instead. The address used will be populated on the ShippingAddress property of each LineItem.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/set-shipping-address|api docs} for more info 
    * 
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SetShippingAddress<TOrder extends Order>(address: Address,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/cart/shipto`, { ...requestOptions, data: address, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a cart shipping address. Not allowed on carts where ShippingAddressID has been set. In that case, use the Addresses resource to update the saved address.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/patch-shipping-address|api docs} for more info 
    * 
    * @param address 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchShippingAddress<TOrder extends Order>(address: PartialDeep<Address>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/cart/shipto`, { ...requestOptions, data: address, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Submit the cart. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/submit|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Submit<TOrder extends Order>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/cart/submit`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Validate the cart in it's current state. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/validate|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Validate(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/cart/validate`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single cart order worksheet. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/cart/get-order-worksheet|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetOrderWorksheet<TOrderWorksheet extends OrderWorksheet>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TOrderWorksheet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/cart/worksheet`, { ...requestOptions, impersonating,  } )
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
     * Cart.As().List() // lists Cart using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Cart();