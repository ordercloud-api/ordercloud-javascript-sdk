import { ListPage } from '../models/ListPage';
import { Shipment } from '../models/Shipment';
import { ShipmentItem } from '../models/ShipmentItem';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

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
    * @param options.orderID ID of the order.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TShipment extends Shipment>( options: { orderID?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TShipment>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TShipment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/shipments`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param shipment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TShipment extends Shipment>(shipment: Shipment, accessToken?: string ): Promise<RequiredDeep<TShipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/shipments`, { data: shipment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TShipment extends Shipment>(shipmentID: string,  accessToken?: string ): Promise<RequiredDeep<TShipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/shipments/${shipmentID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param shipment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TShipment extends Shipment>(shipmentID: string, shipment: Shipment, accessToken?: string ): Promise<RequiredDeep<TShipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/shipments/${shipmentID}`, { data: shipment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(shipmentID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/shipments/${shipmentID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param shipment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TShipment extends Shipment>(shipmentID: string, shipment: PartialDeep<Shipment>,  accessToken?: string ): Promise<RequiredDeep<TShipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/shipments/${shipmentID}`, { data: shipment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListItems<TShipmentItem extends ShipmentItem>(shipmentID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TShipmentItem>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TShipmentItem>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/shipments/${shipmentID}/items`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param shipmentItem Required fields: OrderID, LineItemID, QuantityShipped
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveItem<TShipmentItem extends ShipmentItem>(shipmentID: string, shipmentItem: ShipmentItem, accessToken?: string ): Promise<RequiredDeep<TShipmentItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/shipments/${shipmentID}/items`, { data: shipmentItem, params: { accessToken, impersonating } }  );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetItem<TShipmentItem extends ShipmentItem>(shipmentID: string, orderID: string, lineItemID: string,  accessToken?: string ): Promise<RequiredDeep<TShipmentItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/shipments/${shipmentID}/items/${orderID}/${lineItemID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteItem(shipmentID: string, orderID: string, lineItemID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/shipments/${shipmentID}/items/${orderID}/${lineItemID}`, { params: { accessToken, impersonating } } );
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