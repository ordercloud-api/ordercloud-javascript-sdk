import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { ProductFacet } from '../models/ProductFacet';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class ProductFacets {
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
    }

   /**
    * List product facets 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/product-facets/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List<TProductFacet extends ProductFacet>(listOptions: { search?: string, searchOn?: Searchable<'ProductFacets.List'>, sortBy?: Sortable<'ProductFacets.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TProductFacet>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/productfacets`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a product facet 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/product-facets/create|api docs} for more info 
    * 
    * @param productFacet Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TProductFacet extends ProductFacet>(productFacet: ProductFacet,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductFacet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/productfacets`, { ...requestOptions, data: productFacet, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve a product facet 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/product-facets/get|api docs} for more info 
    * 
    * @param productFacetID ID of the product facet.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TProductFacet extends ProductFacet>(productFacetID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductFacet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/productfacets/${productFacetID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a product facet If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/product-facets/save|api docs} for more info 
    * 
    * @param productFacetID ID of the product facet.
    * @param productFacet Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TProductFacet extends ProductFacet>(productFacetID: string, productFacet: ProductFacet,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductFacet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/productfacets/${productFacetID}`, { ...requestOptions, data: productFacet, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a product facet 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/product-facets/delete|api docs} for more info 
    * 
    * @param productFacetID ID of the product facet.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(productFacetID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/productfacets/${productFacetID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a product facet 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/product-facets/patch|api docs} for more info 
    * 
    * @param productFacetID ID of the product facet.
    * @param productFacet 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TProductFacet extends ProductFacet>(productFacetID: string, productFacet: PartialDeep<ProductFacet>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductFacet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/productfacets/${productFacetID}`, { ...requestOptions, data: productFacet, impersonating,  } )
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
     * ProductFacets.As().List() // lists ProductFacets using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new ProductFacets();