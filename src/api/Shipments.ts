import { ListPage } from '../models/ListPage';
import { Shipment } from '../models/Shipment';
import { ShipmentItem } from '../models/ShipmentItem';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import httpClient from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Shipments {
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
        this.ListItems = this.ListItems.bind(this);
        this.SaveItem = this.SaveItem.bind(this);
        this.GetItem = this.GetItem.bind(this);
        this.DeleteItem = this.DeleteItem.bind(this);
    }

   /**
    * @param listOptions.orderID ID of the order.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async List<TShipment extends Shipment>( options: { orderID?: string, search?: string, searchOn?: ('ID' | 'BuyerID' | 'Shipper' | 'DateShipped' | 'DateDelivered' | 'TrackingNumber')[], sortBy?: ('DateShipped' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[], page?: number, pageSize?: number, filters?: Filters<Required<TShipment>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TShipment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/shipments`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param shipment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create<TShipment extends Shipment>(shipment: Shipment, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/shipments`, shipment, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TShipment extends Shipment>(shipmentID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/shipments/${shipmentID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param shipment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TShipment extends Shipment>(shipmentID: string, shipment: Shipment, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/shipments/${shipmentID}`, shipment, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(shipmentID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/shipments/${shipmentID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param shipment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TShipment extends Shipment>(shipmentID: string, shipment: PartialDeep<Shipment>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/shipments/${shipmentID}`, shipment, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListItems<TShipmentItem extends ShipmentItem>(shipmentID: string,  options: { search?: string, searchOn?: ('ID' | 'BuyerID' | 'Shipper' | 'DateShipped' | 'DateDelivered' | 'TrackingNumber')[], sortBy?: ('DateShipped' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[], page?: number, pageSize?: number, filters?: Filters<Required<TShipmentItem>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TShipmentItem>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/shipments/${shipmentID}/items`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param shipmentItem Required fields: OrderID, LineItemID, QuantityShipped
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SaveItem<TShipmentItem extends ShipmentItem>(shipmentID: string, shipmentItem: ShipmentItem, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipmentItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/shipments/${shipmentID}/items`, shipmentItem, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetItem<TShipmentItem extends ShipmentItem>(shipmentID: string, orderID: string, lineItemID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipmentItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/shipments/${shipmentID}/items/${orderID}/${lineItemID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteItem(shipmentID: string, orderID: string, lineItemID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/shipments/${shipmentID}/items/${orderID}/${lineItemID}`, { params: {  ...requestOptions, impersonating } } )
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
     * Shipments.As().List() // lists Shipments using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Shipments();