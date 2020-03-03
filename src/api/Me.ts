import { MeUser } from '../models/MeUser';
import { ListPage } from '../models/ListPage';
import { BuyerAddress } from '../models/BuyerAddress';
import { Catalog } from '../models/Catalog';
import { Category } from '../models/Category';
import { CostCenter } from '../models/CostCenter';
import { BuyerCreditCard } from '../models/BuyerCreditCard';
import { Order } from '../models/Order';
import { TokenPasswordReset } from '../models/TokenPasswordReset';
import { ListPageFacet } from '../models/ListPageFacet';
import { BuyerProduct } from '../models/BuyerProduct';
import { Spec } from '../models/Spec';
import { Promotion } from '../models/Promotion';
import { AccessTokenBasic } from '../models/AccessTokenBasic';
import { Shipment } from '../models/Shipment';
import { ShipmentItem } from '../models/ShipmentItem';
import { SpendingAccount } from '../models/SpendingAccount';
import { UserGroup } from '../models/UserGroup';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class Me {
    private impersonating:boolean = false;

   /**
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TMeUser extends MeUser>( accessToken?: string ): Promise<RequiredDeep<TMeUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param meUser Required fields: Username, FirstName, LastName, Email, Active
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TMeUser extends MeUser>(meUser: MeUser, accessToken?: string ): Promise<RequiredDeep<TMeUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me`, { data: meUser, params: { accessToken, impersonating } }  );
    }

   /**
    * @param meUser 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TMeUser extends MeUser>(meUser: PartialDeep<MeUser>,  accessToken?: string ): Promise<RequiredDeep<TMeUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/me`, { data: meUser, params: { accessToken, impersonating } }  );
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
    public async ListAddresses<TBuyerAddress extends BuyerAddress>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TBuyerAddress>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TBuyerAddress>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/addresses`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param buyerAddress Required fields: Street1, City, State, Zip, Country
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async CreateAddress<TBuyerAddress extends BuyerAddress>(buyerAddress: BuyerAddress, accessToken?: string ): Promise<RequiredDeep<TBuyerAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/addresses`, { data: buyerAddress, params: { accessToken, impersonating } }  );
    }

   /**
    * @param addressID ID of the address.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetAddress<TBuyerAddress extends BuyerAddress>(addressID: string,  accessToken?: string ): Promise<RequiredDeep<TBuyerAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/addresses/${addressID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param addressID ID of the address.
    * @param buyerAddress Required fields: Street1, City, State, Zip, Country
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAddress<TBuyerAddress extends BuyerAddress>(addressID: string, buyerAddress: BuyerAddress, accessToken?: string ): Promise<RequiredDeep<TBuyerAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/addresses/${addressID}`, { data: buyerAddress, params: { accessToken, impersonating } }  );
    }

   /**
    * @param addressID ID of the address.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAddress(addressID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/me/addresses/${addressID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param addressID ID of the address.
    * @param buyerAddress 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PatchAddress(addressID: string, buyerAddress: BuyerAddress, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/me/addresses/${addressID}`, { data: buyerAddress, params: { accessToken, impersonating } }  );
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
    public async ListCatalogs<TCatalog extends Catalog>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TCatalog>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TCatalog>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/catalogs`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetCatalog<TCatalog extends Catalog>(catalogID: string,  accessToken?: string ): Promise<RequiredDeep<TCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/catalogs/${catalogID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param options.depth Indicates how deep down the hierarchy to return results. Valid values are a number of 1 or greater, or 'all'. Relative to ParentID if specified. Default is 1.
    * @param options.catalogID ID of the catalog.
    * @param options.productID ID of the product.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListCategories<TCategory extends Category>( options: { depth?: string, catalogID?: string, productID?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TCategory>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TCategory>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/categories`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param categoryID ID of the category.
    * @param options.catalogID ID of the catalog.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetCategory<TCategory extends Category>(categoryID: string,  options: { catalogID?: string } = {}, accessToken?: string ): Promise<RequiredDeep<TCategory>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/categories/${categoryID}`, { params: { ...options, accessToken, impersonating } } );
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
    public async ListCostCenters<TCostCenter extends CostCenter>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TCostCenter>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TCostCenter>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/costcenters`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
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
    public async ListCreditCards<TBuyerCreditCard extends BuyerCreditCard>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TBuyerCreditCard>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TBuyerCreditCard>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/creditcards`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param buyerCreditCard 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async CreateCreditCard<TBuyerCreditCard extends BuyerCreditCard>(buyerCreditCard: BuyerCreditCard, accessToken?: string ): Promise<RequiredDeep<TBuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/creditcards`, { data: buyerCreditCard, params: { accessToken, impersonating } }  );
    }

   /**
    * @param creditcardID ID of the creditcard.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetCreditCard<TBuyerCreditCard extends BuyerCreditCard>(creditcardID: string,  accessToken?: string ): Promise<RequiredDeep<TBuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/creditcards/${creditcardID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param creditcardID ID of the creditcard.
    * @param buyerCreditCard 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveCreditCard<TBuyerCreditCard extends BuyerCreditCard>(creditcardID: string, buyerCreditCard: BuyerCreditCard, accessToken?: string ): Promise<RequiredDeep<TBuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/creditcards/${creditcardID}`, { data: buyerCreditCard, params: { accessToken, impersonating } }  );
    }

   /**
    * @param creditcardID ID of the creditcard.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteCreditCard(creditcardID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/me/creditcards/${creditcardID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param creditcardID ID of the creditcard.
    * @param buyerCreditCard 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PatchCreditCard(creditcardID: string, buyerCreditCard: BuyerCreditCard, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/me/creditcards/${creditcardID}`, { data: buyerCreditCard, params: { accessToken, impersonating } }  );
    }

   /**
    * @param options.from Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param options.to Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListOrders<TOrder extends Order>( options: { from?: string, to?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TOrder>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TOrder>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/orders`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param options.anonUserToken Anon user token of the me.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async TransferAnonUserOrder( options: { anonUserToken?: string } = {}, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/orders`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param options.from Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param options.to Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListApprovableOrders<TOrder extends Order>( options: { from?: string, to?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TOrder>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TOrder>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/orders/approvable`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param tokenPasswordReset Required fields: NewPassword
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ResetPasswordByToken(tokenPasswordReset: TokenPasswordReset, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/password`, { data: tokenPasswordReset, params: { accessToken, impersonating } }  );
    }

   /**
    * @param options.catalogID ID of the catalog.
    * @param options.categoryID ID of the category.
    * @param options.depth Indicates how deep down the category hierarchy to return results. Valid values are a number of 1 or greater, or 'all'. Relative to CategoryID if specified, otherwise top level of the Catalog. Default is 'all'.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListProducts<TBuyerProduct extends BuyerProduct>( options: { catalogID?: string, categoryID?: string, depth?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TBuyerProduct>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPageFacet<TBuyerProduct>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetProduct<TBuyerProduct extends BuyerProduct>(productID: string,  accessToken?: string ): Promise<RequiredDeep<TBuyerProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products/${productID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param options.catalogID ID of the catalog.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListSpecs<TSpec extends Spec>(productID: string,  options: { catalogID?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TSpec>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TSpec>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products/${productID}/specs`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param specID ID of the spec.
    * @param options.catalogID ID of the catalog.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetSpec<TSpec extends Spec>(productID: string, specID: string,  options: { catalogID?: string } = {}, accessToken?: string ): Promise<RequiredDeep<TSpec>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products/${productID}/specs/${specID}`, { params: { ...options, accessToken, impersonating } } );
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
    public async ListPromotions<TPromotion extends Promotion>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TPromotion>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TPromotion>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/promotions`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param promotionID ID of the promotion.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetPromotion<TPromotion extends Promotion>(promotionID: string,  accessToken?: string ): Promise<RequiredDeep<TPromotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/promotions/${promotionID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param options.anonUserToken Anon user token of the user.
    * @param meUser Required fields: Username, FirstName, LastName, Email, Active
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Register<TAccessTokenBasic extends AccessTokenBasic>(meUser: MeUser, options: { anonUserToken?: string } = {}, accessToken?: string ): Promise<RequiredDeep<TAccessTokenBasic>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/register`, { params: { ...options, accessToken, impersonating } }, { data: meUser, params: { accessToken, impersonating } }  );
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
    public async ListShipments<TShipment extends Shipment>( options: { orderID?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TShipment>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TShipment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/shipments`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetShipment<TShipment extends Shipment>(shipmentID: string,  accessToken?: string ): Promise<RequiredDeep<TShipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/shipments/${shipmentID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param options.orderID ID of the order.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListShipmentItems<TShipmentItem extends ShipmentItem>(shipmentID: string,  options: { orderID?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TShipmentItem>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TShipmentItem>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/shipments/${shipmentID}/items`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
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
    public async ListSpendingAccounts<TSpendingAccount extends SpendingAccount>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TSpendingAccount>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TSpendingAccount>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/spendingAccounts`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param spendingAccountID ID of the spending account.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetSpendingAccount<TSpendingAccount extends SpendingAccount>(spendingAccountID: string,  accessToken?: string ): Promise<RequiredDeep<TSpendingAccount>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/spendingaccounts/${spendingAccountID}`, { params: { accessToken, impersonating } } );
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
    public async ListUserGroups<TUserGroup extends UserGroup>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TUserGroup>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TUserGroup>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/usergroups`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Me.As().List() // lists Me using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Me();