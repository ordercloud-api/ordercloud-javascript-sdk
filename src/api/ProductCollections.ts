import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { ProductCollection } from '../models/ProductCollection';
import { ListPageWithFacets } from '../models/ListPageWithFacets';
import { ProductCollectionProduct } from '../models/ProductCollectionProduct';
import { SearchType } from '../models/SearchType';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class ProductCollections {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.List = this.List.bind(this);
        this.Get = this.Get.bind(this);
        this.ListEntries = this.ListEntries.bind(this);
    }

   /**
    * Get a list of product collections. 
    * Check out the {@link https://ordercloud.io/api-reference/buyer/product-collections/list|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
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
    public async List<TProductCollection extends ProductCollection>(buyerID: string, listOptions: { search?: string, searchOn?: Searchable<'ProductCollections.List'>, sortBy?: Sortable<'ProductCollections.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TProductCollection>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/buyers/${buyerID}/productcollections`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single product collection. 
    * Check out the {@link https://ordercloud.io/api-reference/buyer/product-collections/get|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param productCollectionID ID of the product collection.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TProductCollection extends ProductCollection>(buyerID: string, productCollectionID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductCollection>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/buyers/${buyerID}/productcollections/${productCollectionID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of product collection entries. 
    * Check out the {@link https://ordercloud.io/api-reference/buyer/product-collections/list-entries|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param productCollectionID ID of the product collection.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.searchType Type of search to perform. Possible values: AnyTerm (default), AllTermsAnyField, AllTermsSameField, ExactPhrase, ExactPhrasePrefix.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListEntries<TProductCollectionProduct extends ProductCollectionProduct>(buyerID: string, productCollectionID: string, listOptions: { search?: string, searchOn?: Searchable<'ProductCollections.ListEntries'>, searchType?: SearchType, sortBy?: Sortable<'ProductCollections.ListEntries'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPageWithFacets<TProductCollectionProduct>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/buyers/${buyerID}/productcollections/${productCollectionID}/products`, { ...requestOptions, impersonating, params: listOptions  } )
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
     * ProductCollections.As().List() // lists ProductCollections using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new ProductCollections();