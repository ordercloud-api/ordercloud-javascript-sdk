import { PromotionIntegration } from '../models/PromotionIntegration';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class PromotionIntegrations {
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
    }

   /**
    * Get a single promotion integration. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/promotion-integrations/get|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TPromotionIntegration extends PromotionIntegration>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPromotionIntegration>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/promotion`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a promotion integration. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/integrations/promotion-integrations/save|api docs} for more info 
    * 
    * @param promotionIntegration Required fields: HashKey
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TPromotionIntegration extends PromotionIntegration>(promotionIntegration: PromotionIntegration,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPromotionIntegration>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrations/promotion`, { ...requestOptions, data: promotionIntegration, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a promotion integration. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/promotion-integrations/delete|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrations/promotion`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a promotion integration. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/promotion-integrations/patch|api docs} for more info 
    * 
    * @param promotionIntegration 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TPromotionIntegration extends PromotionIntegration>(promotionIntegration: PartialDeep<PromotionIntegration>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPromotionIntegration>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrations/promotion`, { ...requestOptions, data: promotionIntegration, impersonating,  } )
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
     * PromotionIntegrations.As().List() // lists PromotionIntegrations using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new PromotionIntegrations();