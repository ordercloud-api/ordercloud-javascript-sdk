import { ListPage } from '../models/ListPage';
import { PriceSchedule } from '../models/PriceSchedule';
import { PriceBreak } from '../models/PriceBreak';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

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
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TPriceSchedule extends PriceSchedule>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TPriceSchedule>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TPriceSchedule>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/priceschedules`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param priceSchedule Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TPriceSchedule extends PriceSchedule>(priceSchedule: PriceSchedule, accessToken?: string ): Promise<RequiredDeep<TPriceSchedule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/priceschedules`, priceSchedule, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TPriceSchedule extends PriceSchedule>(priceScheduleID: string,  accessToken?: string ): Promise<RequiredDeep<TPriceSchedule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/priceschedules/${priceScheduleID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param priceSchedule Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TPriceSchedule extends PriceSchedule>(priceScheduleID: string, priceSchedule: PriceSchedule, accessToken?: string ): Promise<RequiredDeep<TPriceSchedule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/priceschedules/${priceScheduleID}`, priceSchedule, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(priceScheduleID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/priceschedules/${priceScheduleID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param priceSchedule 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TPriceSchedule extends PriceSchedule>(priceScheduleID: string, priceSchedule: PartialDeep<PriceSchedule>,  accessToken?: string ): Promise<RequiredDeep<TPriceSchedule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/priceschedules/${priceScheduleID}`, priceSchedule, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param priceBreak Required fields: Quantity, Price
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SavePriceBreak<TPriceSchedule extends PriceSchedule>(priceScheduleID: string, priceBreak: PriceBreak, accessToken?: string ): Promise<RequiredDeep<TPriceSchedule>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/priceschedules/${priceScheduleID}/PriceBreaks`, priceBreak, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param options.quantity Quantity of the price schedule.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeletePriceBreak(priceScheduleID: string,  options: { quantity?: number } = {}, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/priceschedules/${priceScheduleID}/PriceBreaks`, { params: { ...options,  accessToken, impersonating } } );
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