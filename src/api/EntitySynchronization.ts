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
        this.GetAdminUsersEntitySyncConfig = this.GetAdminUsersEntitySyncConfig.bind(this);
        this.SaveAdminUsersEntitySyncConfig = this.SaveAdminUsersEntitySyncConfig.bind(this);
        this.DeleteAdminUsersEntitySyncConfig = this.DeleteAdminUsersEntitySyncConfig.bind(this);
        this.GetBuyerUsersEntitySyncConfig = this.GetBuyerUsersEntitySyncConfig.bind(this);
        this.SaveBuyerUsersEntitySyncConfig = this.SaveBuyerUsersEntitySyncConfig.bind(this);
        this.DeleteBuyerUsersEntitySyncConfig = this.DeleteBuyerUsersEntitySyncConfig.bind(this);
        this.GetCategories = this.GetCategories.bind(this);
        this.SaveCategories = this.SaveCategories.bind(this);
        this.DeleteCategories = this.DeleteCategories.bind(this);
        this.GetSuppliersEntitySyncConfig = this.GetSuppliersEntitySyncConfig.bind(this);
        this.SaveSuppliersEntitySyncConfig = this.SaveSuppliersEntitySyncConfig.bind(this);
        this.DeleteSuppliersEntitySyncConfig = this.DeleteSuppliersEntitySyncConfig.bind(this);
        this.GetSupplierUsersEntitySyncConfig = this.GetSupplierUsersEntitySyncConfig.bind(this);
        this.SaveSupplierUsersEntitySyncConfig = this.SaveSupplierUsersEntitySyncConfig.bind(this);
        this.DeleteSupplierUsersEntitySyncConfig = this.DeleteSupplierUsersEntitySyncConfig.bind(this);
    }

   /**
    * Get the entity sync delivery configuration for AdminUsers Get the entity sync delivery configuration for AdminUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/get-admin-users-entity-sync-config|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetAdminUsersEntitySyncConfig<TEntitySyncConfig extends EntitySyncConfig>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/entitysync/adminusers`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update the entity sync delivery configuration for AdminUsers Create or update the entity sync delivery configuration for AdminUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-admin-users-entity-sync-config|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveAdminUsersEntitySyncConfig<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: EntitySyncConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrations/entitysync/adminusers`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete the entity sync delivery configuration for AdminUsers Delete the entity sync delivery configuration for AdminUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/delete-admin-users-entity-sync-config|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteAdminUsersEntitySyncConfig(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrations/entitysync/adminusers`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get the entity sync delivery configuration for BuyerUsers Get the entity sync delivery configuration for BuyerUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/get-buyer-users-entity-sync-config|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetBuyerUsersEntitySyncConfig<TEntitySyncConfig extends EntitySyncConfig>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/entitysync/buyers/users`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update the entity sync delivery configuration for BuyerUsers Create or update the entity sync delivery configuration for BuyerUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-buyer-users-entity-sync-config|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveBuyerUsersEntitySyncConfig<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: EntitySyncConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrations/entitysync/buyers/users`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete the entity sync delivery configuration for BuyerUsers Delete the entity sync delivery configuration for BuyerUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/delete-buyer-users-entity-sync-config|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteBuyerUsersEntitySyncConfig(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrations/entitysync/buyers/users`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get the entity sync delivery configuration for Categories Get the entity sync delivery configuration for Categories
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
    * Create or update the entity sync delivery configuration for Categories Create or update the entity sync delivery configuration for Categories
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
    * Delete the entity sync delivery configuration for Categories Delete the entity sync delivery configuration for Categories
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
    * Get the entity sync delivery configuration for Suppliers Get the entity sync delivery configuration for Suppliers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/get-suppliers-entity-sync-config|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetSuppliersEntitySyncConfig<TEntitySyncConfig extends EntitySyncConfig>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/entitysync/suppliers`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update the entity sync delivery configuration for Suppliers Create or update the entity sync delivery configuration for Suppliers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-suppliers-entity-sync-config|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveSuppliersEntitySyncConfig<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: EntitySyncConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrations/entitysync/suppliers`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete the entity sync delivery configuration for Suppliers Delete the entity sync delivery configuration for Suppliers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/delete-suppliers-entity-sync-config|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteSuppliersEntitySyncConfig(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrations/entitysync/suppliers`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get the entity sync delivery configuration for SupplierUsers Get the entity sync delivery configuration for SupplierUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/get-supplier-users-entity-sync-config|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetSupplierUsersEntitySyncConfig<TEntitySyncConfig extends EntitySyncConfig>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/entitysync/suppliers/users`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update the entity sync delivery configuration for SupplierUsers Create or update the entity sync delivery configuration for SupplierUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-supplier-users-entity-sync-config|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveSupplierUsersEntitySyncConfig<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: EntitySyncConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrations/entitysync/suppliers/users`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete the entity sync delivery configuration for SupplierUsers Delete the entity sync delivery configuration for SupplierUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/delete-supplier-users-entity-sync-config|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteSupplierUsersEntitySyncConfig(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrations/entitysync/suppliers/users`, { ...requestOptions, impersonating,  } )
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