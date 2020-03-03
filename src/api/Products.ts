import { ListPageFacet } from '../models/ListPageFacet';
import { Product } from '../models/Product';
import { ListPage } from '../models/ListPage';
import { Spec } from '../models/Spec';
import { Supplier } from '../models/Supplier';
import { Variant } from '../models/Variant';
import { ProductAssignment } from '../models/ProductAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class Products {
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
        this.ListSpecs = this.ListSpecs.bind(this);
        this.ListSuppliers = this.ListSuppliers.bind(this);
        this.SaveSupplier = this.SaveSupplier.bind(this);
        this.RemoveSupplier = this.RemoveSupplier.bind(this);
        this.ListVariants = this.ListVariants.bind(this);
        this.GetVariant = this.GetVariant.bind(this);
        this.SaveVariant = this.SaveVariant.bind(this);
        this.PatchVariant = this.PatchVariant.bind(this);
        this.GenerateVariants = this.GenerateVariants.bind(this);
        this.ListAssignments = this.ListAssignments.bind(this);
        this.SaveAssignment = this.SaveAssignment.bind(this);
    }

   /**
    * @param options.catalogID ID of the catalog.
    * @param options.categoryID ID of the category.
    * @param options.supplierID ID of the supplier.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TProduct extends Product>( options: { catalogID?: string, categoryID?: string, supplierID?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TProduct>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPageFacet<TProduct>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/products`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param product Required fields: Name, QuantityMultiplier
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TProduct extends Product>(product: Product, accessToken?: string ): Promise<RequiredDeep<TProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/products`, { data: product, params: { accessToken, impersonating } }  );
    }

   /**
    * @param productID ID of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TProduct extends Product>(productID: string,  accessToken?: string ): Promise<RequiredDeep<TProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/products/${productID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param product Required fields: Name, QuantityMultiplier
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TProduct extends Product>(productID: string, product: Product, accessToken?: string ): Promise<RequiredDeep<TProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/products/${productID}`, { data: product, params: { accessToken, impersonating } }  );
    }

   /**
    * @param productID ID of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(productID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/products/${productID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param product 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TProduct extends Product>(productID: string, product: PartialDeep<Product>,  accessToken?: string ): Promise<RequiredDeep<TProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/products/${productID}`, { data: product, params: { accessToken, impersonating } }  );
    }

   /**
    * @param productID ID of the product.
    * @param buyerID ID of the buyer.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment(productID: string, buyerID: string,  options: { userID?: string, userGroupID?: string } = {}, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/products/${productID}/assignments/${buyerID}`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListSpecs<TSpec extends Spec>(productID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TSpec>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TSpec>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/products/${productID}/specs`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListSuppliers<TSupplier extends Supplier>(productID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TSupplier>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TSupplier>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/products/${productID}/suppliers`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param supplierID ID of the supplier.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveSupplier(productID: string, supplierID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/products/${productID}/suppliers/${supplierID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param supplierID ID of the supplier.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async RemoveSupplier(productID: string, supplierID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/products/${productID}/suppliers/${supplierID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListVariants<TVariant extends Variant>(productID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TVariant>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TVariant>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/products/${productID}/variants`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetVariant<TVariant extends Variant>(productID: string, variantID: string,  accessToken?: string ): Promise<RequiredDeep<TVariant>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/products/${productID}/variants/${variantID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param variant 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveVariant<TVariant extends Variant>(productID: string, variantID: string, variant: Variant, accessToken?: string ): Promise<RequiredDeep<TVariant>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/products/${productID}/variants/${variantID}`, { data: variant, params: { accessToken, impersonating } }  );
    }

   /**
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param variant 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PatchVariant<TVariant extends Variant>(productID: string, variantID: string, variant: Variant, accessToken?: string ): Promise<RequiredDeep<TVariant>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/products/${productID}/variants/${variantID}`, { data: variant, params: { accessToken, impersonating } }  );
    }

   /**
    * @param productID ID of the product.
    * @param options.overwriteExisting Overwrite existing of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GenerateVariants<TProduct extends Product>(productID: string,  options: { overwriteExisting?: boolean } = {}, accessToken?: string ): Promise<RequiredDeep<TProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/products/${productID}/variants/generate`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param options.productID ID of the product.
    * @param options.priceScheduleID ID of the price schedule.
    * @param options.buyerID ID of the buyer.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.level Level of the product assignment. Possible values: User, Group, Company.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments<TProductAssignment extends ProductAssignment>( options: { productID?: string, priceScheduleID?: string, buyerID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TProductAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/products/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param productAssignment Required fields: ProductID, BuyerID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment(productAssignment: ProductAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/products/assignments`, { data: productAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Products.As().List() // lists Products using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Products();