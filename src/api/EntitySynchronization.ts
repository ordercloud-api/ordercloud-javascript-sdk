import { EntitySyncConfig } from '../models/EntitySyncConfig';
import { SyncAdminUser } from '../models/SyncAdminUser';
import { SyncBuyer } from '../models/SyncBuyer';
import { SyncBuyerUserGroup } from '../models/SyncBuyerUserGroup';
import { SyncBuyerUser } from '../models/SyncBuyerUser';
import { SyncCategory } from '../models/SyncCategory';
import { SyncInventoryRecord } from '../models/SyncInventoryRecord';
import { SyncSupplier } from '../models/SyncSupplier';
import { SyncSupplierUser } from '../models/SyncSupplierUser';
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
        this.PatchAdminUsers = this.PatchAdminUsers.bind(this);
        this.SyncAdminUser = this.SyncAdminUser.bind(this);
        this.GetBuyers = this.GetBuyers.bind(this);
        this.SaveBuyers = this.SaveBuyers.bind(this);
        this.DeleteBuyers = this.DeleteBuyers.bind(this);
        this.PatchBuyers = this.PatchBuyers.bind(this);
        this.SyncBuyer = this.SyncBuyer.bind(this);
        this.GetBuyerUserGroups = this.GetBuyerUserGroups.bind(this);
        this.SaveUserGroups = this.SaveUserGroups.bind(this);
        this.DeleteUserGroups = this.DeleteUserGroups.bind(this);
        this.PatchBuyerUserGroups = this.PatchBuyerUserGroups.bind(this);
        this.SyncBuyerUserGroup = this.SyncBuyerUserGroup.bind(this);
        this.GetBuyerUsers = this.GetBuyerUsers.bind(this);
        this.SaveBuyerUsers = this.SaveBuyerUsers.bind(this);
        this.DeleteBuyerUsers = this.DeleteBuyerUsers.bind(this);
        this.PatchBuyerUsers = this.PatchBuyerUsers.bind(this);
        this.SyncBuyerUser = this.SyncBuyerUser.bind(this);
        this.GetCategories = this.GetCategories.bind(this);
        this.SaveCategories = this.SaveCategories.bind(this);
        this.DeleteCategories = this.DeleteCategories.bind(this);
        this.PatchCategories = this.PatchCategories.bind(this);
        this.SyncCategory = this.SyncCategory.bind(this);
        this.GetInventoryRecords = this.GetInventoryRecords.bind(this);
        this.SaveInventoryRecords = this.SaveInventoryRecords.bind(this);
        this.DeleteInventoryRecords = this.DeleteInventoryRecords.bind(this);
        this.PatchInventoryRecords = this.PatchInventoryRecords.bind(this);
        this.SyncInventoryRecord = this.SyncInventoryRecord.bind(this);
        this.SyncSupplier = this.SyncSupplier.bind(this);
        this.GetSuppliers = this.GetSuppliers.bind(this);
        this.SaveSuppliers = this.SaveSuppliers.bind(this);
        this.DeleteSuppliers = this.DeleteSuppliers.bind(this);
        this.PatchSuppliers = this.PatchSuppliers.bind(this);
        this.GetSupplierUsers = this.GetSupplierUsers.bind(this);
        this.SaveSupplierUsers = this.SaveSupplierUsers.bind(this);
        this.DeleteSupplierUsers = this.DeleteSupplierUsers.bind(this);
        this.PatchSupplierUsers = this.PatchSupplierUsers.bind(this);
        this.SyncSupplierUser = this.SyncSupplierUser.bind(this);
    }

   /**
    * Retrieve the entity sync delivery configuration for admin users Get the entity sync delivery configuration for AdminUsers
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
    * Create or update the entity sync delivery configuration for admin users Create or update the entity sync delivery configuration for AdminUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-admin-users|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID, SyncEntityChanged, SyncEntityDeleted
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
    * Delete the entity sync delivery configuration for admin users Delete the entity sync delivery configuration for AdminUsers
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
    * Partially update the entity sync delivery configuration for admin users Partially update the entity sync delivery configuration for AdminUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/patch-admin-users|api docs} for more info 
    * 
    * @param entitySyncConfig 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchAdminUsers<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: PartialDeep<EntitySyncConfig>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrations/entitysync/adminusers`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Sync an admin user 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/sync-admin-user|api docs} for more info 
    * 
    * @param syncAdminUser Required fields: UserID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SyncAdminUser(syncAdminUser: SyncAdminUser,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/integrations/entitysync/adminusers/sync`, { ...requestOptions, data: syncAdminUser, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve the entity sync delivery configuration for buyers Get the entity sync delivery configuration for Buyers
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
    * Create or update the entity sync delivery configuration for buyers Create or update the entity sync delivery configuration for Buyers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-buyers|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID, SyncEntityChanged, SyncEntityDeleted
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
    * Delete the entity sync delivery configuration for buyers Delete the entity sync delivery configuration for Buyers
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
    * Partially update the entity sync delivery configuration for buyers Partially update the entity sync delivery configuration for Buyers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/patch-buyers|api docs} for more info 
    * 
    * @param entitySyncConfig 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchBuyers<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: PartialDeep<EntitySyncConfig>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrations/entitysync/buyers`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Sync a buyer 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/sync-buyer|api docs} for more info 
    * 
    * @param syncBuyer Required fields: BuyerID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SyncBuyer(syncBuyer: SyncBuyer,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/integrations/entitysync/buyers/sync`, { ...requestOptions, data: syncBuyer, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve the entity sync delivery configuration for buyer user groups Get the entity sync delivery configuration for BuyerUserGroups
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
    * Create or update the entity sync delivery configuration for buyer user groups Create or update the entity sync delivery configuration for BuyerUserGroups
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-user-groups|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID, SyncEntityChanged, SyncEntityDeleted
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
    * Delete the entity sync delivery configuration for buyer user groups Delete the entity sync delivery configuration for BuyerUserGroups
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
    * Partially update the entity sync delivery configuration for buyer user groups Partially update the entity sync delivery configuration for BuyerUserGroups
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/patch-buyer-user-groups|api docs} for more info 
    * 
    * @param entitySyncConfig 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchBuyerUserGroups<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: PartialDeep<EntitySyncConfig>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrations/entitysync/buyers/usergroups`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Sync a buyer user group 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/sync-buyer-user-group|api docs} for more info 
    * 
    * @param syncBuyerUserGroup Required fields: BuyerID, UserGroupID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SyncBuyerUserGroup(syncBuyerUserGroup: SyncBuyerUserGroup,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/integrations/entitysync/buyers/usergroups/sync`, { ...requestOptions, data: syncBuyerUserGroup, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve the entity sync delivery configuration for buyer users Get the entity sync delivery configuration for BuyerUsers
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
    * Create or update the entity sync delivery configuration for buyer users Create or update the entity sync delivery configuration for BuyerUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-buyer-users|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID, SyncEntityChanged, SyncEntityDeleted
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
    * Delete the entity sync delivery configuration for buyer users Delete the entity sync delivery configuration for BuyerUsers
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
    * Partially update the entity sync delivery configuration for buyer users Partially update the entity sync delivery configuration for BuyerUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/patch-buyer-users|api docs} for more info 
    * 
    * @param entitySyncConfig 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchBuyerUsers<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: PartialDeep<EntitySyncConfig>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrations/entitysync/buyers/users`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Sync a buyer user 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/sync-buyer-user|api docs} for more info 
    * 
    * @param syncBuyerUser Required fields: BuyerID, UserID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SyncBuyerUser(syncBuyerUser: SyncBuyerUser,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/integrations/entitysync/buyers/users/sync`, { ...requestOptions, data: syncBuyerUser, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve the entity sync delivery configuration for categories Get the entity sync delivery configuration for Categories
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
    * Create or update the entity sync delivery configuration for categories Create or update the entity sync delivery configuration for Categories
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-categories|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID, SyncEntityChanged, SyncEntityDeleted
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
    * Delete the entity sync delivery configuration for categories Delete the entity sync delivery configuration for Categories
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
    * Partially update the entity sync delivery configuration for categories Partially update the entity sync delivery configuration for Categories
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/patch-categories|api docs} for more info 
    * 
    * @param entitySyncConfig 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchCategories<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: PartialDeep<EntitySyncConfig>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrations/entitysync/categories`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Sync a category 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/sync-category|api docs} for more info 
    * 
    * @param syncCategory Required fields: CatalogID, CategoryID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SyncCategory(syncCategory: SyncCategory,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/integrations/entitysync/categories/sync`, { ...requestOptions, data: syncCategory, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve the entity sync delivery configuration for inventory records Get the entity sync delivery configuration for InventoryRecords
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
    * Create or update the entity sync delivery configuration for inventory records Create or update the entity sync delivery configuration for InventoryRecords
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-inventory-records|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID, SyncEntityChanged, SyncEntityDeleted
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
    * Delete the entity sync delivery configuration for inventory records Delete the entity sync delivery configuration for InventoryRecords
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
    * Partially update the entity sync delivery configuration for inventory records Partially update the entity sync delivery configuration for InventoryRecords
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/patch-inventory-records|api docs} for more info 
    * 
    * @param entitySyncConfig 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchInventoryRecords<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: PartialDeep<EntitySyncConfig>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrations/entitysync/products/inventoryrecords`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Sync an inventory record 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/sync-inventory-record|api docs} for more info 
    * 
    * @param syncInventoryRecord Required fields: ProductID, InventoryRecordID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SyncInventoryRecord(syncInventoryRecord: SyncInventoryRecord,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/integrations/entitysync/products/inventoryrecords/sync`, { ...requestOptions, data: syncInventoryRecord, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Sync a supplier 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/sync-supplier|api docs} for more info 
    * 
    * @param syncSupplier Required fields: SupplierID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SyncSupplier(syncSupplier: SyncSupplier,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/integrations/entitysync/supplier/sync`, { ...requestOptions, data: syncSupplier, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve the entity sync delivery configuration for suppliers Get the entity sync delivery configuration for Suppliers
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
    * Create or update the entity sync delivery configuration for suppliers Create or update the entity sync delivery configuration for Suppliers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-suppliers|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID, SyncEntityChanged, SyncEntityDeleted
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
    * Delete the entity sync delivery configuration for suppliers Delete the entity sync delivery configuration for Suppliers
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
    * Partially update the entity sync delivery configuration for suppliers Partially update the entity sync delivery configuration for Suppliers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/patch-suppliers|api docs} for more info 
    * 
    * @param entitySyncConfig 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchSuppliers<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: PartialDeep<EntitySyncConfig>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrations/entitysync/suppliers`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve the entity sync delivery configuration for supplier users Get the entity sync delivery configuration for SupplierUsers
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
    * Create or update the entity sync delivery configuration for supplier users Create or update the entity sync delivery configuration for SupplierUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/save-supplier-users|api docs} for more info 
    * 
    * @param entitySyncConfig Required fields: DeliveryConfigID, SyncEntityChanged, SyncEntityDeleted
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
    * Delete the entity sync delivery configuration for supplier users Delete the entity sync delivery configuration for SupplierUsers
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
    * Partially update the entity sync delivery configuration for supplier users Partially update the entity sync delivery configuration for SupplierUsers
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/patch-supplier-users|api docs} for more info 
    * 
    * @param entitySyncConfig 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchSupplierUsers<TEntitySyncConfig extends EntitySyncConfig>(entitySyncConfig: PartialDeep<EntitySyncConfig>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TEntitySyncConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrations/entitysync/suppliers/users`, { ...requestOptions, data: entitySyncConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Sync a supplier user 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/entity-synchronization/sync-supplier-user|api docs} for more info 
    * 
    * @param syncSupplierUser Required fields: SupplierID, UserID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SyncSupplierUser(syncSupplierUser: SyncSupplierUser,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/integrations/entitysync/suppliers/users/sync`, { ...requestOptions, data: syncSupplierUser, impersonating,  } )
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