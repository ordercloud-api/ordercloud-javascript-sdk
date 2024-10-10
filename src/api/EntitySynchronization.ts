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
        this.GetAdminUsers = this.GetAdminUsers.bind(this);
        this.SaveAdminUsers = this.SaveAdminUsers.bind(this);
        this.DeleteAdminUsers = this.DeleteAdminUsers.bind(this);
        this.GetBuyers = this.GetBuyers.bind(this);
        this.SaveBuyers = this.SaveBuyers.bind(this);
        this.DeleteBuyers = this.DeleteBuyers.bind(this);
        this.GetBuyerUserGroups = this.GetBuyerUserGroups.bind(this);
        this.SaveUserGroups = this.SaveUserGroups.bind(this);
        this.DeleteUserGroups = this.DeleteUserGroups.bind(this);
        this.GetBuyerUsers = this.GetBuyerUsers.bind(this);
        this.SaveBuyerUsers = this.SaveBuyerUsers.bind(this);
        this.DeleteBuyerUsers = this.DeleteBuyerUsers.bind(this);
        this.GetCategories = this.GetCategories.bind(this);
        this.SaveCategories = this.SaveCategories.bind(this);
        this.DeleteCategories = this.DeleteCategories.bind(this);
        this.GetInventoryRecords = this.GetInventoryRecords.bind(this);
        this.SaveInventoryRecords = this.SaveInventoryRecords.bind(this);
        this.DeleteInventoryRecords = this.DeleteInventoryRecords.bind(this);
        this.GetSuppliers = this.GetSuppliers.bind(this);
        this.SaveSuppliers = this.SaveSuppliers.bind(this);
        this.DeleteSuppliers = this.DeleteSuppliers.bind(this);
        this.GetSupplierUsers = this.GetSupplierUsers.bind(this);
        this.SaveSupplierUsers = this.SaveSupplierUsers.bind(this);
        this.DeleteSupplierUsers = this.DeleteSupplierUsers.bind(this);
    }

   /**
    * Get the entity sync delivery configuration for AdminUsers Get the entity sync delivery configuration for AdminUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/get-admin-users|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetAdminUsers<TEntitySyncConfig extends EntitySyncConfig>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
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
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-admin-users|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveAdminUsers<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: EntitySyncConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
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
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/delete-admin-users|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteAdminUsers(requestOptions: RequestOptions = {} ): Promise<void>{
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
    * Get the entity sync delivery configuration for Buyers Get the entity sync delivery configuration for Buyers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/get-buyers|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetBuyers<TEntitySyncConfig extends EntitySyncConfig>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/entitysync/buyers`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update the entity sync delivery configuration for Buyers Create or update the entity sync delivery configuration for Buyers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-buyers|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveBuyers<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: EntitySyncConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrations/entitysync/buyers`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete the entity sync delivery configuration for Buyers Delete the entity sync delivery configuration for Buyers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/delete-buyers|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteBuyers(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrations/entitysync/buyers`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get the entity sync delivery configuration for BuyerUserGroups Get the entity sync delivery configuration for BuyerUserGroups
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/get-buyer-user-groups|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetBuyerUserGroups<TEntitySyncConfig extends EntitySyncConfig>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/entitysync/buyers/usergroups`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update the entity sync delivery configuration for BuyerUserGroups Create or update the entity sync delivery configuration for BuyerUserGroups
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-user-groups|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveUserGroups<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: EntitySyncConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrations/entitysync/buyers/usergroups`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete the entity sync delivery configuration for BuyerUserGroups Delete the entity sync delivery configuration for BuyerUserGroups
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/delete-user-groups|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteUserGroups(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrations/entitysync/buyers/usergroups`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get the entity sync delivery configuration for BuyerUsers Get the entity sync delivery configuration for BuyerUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/get-buyer-users|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetBuyerUsers<TEntitySyncConfig extends EntitySyncConfig>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
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
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-buyer-users|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveBuyerUsers<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: EntitySyncConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
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
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/delete-buyer-users|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteBuyerUsers(requestOptions: RequestOptions = {} ): Promise<void>{
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
    * Get the entity sync delivery configuration for InventoryRecords Get the entity sync delivery configuration for InventoryRecords
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/get-inventory-records|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetInventoryRecords<TEntitySyncConfig extends EntitySyncConfig>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/entitysync/products/inventoryrecords`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update the entity sync delivery configuration for InventoryRecords Create or update the entity sync delivery configuration for InventoryRecords
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-inventory-records|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveInventoryRecords<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: EntitySyncConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrations/entitysync/products/inventoryrecords`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete the entity sync delivery configuration for InventoryRecords Delete the entity sync delivery configuration for InventoryRecords
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/delete-inventory-records|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteInventoryRecords(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrations/entitysync/products/inventoryrecords`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get the entity sync delivery configuration for Suppliers Get the entity sync delivery configuration for Suppliers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/get-suppliers|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetSuppliers<TEntitySyncConfig extends EntitySyncConfig>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
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
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-suppliers|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveSuppliers<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: EntitySyncConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
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
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/delete-suppliers|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteSuppliers(requestOptions: RequestOptions = {} ): Promise<void>{
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
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/get-supplier-users|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetSupplierUsers<TEntitySyncConfig extends EntitySyncConfig>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
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
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-supplier-users|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveSupplierUsers<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: EntitySyncConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
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
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/delete-supplier-users|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteSupplierUsers(requestOptions: RequestOptions = {} ): Promise<void>{
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