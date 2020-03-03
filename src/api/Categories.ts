import { ListPage } from '../models/ListPage';
import { Category } from '../models/Category';
import { CategoryAssignment } from '../models/CategoryAssignment';
import { CategoryProductAssignment } from '../models/CategoryProductAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

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
        this.DeleteProductAssignment = this.DeleteProductAssignment.bind(this);
        this.ListAssignments = this.ListAssignments.bind(this);
        this.SaveAssignment = this.SaveAssignment.bind(this);
        this.ListProductAssignments = this.ListProductAssignments.bind(this);
        this.SaveProductAssignment = this.SaveProductAssignment.bind(this);
    }

   /**
    * @param catalogID ID of the catalog.
    * @param options.depth Depth of the category.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TCategory extends Category>(catalogID: string,  options: { depth?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TCategory>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TCategory>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/${catalogID}/categories`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param category Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TCategory extends Category>(catalogID: string, category: Category, accessToken?: string ): Promise<RequiredDeep<TCategory>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/catalogs/${catalogID}/categories`, category, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TCategory extends Category>(catalogID: string, categoryID: string,  accessToken?: string ): Promise<RequiredDeep<TCategory>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/${catalogID}/categories/${categoryID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param category Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TCategory extends Category>(catalogID: string, categoryID: string, category: Category, accessToken?: string ): Promise<RequiredDeep<TCategory>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/catalogs/${catalogID}/categories/${categoryID}`, category, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(catalogID: string, categoryID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/catalogs/${catalogID}/categories/${categoryID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param category 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TCategory extends Category>(catalogID: string, categoryID: string, category: PartialDeep<Category>,  accessToken?: string ): Promise<RequiredDeep<TCategory>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/catalogs/${catalogID}/categories/${categoryID}`, category, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param options.buyerID ID of the buyer.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment(catalogID: string, categoryID: string,  options: { buyerID?: string, userID?: string, userGroupID?: string } = {}, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/catalogs/${catalogID}/categories/${categoryID}/assignments`, { params: { ...options,  accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param productID ID of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteProductAssignment(catalogID: string, categoryID: string, productID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/catalogs/${catalogID}/categories/${categoryID}/productassignments/${productID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param options.categoryID ID of the category.
    * @param options.buyerID ID of the buyer.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.level Level of the category assignment. Possible values: User, Group, Company.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments<TCategoryAssignment extends CategoryAssignment>(catalogID: string,  options: { categoryID?: string, buyerID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TCategoryAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/${catalogID}/categories/assignments`, { params: { ...options,  accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryAssignment Required fields: CategoryID, BuyerID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment(catalogID: string, categoryAssignment: CategoryAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/catalogs/${catalogID}/categories/assignments`, categoryAssignment, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param options.categoryID ID of the category.
    * @param options.productID ID of the product.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListProductAssignments<TCategoryProductAssignment extends CategoryProductAssignment>(catalogID: string,  options: { categoryID?: string, productID?: string, page?: number, pageSize?: number } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TCategoryProductAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/${catalogID}/categories/productassignments`, { params: { ...options,  accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryProductAssignment Required fields: CategoryID, ProductID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveProductAssignment(catalogID: string, categoryProductAssignment: CategoryProductAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/catalogs/${catalogID}/categories/productassignments`, categoryProductAssignment, { params: {  accessToken, impersonating } } );
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