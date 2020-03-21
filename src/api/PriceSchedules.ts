import { ListPage } from '../models/ListPage';
import { PriceSchedule } from '../models/PriceSchedule';
import { PriceBreak } from '../models/PriceBreak';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import httpClient from '../utils/HttpClient';
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
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async List<TPriceSchedule extends PriceSchedule>( options: { search?: string, searchOn?: ('ID' | 'Name' | 'ApplyTax')[], sortBy?: ('Name' | 'ID' | '!Name' | '!ID')[], page?: number, pageSize?: number, filters?: Filters<Required<TPriceSchedule>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TPriceSchedule>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/priceschedules`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param priceSchedule Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create<TPriceSchedule extends PriceSchedule>(priceSchedule: PriceSchedule, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPriceSchedule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/priceschedules`, priceSchedule, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TPriceSchedule extends PriceSchedule>(priceScheduleID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPriceSchedule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/priceschedules/${priceScheduleID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param priceSchedule Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TPriceSchedule extends PriceSchedule>(priceScheduleID: string, priceSchedule: PriceSchedule, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPriceSchedule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/priceschedules/${priceScheduleID}`, priceSchedule, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(priceScheduleID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/priceschedules/${priceScheduleID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param priceSchedule 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TPriceSchedule extends PriceSchedule>(priceScheduleID: string, priceSchedule: PartialDeep<PriceSchedule>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPriceSchedule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/priceschedules/${priceScheduleID}`, priceSchedule, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param priceBreak Required fields: Quantity, Price
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SavePriceBreak<TPriceSchedule extends PriceSchedule>(priceScheduleID: string, priceBreak: PriceBreak, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPriceSchedule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/priceschedules/${priceScheduleID}/PriceBreaks`, priceBreak, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param listOptions.quantity Quantity of the price schedule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeletePriceBreak(priceScheduleID: string,  options: { quantity?: number } = {}, requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/priceschedules/${priceScheduleID}/PriceBreaks`, { params: { ...options,  ...requestOptions, impersonating } } )
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