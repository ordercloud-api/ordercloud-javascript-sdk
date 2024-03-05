import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { InventoryRecord } from '../models/InventoryRecord';
import { InventoryRecordAssignment } from '../models/InventoryRecordAssignment';
import { PartyType } from '../models/PartyType';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class InventoryRecords {
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
        this.ListVariant = this.ListVariant.bind(this);
        this.CreateVariant = this.CreateVariant.bind(this);
        this.GetVariant = this.GetVariant.bind(this);
        this.SaveVariant = this.SaveVariant.bind(this);
        this.DeleteVariant = this.DeleteVariant.bind(this);
        this.PatchVariant = this.PatchVariant.bind(this);
        this.DeleteVariantAssignment = this.DeleteVariantAssignment.bind(this);
        this.ListVariantAssignments = this.ListVariantAssignments.bind(this);
        this.SaveVariantAssignment = this.SaveVariantAssignment.bind(this);
    }

   /**
    * Get a list of inventory records. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/list|api docs} for more info 
    * 
    * @param productID ID of the product.
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
    public async List<TInventoryRecord extends InventoryRecord>(productID: string, listOptions: { search?: string, searchOn?: Searchable<'InventoryRecords.List'>, sortBy?: Sortable<'InventoryRecords.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TInventoryRecord>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/products/${productID}/inventoryrecords`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new inventory record. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/create|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param inventoryRecord Required fields: AddressID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TInventoryRecord extends InventoryRecord>(productID: string, inventoryRecord: InventoryRecord,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TInventoryRecord>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/products/${productID}/inventoryrecords`, { ...requestOptions, data: inventoryRecord, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single inventory record. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/get|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param inventoryRecordID ID of the inventory record.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TInventoryRecord extends InventoryRecord>(productID: string, inventoryRecordID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TInventoryRecord>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/products/${productID}/inventoryrecords/${inventoryRecordID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an inventory record. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/save|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param inventoryRecordID ID of the inventory record.
    * @param inventoryRecord Required fields: AddressID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TInventoryRecord extends InventoryRecord>(productID: string, inventoryRecordID: string, inventoryRecord: InventoryRecord,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TInventoryRecord>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/products/${productID}/inventoryrecords/${inventoryRecordID}`, { ...requestOptions, data: inventoryRecord, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an inventory record. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/delete|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param inventoryRecordID ID of the inventory record.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(productID: string, inventoryRecordID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/products/${productID}/inventoryrecords/${inventoryRecordID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an inventory record. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/patch|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param inventoryRecordID ID of the inventory record.
    * @param inventoryRecord 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TInventoryRecord extends InventoryRecord>(productID: string, inventoryRecordID: string, inventoryRecord: PartialDeep<InventoryRecord>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TInventoryRecord>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/products/${productID}/inventoryrecords/${inventoryRecordID}`, { ...requestOptions, data: inventoryRecord, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an inventory record assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/delete-assignment|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param inventoryRecordID ID of the inventory record.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteAssignment(productID: string, inventoryRecordID: string, listOptions: { buyerID?: string, userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/products/${productID}/inventoryrecords/${inventoryRecordID}/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of inventory record assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/list-assignments|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.inventoryRecordID ID of the inventory record.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the inventory record assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListAssignments<TInventoryRecordAssignment extends InventoryRecordAssignment>(productID: string, listOptions: { buyerID?: string, inventoryRecordID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TInventoryRecordAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/products/${productID}/inventoryrecords/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an inventory record assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/save-assignment|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param inventoryRecordAssignment Required fields: InventoryRecordID, BuyerID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveAssignment(productID: string, inventoryRecordAssignment: InventoryRecordAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/products/${productID}/inventoryrecords/assignments`, { ...requestOptions, data: inventoryRecordAssignment, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of variant inventory records. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/list-variant|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
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
    public async ListVariant<TInventoryRecord extends InventoryRecord>(productID: string, variantID: string, listOptions: { search?: string, searchOn?: Searchable<'InventoryRecords.ListVariant'>, sortBy?: Sortable<'InventoryRecords.ListVariant'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TInventoryRecord>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/products/${productID}/variants/${variantID}/inventoryrecords`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new variant inventory record. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/create-variant|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param inventoryRecord Required fields: AddressID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async CreateVariant<TInventoryRecord extends InventoryRecord>(productID: string, variantID: string, inventoryRecord: InventoryRecord,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TInventoryRecord>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/products/${productID}/variants/${variantID}/inventoryrecords`, { ...requestOptions, data: inventoryRecord, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single variant inventory record. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/get-variant|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param inventoryRecordID ID of the inventory record.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetVariant<TInventoryRecord extends InventoryRecord>(productID: string, variantID: string, inventoryRecordID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TInventoryRecord>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/products/${productID}/variants/${variantID}/inventoryrecords/${inventoryRecordID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a variant inventory record. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/save-variant|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param inventoryRecordID ID of the inventory record.
    * @param inventoryRecord Required fields: AddressID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveVariant<TInventoryRecord extends InventoryRecord>(productID: string, variantID: string, inventoryRecordID: string, inventoryRecord: InventoryRecord,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TInventoryRecord>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/products/${productID}/variants/${variantID}/inventoryrecords/${inventoryRecordID}`, { ...requestOptions, data: inventoryRecord, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a variant inventory record. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/delete-variant|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param inventoryRecordID ID of the inventory record.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteVariant(productID: string, variantID: string, inventoryRecordID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/products/${productID}/variants/${variantID}/inventoryrecords/${inventoryRecordID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a variant inventory record. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/patch-variant|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param inventoryRecordID ID of the inventory record.
    * @param inventoryRecord 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchVariant<TInventoryRecord extends InventoryRecord>(productID: string, variantID: string, inventoryRecordID: string, inventoryRecord: PartialDeep<InventoryRecord>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TInventoryRecord>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/products/${productID}/variants/${variantID}/inventoryrecords/${inventoryRecordID}`, { ...requestOptions, data: inventoryRecord, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an inventory record variant assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/delete-variant-assignment|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param inventoryRecordID ID of the inventory record.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteVariantAssignment(productID: string, variantID: string, inventoryRecordID: string, listOptions: { buyerID?: string, userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/products/${productID}/variants/${variantID}/inventoryrecords/${inventoryRecordID}/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of inventory record variant assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/list-variant-assignments|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.inventoryRecordID ID of the inventory record.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the inventory record assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListVariantAssignments<TInventoryRecordAssignment extends InventoryRecordAssignment>(productID: string, variantID: string, listOptions: { buyerID?: string, inventoryRecordID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TInventoryRecordAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/products/${productID}/variants/${variantID}/inventoryrecords/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an inventory record variant assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/inventory-records/save-variant-assignment|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param inventoryRecordAssignment Required fields: InventoryRecordID, BuyerID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveVariantAssignment(productID: string, variantID: string, inventoryRecordAssignment: InventoryRecordAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/products/${productID}/variants/${variantID}/inventoryrecords/assignments`, { ...requestOptions, data: inventoryRecordAssignment, impersonating,  } )
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
     * InventoryRecords.As().List() // lists InventoryRecords using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new InventoryRecords();