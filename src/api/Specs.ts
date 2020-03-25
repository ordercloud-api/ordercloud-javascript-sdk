import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Spec } from '../models/Spec';
import { SpecOption } from '../models/SpecOption';
import { SpecProductAssignment } from '../models/SpecProductAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Specs {
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
        this.ListOptions = this.ListOptions.bind(this);
        this.CreateOption = this.CreateOption.bind(this);
        this.GetOption = this.GetOption.bind(this);
        this.SaveOption = this.SaveOption.bind(this);
        this.DeleteOption = this.DeleteOption.bind(this);
        this.PatchOption = this.PatchOption.bind(this);
        this.DeleteProductAssignment = this.DeleteProductAssignment.bind(this);
        this.ListProductAssignments = this.ListProductAssignments.bind(this);
        this.SaveProductAssignment = this.SaveProductAssignment.bind(this);
    }

   /**
    * Get a list of specs. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async List(listOptions?: { search?: string, searchOn?: Searchable<'Specs.List'>, sortBy?: Sortable<'Specs.List'>, page?: number, pageSize?: number, filters?: Filters<Required<Spec>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<Spec>>>;
    public async List<TSpec extends Spec>(listOptions?: { search?: string, searchOn?: Searchable<'Specs.List'>, sortBy?: Sortable<'Specs.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TSpec>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TSpec>>>;
    public async List<TSpec extends Spec>(listOptions: { search?: string, searchOn?: Searchable<'Specs.List'>, sortBy?: Sortable<'Specs.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TSpec>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpec>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/specs`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new spec. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/create|api docs} for more info 
    * 
    * @param spec Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create(spec: Spec,requestOptions?: RequestOptions ): Promise<RequiredDeep<Spec>>;
    public async Create<TSpec extends Spec>(spec: Spec,requestOptions?: RequestOptions ): Promise<RequiredDeep<TSpec>>;
    public async Create<TSpec extends Spec>(spec: Spec,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpec>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/specs`, { ...requestOptions, data: spec, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single spec. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/get|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get(specID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<Spec>>;
    public async Get<TSpec extends Spec>(specID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<TSpec>>;
    public async Get<TSpec extends Spec>(specID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpec>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/specs/${specID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a spec. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/save|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param spec Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save(specID: string, spec: Spec,requestOptions?: RequestOptions ): Promise<RequiredDeep<Spec>>;
    public async Save<TSpec extends Spec>(specID: string, spec: Spec,requestOptions?: RequestOptions ): Promise<RequiredDeep<TSpec>>;
    public async Save<TSpec extends Spec>(specID: string, spec: Spec,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpec>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/specs/${specID}`, { ...requestOptions, data: spec, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a spec. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/delete|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(specID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(specID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(specID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/specs/${specID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a spec. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/patch|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param spec 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch(specID: string, spec: PartialDeep<Spec>, requestOptions?: RequestOptions ): Promise<RequiredDeep<Spec>>;
    public async Patch<TSpec extends Spec>(specID: string, spec: PartialDeep<Spec>, requestOptions?: RequestOptions ): Promise<RequiredDeep<TSpec>>;
    public async Patch<TSpec extends Spec>(specID: string, spec: PartialDeep<Spec>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpec>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/specs/${specID}`, { ...requestOptions, data: spec, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of spec options. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/list-options|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListOptions(specID: string, listOptions?: { search?: string, searchOn?: Searchable<'Specs.ListOptions'>, sortBy?: Sortable<'Specs.ListOptions'>, page?: number, pageSize?: number, filters?: Filters<Required<SpecOption>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<SpecOption>>>;
    public async ListOptions<TSpecOption extends SpecOption>(specID: string, listOptions?: { search?: string, searchOn?: Searchable<'Specs.ListOptions'>, sortBy?: Sortable<'Specs.ListOptions'>, page?: number, pageSize?: number, filters?: Filters<Required<TSpecOption>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TSpecOption>>>;
    public async ListOptions<TSpecOption extends SpecOption>(specID: string, listOptions: { search?: string, searchOn?: Searchable<'Specs.ListOptions'>, sortBy?: Sortable<'Specs.ListOptions'>, page?: number, pageSize?: number, filters?: Filters<Required<TSpecOption>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpecOption>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/specs/${specID}/options`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new spec option. A Spec can have multiple Options-- for example, if the spec is called 'Color', the options might be 'Blue', 'Red', and 'Green'. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/create-option|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param specOption Required fields: Value
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async CreateOption(specID: string, specOption: SpecOption,requestOptions?: RequestOptions ): Promise<RequiredDeep<SpecOption>>;
    public async CreateOption<TSpecOption extends SpecOption>(specID: string, specOption: SpecOption,requestOptions?: RequestOptions ): Promise<RequiredDeep<TSpecOption>>;
    public async CreateOption<TSpecOption extends SpecOption>(specID: string, specOption: SpecOption,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpecOption>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/specs/${specID}/options`, { ...requestOptions, data: specOption, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single spec option. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/get-option|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetOption(specID: string, optionID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<SpecOption>>;
    public async GetOption<TSpecOption extends SpecOption>(specID: string, optionID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<TSpecOption>>;
    public async GetOption<TSpecOption extends SpecOption>(specID: string, optionID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpecOption>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/specs/${specID}/options/${optionID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a spec option. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/save-option|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param specOption Required fields: Value
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SaveOption(specID: string, optionID: string, specOption: SpecOption,requestOptions?: RequestOptions ): Promise<RequiredDeep<SpecOption>>;
    public async SaveOption<TSpecOption extends SpecOption>(specID: string, optionID: string, specOption: SpecOption,requestOptions?: RequestOptions ): Promise<RequiredDeep<TSpecOption>>;
    public async SaveOption<TSpecOption extends SpecOption>(specID: string, optionID: string, specOption: SpecOption,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpecOption>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/specs/${specID}/options/${optionID}`, { ...requestOptions, data: specOption, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a spec option. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/delete-option|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteOption(specID: string, optionID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async DeleteOption(specID: string, optionID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async DeleteOption(specID: string, optionID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/specs/${specID}/options/${optionID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a spec option. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/patch-option|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param specOption 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async PatchOption(specID: string, optionID: string, specOption: SpecOption,requestOptions?: RequestOptions ): Promise<RequiredDeep<SpecOption>>;
    public async PatchOption<TSpecOption extends SpecOption>(specID: string, optionID: string, specOption: SpecOption,requestOptions?: RequestOptions ): Promise<RequiredDeep<TSpecOption>>;
    public async PatchOption<TSpecOption extends SpecOption>(specID: string, optionID: string, specOption: SpecOption,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpecOption>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/specs/${specID}/options/${optionID}`, { ...requestOptions, data: specOption, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a spec product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/delete-product-assignment|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteProductAssignment(specID: string, productID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async DeleteProductAssignment(specID: string, productID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async DeleteProductAssignment(specID: string, productID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/specs/${specID}/productassignments/${productID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of spec product assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/list-product-assignments|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListProductAssignments(listOptions?: { search?: string, searchOn?: Searchable<'Specs.ListProductAssignments'>, sortBy?: Sortable<'Specs.ListProductAssignments'>, page?: number, pageSize?: number, filters?: Filters<Required<SpecProductAssignment>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<SpecProductAssignment>>>;
    public async ListProductAssignments<TSpecProductAssignment extends SpecProductAssignment>(listOptions?: { search?: string, searchOn?: Searchable<'Specs.ListProductAssignments'>, sortBy?: Sortable<'Specs.ListProductAssignments'>, page?: number, pageSize?: number, filters?: Filters<Required<TSpecProductAssignment>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TSpecProductAssignment>>>;
    public async ListProductAssignments<TSpecProductAssignment extends SpecProductAssignment>(listOptions: { search?: string, searchOn?: Searchable<'Specs.ListProductAssignments'>, sortBy?: Sortable<'Specs.ListProductAssignments'>, page?: number, pageSize?: number, filters?: Filters<Required<TSpecProductAssignment>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpecProductAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/specs/productassignments`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a spec product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/save-product-assignment|api docs} for more info 
    * 
    * @param specProductAssignment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SaveProductAssignment(specProductAssignment: SpecProductAssignment,requestOptions?: RequestOptions ): Promise<void>;
    public async SaveProductAssignment(specProductAssignment: SpecProductAssignment,requestOptions?: RequestOptions ): Promise<void>;
    public async SaveProductAssignment(specProductAssignment: SpecProductAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/specs/productassignments`, { ...requestOptions, data: specProductAssignment, impersonating, params: {   } } )
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
     * Specs.As().List() // lists Specs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Specs();