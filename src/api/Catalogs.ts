import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Catalog } from '../models/Catalog';
import { CatalogAssignment } from '../models/CatalogAssignment';
import { BundleCatalogAssignment } from '../models/BundleCatalogAssignment';
import { ProductCatalogAssignment } from '../models/ProductCatalogAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Catalogs {
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
    * Get a list of catalogs. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/list|api docs} for more info 
    * 
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
    public async List<TCatalog extends Catalog>(listOptions: { search?: string, searchOn?: Searchable<'Catalogs.List'>, sortBy?: Sortable<'Catalogs.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCatalog>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/catalogs`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new catalog. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/create|api docs} for more info 
    * 
    * @param catalog Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TCatalog extends Catalog>(catalog: Catalog,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TCatalog>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/catalogs`, { ...requestOptions, data: catalog, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single catalog. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/get|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TCatalog extends Catalog>(catalogID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TCatalog>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/catalogs/${catalogID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a catalog. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/save|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param catalog Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TCatalog extends Catalog>(catalogID: string, catalog: Catalog,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TCatalog>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/catalogs/${catalogID}`, { ...requestOptions, data: catalog, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a catalog. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/delete|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(catalogID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/catalogs/${catalogID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a catalog. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/patch|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param catalog 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TCatalog extends Catalog>(catalogID: string, catalog: PartialDeep<Catalog>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TCatalog>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/catalogs/${catalogID}`, { ...requestOptions, data: catalog, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a catalog assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/delete-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param listOptions.buyerID ID of the buyer.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteAssignment(catalogID: string, listOptions: { buyerID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/catalogs/${catalogID}/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a catalog bundle assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/delete-bundle-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param bundleID ID of the bundle.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteBundleAssignment(catalogID: string, bundleID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/catalogs/${catalogID}/bundleassignments/${bundleID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a catalog product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/delete-product-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteProductAssignment(catalogID: string, productID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/catalogs/${catalogID}/productassignments/${productID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of catalog assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/list-assignments|api docs} for more info 
    * 
    * @param listOptions.catalogID ID of the catalog.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListAssignments<TCatalogAssignment extends CatalogAssignment>(listOptions: { catalogID?: string, buyerID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCatalogAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/catalogs/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a catalog assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/save-assignment|api docs} for more info 
    * 
    * @param catalogAssignment Required fields: CatalogID, BuyerID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveAssignment(catalogAssignment: CatalogAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/catalogs/assignments`, { ...requestOptions, data: catalogAssignment, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of catalog bundle assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/list-bundle-assignments|api docs} for more info 
    * 
    * @param listOptions.catalogID ID of the catalog.
    * @param listOptions.bundleID ID of the bundle.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListBundleAssignments<TBundleCatalogAssignment extends BundleCatalogAssignment>(listOptions: { catalogID?: string, bundleID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TBundleCatalogAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/catalogs/bundleassignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a catalog bundle assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/save-bundle-assignment|api docs} for more info 
    * 
    * @param bundleCatalogAssignment Required fields: CatalogID, BundleID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveBundleAssignment(bundleCatalogAssignment: BundleCatalogAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/catalogs/bundleassignments`, { ...requestOptions, data: bundleCatalogAssignment, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of catalog product assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/list-product-assignments|api docs} for more info 
    * 
    * @param listOptions.catalogID ID of the catalog.
    * @param listOptions.productID ID of the product.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListProductAssignments<TProductCatalogAssignment extends ProductCatalogAssignment>(listOptions: { catalogID?: string, productID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TProductCatalogAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/catalogs/productassignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a catalog product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/save-product-assignment|api docs} for more info 
    * 
    * @param productCatalogAssignment Required fields: CatalogID, ProductID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveProductAssignment(productCatalogAssignment: ProductCatalogAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/catalogs/productassignments`, { ...requestOptions, data: productCatalogAssignment, impersonating,  } )
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
     * Catalogs.As().List() // lists Catalogs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Catalogs();