import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Discount } from '../models/Discount';
import { DiscountAssignment } from '../models/DiscountAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Discounts {
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
    * List discounts 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/discounts/list|api docs} for more info 
    * 
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List<TDiscount extends Discount>(listOptions: { sortBy?: Sortable<'Discounts.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TDiscount>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/discounts`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a discount 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/discounts/create|api docs} for more info 
    * 
    * @param discount Required fields: DiscountBreaks
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TDiscount extends Discount>(discount: Discount,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TDiscount>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/discounts`, { ...requestOptions, data: discount, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve a discount 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/discounts/get|api docs} for more info 
    * 
    * @param discountID ID of the discount.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TDiscount extends Discount>(discountID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TDiscount>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/discounts/${discountID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a discount If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/discounts/save|api docs} for more info 
    * 
    * @param discountID ID of the discount.
    * @param discount Required fields: DiscountBreaks
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TDiscount extends Discount>(discountID: string, discount: Discount,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TDiscount>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/discounts/${discountID}`, { ...requestOptions, data: discount, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a discount 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/discounts/delete|api docs} for more info 
    * 
    * @param discountID ID of the discount.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(discountID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/discounts/${discountID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a discount 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/discounts/patch|api docs} for more info 
    * 
    * @param discountID ID of the discount.
    * @param discount 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TDiscount extends Discount>(discountID: string, discount: PartialDeep<Discount>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TDiscount>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/discounts/${discountID}`, { ...requestOptions, data: discount, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a discount assignment 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/discounts/delete-assignment|api docs} for more info 
    * 
    * @param discountID ID of the discount.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.buyerGroupID ID of the buyer group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteAssignment(discountID: string, listOptions: { buyerID?: string, userGroupID?: string, buyerGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/discounts/${discountID}/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * List discount assignments 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/discounts/list-assignments|api docs} for more info 
    * 
    * @param listOptions.discountID ID of the discount.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.buyerGroupID ID of the buyer group.
    * @param listOptions.level Level of the discount assignment. Possible values: Group, Company, BuyerGroup.
    * @param listOptions.page Page of results to return. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListAssignments<TDiscountAssignment extends DiscountAssignment>(listOptions: { discountID?: string, buyerID?: string, userGroupID?: string, buyerGroupID?: string, level?: 'Group' | 'Company', page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TDiscountAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/discounts/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a discount assignment 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/discounts/save-assignment|api docs} for more info 
    * 
    * @param discountAssignment Required fields: DiscountID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveAssignment(discountAssignment: DiscountAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/discounts/assignments`, { ...requestOptions, data: discountAssignment, impersonating,  } )
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
     * Discounts.As().List() // lists Discounts using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Discounts();