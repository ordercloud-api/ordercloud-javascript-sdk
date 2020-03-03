import { ListPage } from '../models/ListPage';
import { ProductFacet } from '../models/ProductFacet';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

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
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TProductFacet extends ProductFacet>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TProductFacet>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TProductFacet>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/productfacets`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param productFacet Required fields: Name, MinCount
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TProductFacet extends ProductFacet>(productFacet: ProductFacet, accessToken?: string ): Promise<RequiredDeep<TProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/productfacets`, productFacet, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param productFacetID ID of the product facet.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TProductFacet extends ProductFacet>(productFacetID: string,  accessToken?: string ): Promise<RequiredDeep<TProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/productfacets/${productFacetID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param productFacetID ID of the product facet.
    * @param productFacet Required fields: Name, MinCount
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TProductFacet extends ProductFacet>(productFacetID: string, productFacet: ProductFacet, accessToken?: string ): Promise<RequiredDeep<TProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/productfacets/${productFacetID}`, productFacet, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param productFacetID ID of the product facet.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(productFacetID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/productfacets/${productFacetID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param productFacetID ID of the product facet.
    * @param productFacet 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TProductFacet extends ProductFacet>(productFacetID: string, productFacet: PartialDeep<ProductFacet>,  accessToken?: string ): Promise<RequiredDeep<TProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/productfacets/${productFacetID}`, productFacet, { params: {  accessToken, impersonating } } );
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