import { ListPage } from '../models/ListPage';
import { Promotion } from '../models/Promotion';
import { PromotionAssignment } from '../models/PromotionAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class Promotions {
    private impersonating:boolean = false;

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TPromotion extends Promotion>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TPromotion>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TPromotion>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/promotions`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param promotion Required fields: Code, EligibleExpression, ValueExpression
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TPromotion extends Promotion>(promotion: Promotion, accessToken?: string ): Promise<RequiredDeep<TPromotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/promotions`, { data: promotion, params: { accessToken, impersonating } }  );
    }

   /**
    * @param promotionID ID of the promotion.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TPromotion extends Promotion>(promotionID: string,  accessToken?: string ): Promise<RequiredDeep<TPromotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/promotions/${promotionID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param promotionID ID of the promotion.
    * @param promotion Required fields: Code, EligibleExpression, ValueExpression
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TPromotion extends Promotion>(promotionID: string, promotion: Promotion, accessToken?: string ): Promise<RequiredDeep<TPromotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/promotions/${promotionID}`, { data: promotion, params: { accessToken, impersonating } }  );
    }

   /**
    * @param promotionID ID of the promotion.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(promotionID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/promotions/${promotionID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param promotionID ID of the promotion.
    * @param promotion 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TPromotion extends Promotion>(promotionID: string, promotion: PartialDeep<Promotion>,  accessToken?: string ): Promise<RequiredDeep<TPromotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/promotions/${promotionID}`, { data: promotion, params: { accessToken, impersonating } }  );
    }

   /**
    * @param promotionID ID of the promotion.
    * @param options.buyerID ID of the buyer.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment(promotionID: string,  options: { buyerID?: string, userID?: string, userGroupID?: string } = {}, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/promotions/${promotionID}/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param options.buyerID ID of the buyer.
    * @param options.promotionID ID of the promotion.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.level Level of the promotion assignment. Possible values: User, Group, Company.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments<TPromotionAssignment extends PromotionAssignment>( options: { buyerID?: string, promotionID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TPromotionAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/promotions/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param promotionAssignment Required fields: PromotionID, BuyerID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment(promotionAssignment: PromotionAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/promotions/assignments`, { data: promotionAssignment, params: { accessToken, impersonating } }  );
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