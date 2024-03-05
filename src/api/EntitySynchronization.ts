import { EntitySyncConfig } from '../models/EntitySyncConfig';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class EntitySynchronization {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.GetCategories = this.GetCategories.bind(this);
        this.SaveCategories = this.SaveCategories.bind(this);
        this.DeleteCategories = this.DeleteCategories.bind(this);
    }

   /**
    * Get the entity sync delivery configuration for categories Get the entity sync delivery configuration for categories
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/get-categories|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetCategories<TEntitySyncConfig extends EntitySyncConfig>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/entitysync/categories`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update the entity sync delivery configuration for categories Create or update the entity sync delivery configuration for categories
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-categories|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveCategories<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: EntitySyncConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrations/entitysync/categories`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete the entity sync delivery configuration for categories Delete the entity sync delivery configuration for categories
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/delete-categories|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteCategories(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrations/entitysync/categories`, { ...requestOptions, impersonating,  } )
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
     * EntitySynchronization.As().List() // lists EntitySynchronization using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new EntitySynchronization();