import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Shipment } from '../models/Shipment';
import { ShipmentItem } from '../models/ShipmentItem';
import { Address } from '../models/Address';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
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
        this.SetShipFromAddress = this.SetShipFromAddress.bind(this);
        this.SetShipToAddress = this.SetShipToAddress.bind(this);
    }

   /**
    * Get a list of shipments. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/list|api docs} for more info 
    * 
    * @param listOptions.orderID ID of the order.
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
    public async List<TShipment extends Shipment>(listOptions: { orderID?: string, search?: string, searchOn?: Searchable<'Shipments.List'>, sortBy?: Sortable<'Shipments.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TShipment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/shipments`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TShipment extends Shipment>(shipment: Shipment,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/shipments`, { ...requestOptions, data: shipment, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TShipment extends Shipment>(shipmentID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/shipments/${shipmentID}`, { ...requestOptions, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TShipment extends Shipment>(shipmentID: string, shipment: Shipment,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/shipments/${shipmentID}`, { ...requestOptions, data: shipment, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(shipmentID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/shipments/${shipmentID}`, { ...requestOptions, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TShipment extends Shipment>(shipmentID: string, shipment: PartialDeep<Shipment>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/shipments/${shipmentID}`, { ...requestOptions, data: shipment, impersonating,  } )
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
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListItems<TShipmentItem extends ShipmentItem>(shipmentID: string, listOptions: { search?: string, searchOn?: Searchable<'Shipments.ListItems'>, sortBy?: Sortable<'Shipments.ListItems'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TShipmentItem>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/shipments/${shipmentID}/items`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveItem<TShipmentItem extends ShipmentItem>(shipmentID: string, shipmentItem: ShipmentItem,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipmentItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/shipments/${shipmentID}/items`, { ...requestOptions, data: shipmentItem, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetItem<TShipmentItem extends ShipmentItem>(shipmentID: string, orderID: string, lineItemID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipmentItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/shipments/${shipmentID}/items/${orderID}/${lineItemID}`, { ...requestOptions, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteItem(shipmentID: string, orderID: string, lineItemID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/shipments/${shipmentID}/items/${orderID}/${lineItemID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Set a ship from address. Use only when the address is not to be saved/reused. To use a saved address (i.e. from the Addresses resource), PATCH the shipment's FromAddressID property instead.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/set-ship-from-address|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SetShipFromAddress<TShipment extends Shipment>(shipmentID: string, address: Address,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/shipments/${shipmentID}/shipfrom`, { ...requestOptions, data: address, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Set a ship to address. Use only when the address is not to be saved/reused. To use a saved address (i.e. from the Addresses resource), PATCH the shipment's ToAddressID property instead.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/set-ship-to-address|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SetShipToAddress<TShipment extends Shipment>(shipmentID: string, address: Address,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/shipments/${shipmentID}/shipto`, { ...requestOptions, data: address, impersonating,  } )
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