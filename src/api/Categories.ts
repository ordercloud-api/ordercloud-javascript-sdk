import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Category } from '../models/Category';
import { CategoryAssignment } from '../models/CategoryAssignment';
import { CategoryBundleAssignment } from '../models/CategoryBundleAssignment';
import { CategoryProductAssignment } from '../models/CategoryProductAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Categories {
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
        this.DeleteBundleAssignment = this.DeleteBundleAssignment.bind(this);
        this.DeleteProductAssignment = this.DeleteProductAssignment.bind(this);
        this.ListAssignments = this.ListAssignments.bind(this);
        this.SaveAssignment = this.SaveAssignment.bind(this);
        this.ListBundleAssignments = this.ListBundleAssignments.bind(this);
        this.SaveBundleAssignment = this.SaveBundleAssignment.bind(this);
        this.ListProductAssignments = this.ListProductAssignments.bind(this);
        this.SaveProductAssignment = this.SaveProductAssignment.bind(this);
    }

   /**
    * Get a list of categories. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/list|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param listOptions.depth Depth of the category.
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
    public async List<TCategory extends Category>(catalogID: string, listOptions: { depth?: string, search?: string, searchOn?: Searchable<'Categories.List'>, sortBy?: Sortable<'Categories.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCategory>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/catalogs/${catalogID}/categories`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new category. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.<br/></br>Setting adjustListOrders to true will increase ListOrder for all categories with the same or higher ListOrder.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/create|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param listOptions.adjustListOrders Adjust list orders of the category.
    * @param category Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TCategory extends Category>(catalogID: string, category: Category,listOptions: { adjustListOrders?: boolean } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TCategory>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/catalogs/${catalogID}/categories`, { ...requestOptions, data: category, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single category. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/get|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TCategory extends Category>(catalogID: string, categoryID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TCategory>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/catalogs/${catalogID}/categories/${categoryID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a category. If an object with the same ID already exists, it will be overwritten.<br/></br>Setting adjustListOrders to true will increase ListOrder for all categories with the same or higher ListOrder.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/save|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param listOptions.adjustListOrders Adjust list orders of the category.
    * @param category Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TCategory extends Category>(catalogID: string, categoryID: string, category: Category,listOptions: { adjustListOrders?: boolean } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TCategory>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/catalogs/${catalogID}/categories/${categoryID}`, { ...requestOptions, data: category, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a category. Deleting a parent category will also delete all of that category's children.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/delete|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(catalogID: string, categoryID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/catalogs/${catalogID}/categories/${categoryID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a category. Setting adjustListOrders to true will increase ListOrder for all categories with the same or higher ListOrder.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/patch|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param listOptions.adjustListOrders Adjust list orders of the partial 1.
    * @param category 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TCategory extends Category>(catalogID: string, categoryID: string, category: PartialDeep<Category>, listOptions: { adjustListOrders?: boolean } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TCategory>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/catalogs/${catalogID}/categories/${categoryID}`, { ...requestOptions, data: category, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a category assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/delete-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteAssignment(catalogID: string, categoryID: string, listOptions: { buyerID?: string, userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/catalogs/${catalogID}/categories/${categoryID}/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a category bundle assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/delete-bundle-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param bundleID ID of the bundle.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteBundleAssignment(catalogID: string, categoryID: string, bundleID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/catalogs/${catalogID}/categories/${categoryID}/bundleassignments/${bundleID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a category product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/delete-product-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteProductAssignment(catalogID: string, categoryID: string, productID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/catalogs/${catalogID}/categories/${categoryID}/productassignments/${productID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of category assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/list-assignments|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param listOptions.categoryID ID of the category.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the category assignment. Possible values: Group, Company.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListAssignments<TCategoryAssignment extends CategoryAssignment>(catalogID: string, listOptions: { categoryID?: string, buyerID?: string, userGroupID?: string, level?: 'Group' | 'Company', page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCategoryAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/catalogs/${catalogID}/categories/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a category assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/save-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryAssignment Required fields: CategoryID, BuyerID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveAssignment(catalogID: string, categoryAssignment: CategoryAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/catalogs/${catalogID}/categories/assignments`, { ...requestOptions, data: categoryAssignment, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of category bundle assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/list-bundle-assignments|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param listOptions.categoryID ID of the category.
    * @param listOptions.bundleID ID of the bundle.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListBundleAssignments<TCategoryBundleAssignment extends CategoryBundleAssignment>(catalogID: string, listOptions: { categoryID?: string, bundleID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCategoryBundleAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/catalogs/${catalogID}/categories/bundleassignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a category bundle assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/save-bundle-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryBundleAssignment Required fields: CategoryID, BundleID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveBundleAssignment(catalogID: string, categoryBundleAssignment: CategoryBundleAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/catalogs/${catalogID}/categories/bundleassignments`, { ...requestOptions, data: categoryBundleAssignment, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of category product assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/list-product-assignments|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param listOptions.categoryID ID of the category.
    * @param listOptions.productID ID of the product.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListProductAssignments<TCategoryProductAssignment extends CategoryProductAssignment>(catalogID: string, listOptions: { categoryID?: string, productID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCategoryProductAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/catalogs/${catalogID}/categories/productassignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a category product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/save-product-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryProductAssignment Required fields: CategoryID, ProductID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveProductAssignment(catalogID: string, categoryProductAssignment: CategoryProductAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/catalogs/${catalogID}/categories/productassignments`, { ...requestOptions, data: categoryProductAssignment, impersonating,  } )
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
     * Categories.As().List() // lists Categories using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Categories();