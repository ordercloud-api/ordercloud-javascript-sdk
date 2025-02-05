import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { UserGroup } from '../models/UserGroup';
import { UserGroupAssignment } from '../models/UserGroupAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class SupplierUserGroups {
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
        this.DeleteUserAssignment = this.DeleteUserAssignment.bind(this);
        this.ListUserAssignments = this.ListUserAssignments.bind(this);
        this.SaveUserAssignment = this.SaveUserAssignment.bind(this);
    }

   /**
    * Get a list of supplier user groups. 
    * Check out the {@link https://ordercloud.io/api-reference/supplier/supplier-user-groups/list|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List<TUserGroup extends UserGroup>(supplierID: string, listOptions: { search?: string, searchOn?: Searchable<'SupplierUserGroups.List'>, sortBy?: Sortable<'SupplierUserGroups.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TUserGroup>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/suppliers/${supplierID}/usergroups`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new supplier user group. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/supplier/supplier-user-groups/create|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userGroup Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TUserGroup extends UserGroup>(supplierID: string, userGroup: UserGroup,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TUserGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/suppliers/${supplierID}/usergroups`, { ...requestOptions, data: userGroup, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single supplier user group. 
    * Check out the {@link https://ordercloud.io/api-reference/supplier/supplier-user-groups/get|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TUserGroup extends UserGroup>(supplierID: string, userGroupID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TUserGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/suppliers/${supplierID}/usergroups/${userGroupID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a supplier user group. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/supplier/supplier-user-groups/save|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param userGroup Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TUserGroup extends UserGroup>(supplierID: string, userGroupID: string, userGroup: UserGroup,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TUserGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/suppliers/${supplierID}/usergroups/${userGroupID}`, { ...requestOptions, data: userGroup, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a supplier user group. 
    * Check out the {@link https://ordercloud.io/api-reference/supplier/supplier-user-groups/delete|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(supplierID: string, userGroupID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/suppliers/${supplierID}/usergroups/${userGroupID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a supplier user group. 
    * Check out the {@link https://ordercloud.io/api-reference/supplier/supplier-user-groups/patch|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param userGroup 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TUserGroup extends UserGroup>(supplierID: string, userGroupID: string, userGroup: PartialDeep<UserGroup>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TUserGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/suppliers/${supplierID}/usergroups/${userGroupID}`, { ...requestOptions, data: userGroup, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a supplier user group user assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/supplier/supplier-user-groups/delete-user-assignment|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param userID ID of the user.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteUserAssignment(supplierID: string, userGroupID: string, userID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/suppliers/${supplierID}/usergroups/${userGroupID}/assignments/${userID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of supplier user group user assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/supplier/supplier-user-groups/list-user-assignments|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.userID ID of the user.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListUserAssignments<TUserGroupAssignment extends UserGroupAssignment>(supplierID: string, listOptions: { userGroupID?: string, userID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TUserGroupAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/suppliers/${supplierID}/usergroups/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a supplier user group user assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/supplier/supplier-user-groups/save-user-assignment|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userGroupAssignment Required fields: UserGroupID, UserID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveUserAssignment(supplierID: string, userGroupAssignment: UserGroupAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/suppliers/${supplierID}/usergroups/assignments`, { ...requestOptions, data: userGroupAssignment, impersonating,  } )
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
     * SupplierUserGroups.As().List() // lists SupplierUserGroups using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new SupplierUserGroups();