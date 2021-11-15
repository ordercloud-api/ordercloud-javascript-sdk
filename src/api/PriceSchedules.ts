import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { PriceSchedule } from '../models/PriceSchedule';
import { PriceBreak } from '../models/PriceBreak';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class PriceSchedules {
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
        this.SavePriceBreak = this.SavePriceBreak.bind(this);
        this.DeletePriceBreak = this.DeletePriceBreak.bind(this);
    }

   /**
    * Get a list of price schedules. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List<TPriceSchedule extends PriceSchedule>(listOptions: { search?: string, searchOn?: Searchable<'PriceSchedules.List'>, sortBy?: Sortable<'PriceSchedules.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TPriceSchedule>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/priceschedules`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new price schedule. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/create|api docs} for more info 
    * 
    * @param priceSchedule Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TPriceSchedule extends PriceSchedule>(priceSchedule: PriceSchedule,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPriceSchedule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/priceschedules`, { ...requestOptions, data: priceSchedule, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single price schedule. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/get|api docs} for more info 
    * 
    * @param priceScheduleID ID of the price schedule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TPriceSchedule extends PriceSchedule>(priceScheduleID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPriceSchedule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/priceschedules/${priceScheduleID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a price schedule. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/save|api docs} for more info 
    * 
    * @param priceScheduleID ID of the price schedule.
    * @param priceSchedule Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TPriceSchedule extends PriceSchedule>(priceScheduleID: string, priceSchedule: PriceSchedule,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPriceSchedule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/priceschedules/${priceScheduleID}`, { ...requestOptions, data: priceSchedule, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a price schedule. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/delete|api docs} for more info 
    * 
    * @param priceScheduleID ID of the price schedule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(priceScheduleID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/priceschedules/${priceScheduleID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a price schedule. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/patch|api docs} for more info 
    * 
    * @param priceScheduleID ID of the price schedule.
    * @param priceSchedule 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TPriceSchedule extends PriceSchedule>(priceScheduleID: string, priceSchedule: PartialDeep<PriceSchedule>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPriceSchedule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/priceschedules/${priceScheduleID}`, { ...requestOptions, data: priceSchedule, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a price schedule price break. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/save-price-break|api docs} for more info 
    * 
    * @param priceScheduleID ID of the price schedule.
    * @param priceBreak Required fields: Quantity, Price
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SavePriceBreak<TPriceSchedule extends PriceSchedule>(priceScheduleID: string, priceBreak: PriceBreak,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPriceSchedule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/priceschedules/${priceScheduleID}/PriceBreaks`, { ...requestOptions, data: priceBreak, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a price schedule price break. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/delete-price-break|api docs} for more info 
    * 
    * @param priceScheduleID ID of the price schedule.
    * @param listOptions.quantity Quantity of the price schedule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeletePriceBreak(priceScheduleID: string, listOptions: { quantity?: number } = {}, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/priceschedules/${priceScheduleID}/PriceBreaks`, { ...requestOptions, impersonating, params: listOptions  } )
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
     * PriceSchedules.As().List() // lists PriceSchedules using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new PriceSchedules();