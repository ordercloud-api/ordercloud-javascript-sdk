import { ListPage } from '../models/ListPage';
import { ProductFacet } from '../models/ProductFacet';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import httpClient from '../utils/HttpClient';
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
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async List<TProductFacet extends ProductFacet>( options: { search?: string, searchOn?: ('ID' | 'Name' | 'XpPath')[], sortBy?: ('ListOrder' | 'ID' | 'Name' | 'XpPath' | '!ListOrder' | '!ID' | '!Name' | '!XpPath')[], page?: number, pageSize?: number, filters?: Filters<Required<TProductFacet>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TProductFacet>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/productfacets`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param productFacet Required fields: Name, MinCount
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create<TProductFacet extends ProductFacet>(productFacet: ProductFacet, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/productfacets`, productFacet, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param productFacetID ID of the product facet.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TProductFacet extends ProductFacet>(productFacetID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/productfacets/${productFacetID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param productFacetID ID of the product facet.
    * @param productFacet Required fields: Name, MinCount
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TProductFacet extends ProductFacet>(productFacetID: string, productFacet: ProductFacet, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/productfacets/${productFacetID}`, productFacet, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param productFacetID ID of the product facet.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(productFacetID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/productfacets/${productFacetID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param productFacetID ID of the product facet.
    * @param productFacet 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TProductFacet extends ProductFacet>(productFacetID: string, productFacet: PartialDeep<ProductFacet>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/productfacets/${productFacetID}`, productFacet, { params: {  ...requestOptions, impersonating } } )
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