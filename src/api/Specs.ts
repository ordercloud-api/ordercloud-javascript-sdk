import { ListPage } from '../models/ListPage';
import { Spec } from '../models/Spec';
import { SpecOption } from '../models/SpecOption';
import { SpecProductAssignment } from '../models/SpecProductAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import httpClient from '../utils/HttpClient';
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
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async List<TSpec extends Spec>( options: { search?: string, searchOn?: ('Name' | 'ListOrder' | 'ID' | 'Required' | 'AllowOpenText')[], sortBy?: ('ListOrder' | 'Name' | 'ID' | '!ListOrder' | '!Name' | '!ID')[], page?: number, pageSize?: number, filters?: Filters<Required<TSpec>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpec>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/specs`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param spec Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create<TSpec extends Spec>(spec: Spec, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpec>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/specs`, spec, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param specID ID of the spec.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TSpec extends Spec>(specID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpec>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/specs/${specID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param specID ID of the spec.
    * @param spec Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TSpec extends Spec>(specID: string, spec: Spec, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpec>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/specs/${specID}`, spec, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param specID ID of the spec.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(specID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/specs/${specID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param specID ID of the spec.
    * @param spec 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TSpec extends Spec>(specID: string, spec: PartialDeep<Spec>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpec>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/specs/${specID}`, spec, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
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
    public async ListOptions<TSpecOption extends SpecOption>(specID: string,  options: { search?: string, searchOn?: ('Name' | 'ListOrder' | 'ID' | 'Required' | 'AllowOpenText')[], sortBy?: ('ListOrder' | 'Name' | 'ID' | '!ListOrder' | '!Name' | '!ID')[], page?: number, pageSize?: number, filters?: Filters<Required<TSpecOption>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpecOption>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/specs/${specID}/options`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param specID ID of the spec.
    * @param specOption Required fields: Value
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async CreateOption<TSpecOption extends SpecOption>(specID: string, specOption: SpecOption, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpecOption>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/specs/${specID}/options`, specOption, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetOption<TSpecOption extends SpecOption>(specID: string, optionID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpecOption>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/specs/${specID}/options/${optionID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param specOption Required fields: Value
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SaveOption<TSpecOption extends SpecOption>(specID: string, optionID: string, specOption: SpecOption, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpecOption>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/specs/${specID}/options/${optionID}`, specOption, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteOption(specID: string, optionID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/specs/${specID}/options/${optionID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param specOption 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async PatchOption<TSpecOption extends SpecOption>(specID: string, optionID: string, specOption: SpecOption, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpecOption>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/specs/${specID}/options/${optionID}`, specOption, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param specID ID of the spec.
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteProductAssignment(specID: string, productID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/specs/${specID}/productassignments/${productID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
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
    public async ListProductAssignments<TSpecProductAssignment extends SpecProductAssignment>( options: { search?: string, searchOn?: ('Name' | 'ListOrder' | 'ID' | 'Required' | 'AllowOpenText')[], sortBy?: ('ListOrder' | 'Name' | 'ID' | '!ListOrder' | '!Name' | '!ID')[], page?: number, pageSize?: number, filters?: Filters<Required<TSpecProductAssignment>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpecProductAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/specs/productassignments`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param specProductAssignment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SaveProductAssignment(specProductAssignment: SpecProductAssignment, requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/specs/productassignments`, specProductAssignment, { params: {  ...requestOptions, impersonating } } )
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