import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Promotion } from '../models/Promotion';
import { PromotionAssignment } from '../models/PromotionAssignment';
import { PartyType } from '../models/PartyType';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import httpClient from '../utils/HttpClient';
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
    * Get a list of promotions. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async List<TPromotion extends Promotion>( listOptions: { search?: string, searchOn?: Searchable<'Promotions.List'>, sortBy?: Sortable<'Promotions.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TPromotion>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TPromotion>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/promotions`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new promotion. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/create|api docs} for more info 
    * 
    * @param promotion Required fields: Code, EligibleExpression, ValueExpression
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create<TPromotion extends Promotion>(promotion: Promotion, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPromotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/promotions`, promotion, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single promotion. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/get|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TPromotion extends Promotion>(promotionID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPromotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/promotions/${promotionID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a promotion. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/save|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param promotion Required fields: Code, EligibleExpression, ValueExpression
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TPromotion extends Promotion>(promotionID: string, promotion: Promotion, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPromotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/promotions/${promotionID}`, promotion, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a promotion. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/delete|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(promotionID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/promotions/${promotionID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a promotion. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/patch|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param promotion 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TPromotion extends Promotion>(promotionID: string, promotion: PartialDeep<Promotion>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPromotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/promotions/${promotionID}`, promotion, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a promotion assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/delete-assignment|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteAssignment(promotionID: string,  listOptions: { buyerID?: string, userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/promotions/${promotionID}/assignments`, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of promotion assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/list-assignments|api docs} for more info 
    * 
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.promotionID ID of the promotion.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the promotion assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListAssignments<TPromotionAssignment extends PromotionAssignment>( listOptions: { buyerID?: string, promotionID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TPromotionAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/promotions/assignments`, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a promotion assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/save-assignment|api docs} for more info 
    * 
    * @param promotionAssignment Required fields: PromotionID, BuyerID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SaveAssignment(promotionAssignment: PromotionAssignment, requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/promotions/assignments`, promotionAssignment, { ...requestOptions, impersonating, params: {   } } )
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