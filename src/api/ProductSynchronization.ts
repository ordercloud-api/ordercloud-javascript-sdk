import { ProductSyncConfig } from '../models/ProductSyncConfig';
import { SyncProduct } from '../models/SyncProduct';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class ProductSynchronization {
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
        this.Sync = this.Sync.bind(this);
    }

   /**
    * Retrieve a product sync 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/product-synchronization/get|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TProductSyncConfig extends ProductSyncConfig>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductSyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/productsync`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a product sync If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/integrations/product-synchronization/save|api docs} for more info 
    * 
    * @param productSyncConfig Required fields: SyncProductChanged, SyncProductDeleted, DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TProductSyncConfig extends ProductSyncConfig>(productSyncConfig: ProductSyncConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductSyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrations/productsync`, { ...requestOptions, data: productSyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a product sync 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/product-synchronization/delete|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrations/productsync`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a product sync 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/product-synchronization/patch|api docs} for more info 
    * 
    * @param productSyncConfig 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TProductSyncConfig extends ProductSyncConfig>(productSyncConfig: PartialDeep<ProductSyncConfig>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductSyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrations/productsync`, { ...requestOptions, data: productSyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Sync a product 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/product-synchronization/sync|api docs} for more info 
    * 
    * @param syncProduct Required fields: ProductID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Sync(syncProduct: SyncProduct,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/integrations/productsync/sync`, { ...requestOptions, data: syncProduct, impersonating,  } )
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
     * ProductSynchronization.As().List() // lists ProductSynchronization using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new ProductSynchronization();