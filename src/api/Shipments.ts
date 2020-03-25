import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Shipment } from '../models/Shipment';
import { ShipmentItem } from '../models/ShipmentItem';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
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
    * Get a list of shipments. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/list|api docs} for more info 
    * 
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
    public async List(listOptions?: { orderID?: string, search?: string, searchOn?: Searchable<'Shipments.List'>, sortBy?: Sortable<'Shipments.List'>, page?: number, pageSize?: number, filters?: Filters<Required<Shipment>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<Shipment>>>;
    public async List<TShipment extends Shipment>(listOptions?: { orderID?: string, search?: string, searchOn?: Searchable<'Shipments.List'>, sortBy?: Sortable<'Shipments.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TShipment>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TShipment>>>;
    public async List<TShipment extends Shipment>(listOptions: { orderID?: string, search?: string, searchOn?: Searchable<'Shipments.List'>, sortBy?: Sortable<'Shipments.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TShipment>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TShipment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/shipments`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new shipment. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/create|api docs} for more info 
    * 
    * @param shipment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create(shipment: Shipment,requestOptions?: RequestOptions ): Promise<RequiredDeep<Shipment>>;
    public async Create<TShipment extends Shipment>(shipment: Shipment,requestOptions?: RequestOptions ): Promise<RequiredDeep<TShipment>>;
    public async Create<TShipment extends Shipment>(shipment: Shipment,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/shipments`, { ...requestOptions, data: shipment, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single shipment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/get|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get(shipmentID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<Shipment>>;
    public async Get<TShipment extends Shipment>(shipmentID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<TShipment>>;
    public async Get<TShipment extends Shipment>(shipmentID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/shipments/${shipmentID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a shipment. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/save|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param shipment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save(shipmentID: string, shipment: Shipment,requestOptions?: RequestOptions ): Promise<RequiredDeep<Shipment>>;
    public async Save<TShipment extends Shipment>(shipmentID: string, shipment: Shipment,requestOptions?: RequestOptions ): Promise<RequiredDeep<TShipment>>;
    public async Save<TShipment extends Shipment>(shipmentID: string, shipment: Shipment,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/shipments/${shipmentID}`, { ...requestOptions, data: shipment, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a shipment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/delete|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(shipmentID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(shipmentID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(shipmentID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/shipments/${shipmentID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a shipment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/patch|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param shipment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch(shipmentID: string, shipment: PartialDeep<Shipment>, requestOptions?: RequestOptions ): Promise<RequiredDeep<Shipment>>;
    public async Patch<TShipment extends Shipment>(shipmentID: string, shipment: PartialDeep<Shipment>, requestOptions?: RequestOptions ): Promise<RequiredDeep<TShipment>>;
    public async Patch<TShipment extends Shipment>(shipmentID: string, shipment: PartialDeep<Shipment>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/shipments/${shipmentID}`, { ...requestOptions, data: shipment, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of shipment items. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/list-items|api docs} for more info 
    * 
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
    public async ListItems(shipmentID: string, listOptions?: { search?: string, searchOn?: Searchable<'Shipments.ListItems'>, sortBy?: Sortable<'Shipments.ListItems'>, page?: number, pageSize?: number, filters?: Filters<Required<ShipmentItem>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<ShipmentItem>>>;
    public async ListItems<TShipmentItem extends ShipmentItem>(shipmentID: string, listOptions?: { search?: string, searchOn?: Searchable<'Shipments.ListItems'>, sortBy?: Sortable<'Shipments.ListItems'>, page?: number, pageSize?: number, filters?: Filters<Required<TShipmentItem>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TShipmentItem>>>;
    public async ListItems<TShipmentItem extends ShipmentItem>(shipmentID: string, listOptions: { search?: string, searchOn?: Searchable<'Shipments.ListItems'>, sortBy?: Sortable<'Shipments.ListItems'>, page?: number, pageSize?: number, filters?: Filters<Required<TShipmentItem>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TShipmentItem>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/shipments/${shipmentID}/items`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a shipment item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/save-item|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param shipmentItem Required fields: OrderID, LineItemID, QuantityShipped
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SaveItem(shipmentID: string, shipmentItem: ShipmentItem,requestOptions?: RequestOptions ): Promise<RequiredDeep<ShipmentItem>>;
    public async SaveItem<TShipmentItem extends ShipmentItem>(shipmentID: string, shipmentItem: ShipmentItem,requestOptions?: RequestOptions ): Promise<RequiredDeep<TShipmentItem>>;
    public async SaveItem<TShipmentItem extends ShipmentItem>(shipmentID: string, shipmentItem: ShipmentItem,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipmentItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/shipments/${shipmentID}/items`, { ...requestOptions, data: shipmentItem, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single shipment item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/get-item|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetItem(shipmentID: string, orderID: string, lineItemID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<ShipmentItem>>;
    public async GetItem<TShipmentItem extends ShipmentItem>(shipmentID: string, orderID: string, lineItemID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<TShipmentItem>>;
    public async GetItem<TShipmentItem extends ShipmentItem>(shipmentID: string, orderID: string, lineItemID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipmentItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/shipments/${shipmentID}/items/${orderID}/${lineItemID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a shipment item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/delete-item|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteItem(shipmentID: string, orderID: string, lineItemID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async DeleteItem(shipmentID: string, orderID: string, lineItemID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async DeleteItem(shipmentID: string, orderID: string, lineItemID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/shipments/${shipmentID}/items/${orderID}/${lineItemID}`, { ...requestOptions, impersonating, params: {   } } )
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