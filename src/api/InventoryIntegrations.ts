import { InventoryIntegration } from '../models/InventoryIntegration';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class InventoryIntegrations {
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
    * Get a single inventory integration. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/inventory-integrations/get|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TInventoryIntegration extends InventoryIntegration>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TInventoryIntegration>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/inventory`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an inventory integration. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/integrations/inventory-integrations/save|api docs} for more info 
    * 
    * @param inventoryIntegration Required fields: DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TInventoryIntegration extends InventoryIntegration>(inventoryIntegration: InventoryIntegration,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TInventoryIntegration>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrations/inventory`, { ...requestOptions, data: inventoryIntegration, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an inventory integration. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/inventory-integrations/delete|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrations/inventory`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an inventory integration. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/inventory-integrations/patch|api docs} for more info 
    * 
    * @param inventoryIntegration 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TInventoryIntegration extends InventoryIntegration>(inventoryIntegration: PartialDeep<InventoryIntegration>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TInventoryIntegration>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrations/inventory`, { ...requestOptions, data: inventoryIntegration, impersonating,  } )
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
     * InventoryIntegrations.As().List() // lists InventoryIntegrations using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new InventoryIntegrations();