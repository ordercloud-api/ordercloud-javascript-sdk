import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Promotion } from '../models/Promotion';
import { PromotionAssignment } from '../models/PromotionAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Promotions {
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
    * List promotions 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/list|api docs} for more info 
    * 
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
    public async List<TPromotion extends Promotion>(listOptions: { search?: string, searchOn?: Searchable<'Promotions.List'>, sortBy?: Sortable<'Promotions.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TPromotion>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/promotions`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a promotion 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/create|api docs} for more info 
    * 
    * @param promotion Required fields: Code, EligibleExpression
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TPromotion extends Promotion>(promotion: Promotion,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPromotion>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/promotions`, { ...requestOptions, data: promotion, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve a promotion 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/get|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TPromotion extends Promotion>(promotionID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPromotion>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/promotions/${promotionID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a promotion If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/save|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param promotion Required fields: Code, EligibleExpression
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TPromotion extends Promotion>(promotionID: string, promotion: Promotion,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPromotion>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/promotions/${promotionID}`, { ...requestOptions, data: promotion, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a promotion 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/delete|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(promotionID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/promotions/${promotionID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a promotion 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/patch|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param promotion 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TPromotion extends Promotion>(promotionID: string, promotion: PartialDeep<Promotion>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPromotion>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/promotions/${promotionID}`, { ...requestOptions, data: promotion, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a promotion assignment 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/delete-assignment|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteAssignment(promotionID: string, listOptions: { buyerID?: string, userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/promotions/${promotionID}/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * List promotion assignments 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/list-assignments|api docs} for more info 
    * 
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.promotionID ID of the promotion.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the promotion assignment. Possible values: Group, Company.
    * @param listOptions.page Page of results to return. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListAssignments<TPromotionAssignment extends PromotionAssignment>(listOptions: { buyerID?: string, promotionID?: string, userGroupID?: string, level?: 'Group' | 'Company', page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TPromotionAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/promotions/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a promotion assignment 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/save-assignment|api docs} for more info 
    * 
    * @param promotionAssignment Required fields: PromotionID, BuyerID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveAssignment(promotionAssignment: PromotionAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/promotions/assignments`, { ...requestOptions, data: promotionAssignment, impersonating,  } )
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
     * Promotions.As().List() // lists Promotions using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Promotions();