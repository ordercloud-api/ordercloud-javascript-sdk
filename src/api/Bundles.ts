import { ListPageWithFacets } from '../models/ListPageWithFacets';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Bundle } from '../models/Bundle';
import { SearchType } from '../models/SearchType';
import { ListPage } from '../models/ListPage';
import { BundleAssignment } from '../models/BundleAssignment';
import { BundleProductAssignment } from '../models/BundleProductAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Bundles {
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
        this.DeleteProductAssignment = this.DeleteProductAssignment.bind(this);
        this.ListAssignments = this.ListAssignments.bind(this);
        this.SaveAssignment = this.SaveAssignment.bind(this);
        this.ListProductAssignments = this.ListProductAssignments.bind(this);
        this.SaveProductAssignment = this.SaveProductAssignment.bind(this);
    }

   /**
    * List bundles 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/bundles/list|api docs} for more info 
    * 
    * @param listOptions.catalogID ID of the catalog.
    * @param listOptions.categoryID ID of the category.
    * @param listOptions.supplierID ID of the supplier.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.searchType Type of search to perform.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List<TBundle extends Bundle>(listOptions: { catalogID?: string, categoryID?: string, supplierID?: string, search?: string, searchOn?: Searchable<'Bundles.List'>, searchType?: SearchType, sortBy?: Sortable<'Bundles.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPageWithFacets<TBundle>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/bundles`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a bundle 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/bundles/create|api docs} for more info 
    * 
    * @param bundle Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TBundle extends Bundle>(bundle: Bundle,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBundle>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/bundles`, { ...requestOptions, data: bundle, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve a bundle 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/bundles/get|api docs} for more info 
    * 
    * @param bundleID ID of the bundle.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TBundle extends Bundle>(bundleID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBundle>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/bundles/${bundleID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a bundle If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/bundles/save|api docs} for more info 
    * 
    * @param bundleID ID of the bundle.
    * @param bundle Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TBundle extends Bundle>(bundleID: string, bundle: Bundle,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBundle>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/bundles/${bundleID}`, { ...requestOptions, data: bundle, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a bundle 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/bundles/delete|api docs} for more info 
    * 
    * @param bundleID ID of the bundle.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(bundleID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/bundles/${bundleID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a bundle 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/bundles/patch|api docs} for more info 
    * 
    * @param bundleID ID of the bundle.
    * @param bundle 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TBundle extends Bundle>(bundleID: string, bundle: PartialDeep<Bundle>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBundle>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/bundles/${bundleID}`, { ...requestOptions, data: bundle, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a bundle assignment 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/bundles/delete-assignment|api docs} for more info 
    * 
    * @param bundleID ID of the bundle.
    * @param buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.sellerID ID of the seller.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteAssignment(bundleID: string, buyerID: string, listOptions: { userID?: string, userGroupID?: string, sellerID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/bundles/${bundleID}/assignments/${buyerID}`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a bundle product assignment 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/bundles/delete-product-assignment|api docs} for more info 
    * 
    * @param bundleID ID of the bundle.
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteProductAssignment(bundleID: string, productID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/bundles/${bundleID}/productassignments/${productID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * List bundle assignments 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/bundles/list-assignments|api docs} for more info 
    * 
    * @param listOptions.bundleID ID of the bundle.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the bundle assignment. Possible values: Group, Company.
    * @param listOptions.page Page of results to return. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListAssignments<TBundleAssignment extends BundleAssignment>(listOptions: { bundleID?: string, buyerID?: string, userGroupID?: string, level?: 'Group' | 'Company', page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TBundleAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/bundles/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a bundle assignment 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/bundles/save-assignment|api docs} for more info 
    * 
    * @param bundleAssignment Required fields: BundleID, BuyerID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveAssignment(bundleAssignment: BundleAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/bundles/assignments`, { ...requestOptions, data: bundleAssignment, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * List bundle product assignments 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/bundles/list-product-assignments|api docs} for more info 
    * 
    * @param listOptions.bundleID ID of the bundle.
    * @param listOptions.productID ID of the product.
    * @param listOptions.page Page of results to return. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListProductAssignments<TBundleProductAssignment extends BundleProductAssignment>(listOptions: { bundleID?: string, productID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TBundleProductAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/bundles/productassignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a bundle product assignment 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/bundles/save-product-assignment|api docs} for more info 
    * 
    * @param bundleProductAssignment Required fields: ProductID, BundleID, Required
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveProductAssignment(bundleProductAssignment: BundleProductAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/bundles/productassignments`, { ...requestOptions, data: bundleProductAssignment, impersonating,  } )
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
     * Bundles.As().List() // lists Bundles using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Bundles();