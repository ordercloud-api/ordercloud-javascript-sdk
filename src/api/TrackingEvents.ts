import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { TrackingEvent } from '../models/TrackingEvent';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class TrackingEvents {
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
    * List tracking events 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/tracking-events/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List<TTrackingEvent extends TrackingEvent>(listOptions: { search?: string, searchOn?: Searchable<'TrackingEvents.List'>, sortBy?: Sortable<'TrackingEvents.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TTrackingEvent>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/trackingEvents`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a tracking event 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/tracking-events/create|api docs} for more info 
    * 
    * @param trackingEvent Required fields: EventType, ClientID, Name, DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TTrackingEvent extends TrackingEvent>(trackingEvent: TrackingEvent,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TTrackingEvent>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/integrations/trackingEvents`, { ...requestOptions, data: trackingEvent, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve a tracking event 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/tracking-events/get|api docs} for more info 
    * 
    * @param eventID ID of the event.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TTrackingEvent extends TrackingEvent>(eventID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TTrackingEvent>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/trackingEvents/${eventID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a tracking event If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/integrations/tracking-events/save|api docs} for more info 
    * 
    * @param eventID ID of the event.
    * @param trackingEvent Required fields: EventType, ClientID, Name, DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TTrackingEvent extends TrackingEvent>(eventID: string, trackingEvent: TrackingEvent,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TTrackingEvent>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrations/trackingEvents/${eventID}`, { ...requestOptions, data: trackingEvent, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a tracking event 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/tracking-events/delete|api docs} for more info 
    * 
    * @param eventID ID of the event.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(eventID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrations/trackingEvents/${eventID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a tracking event 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/tracking-events/patch|api docs} for more info 
    * 
    * @param eventID ID of the event.
    * @param trackingEvent 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TTrackingEvent extends TrackingEvent>(eventID: string, trackingEvent: PartialDeep<TrackingEvent>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TTrackingEvent>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrations/trackingEvents/${eventID}`, { ...requestOptions, data: trackingEvent, impersonating,  } )
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
     * TrackingEvents.As().List() // lists TrackingEvents using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new TrackingEvents();