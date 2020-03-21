import { MeUser } from '../models/MeUser';
import { ListPage } from '../models/ListPage';
import { BuyerAddress } from '../models/BuyerAddress';
import { Catalog } from '../models/Catalog';
import { Category } from '../models/Category';
import { CostCenter } from '../models/CostCenter';
import { BuyerCreditCard } from '../models/BuyerCreditCard';
import { Order } from '../models/Order';
import { TokenPasswordReset } from '../models/TokenPasswordReset';
import { ListPageWithFacets } from '../models/ListPageWithFacets';
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
import { RequestOptions } from '../models/RequestOptions';
import httpClient from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Me {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.Get = this.Get.bind(this);
        this.Save = this.Save.bind(this);
        this.Patch = this.Patch.bind(this);
        this.ListAddresses = this.ListAddresses.bind(this);
        this.CreateAddress = this.CreateAddress.bind(this);
        this.GetAddress = this.GetAddress.bind(this);
        this.SaveAddress = this.SaveAddress.bind(this);
        this.DeleteAddress = this.DeleteAddress.bind(this);
        this.PatchAddress = this.PatchAddress.bind(this);
        this.ListCatalogs = this.ListCatalogs.bind(this);
        this.GetCatalog = this.GetCatalog.bind(this);
        this.ListCategories = this.ListCategories.bind(this);
        this.GetCategory = this.GetCategory.bind(this);
        this.ListCostCenters = this.ListCostCenters.bind(this);
        this.ListCreditCards = this.ListCreditCards.bind(this);
        this.CreateCreditCard = this.CreateCreditCard.bind(this);
        this.GetCreditCard = this.GetCreditCard.bind(this);
        this.SaveCreditCard = this.SaveCreditCard.bind(this);
        this.DeleteCreditCard = this.DeleteCreditCard.bind(this);
        this.PatchCreditCard = this.PatchCreditCard.bind(this);
        this.ListOrders = this.ListOrders.bind(this);
        this.TransferAnonUserOrder = this.TransferAnonUserOrder.bind(this);
        this.ListApprovableOrders = this.ListApprovableOrders.bind(this);
        this.ResetPasswordByToken = this.ResetPasswordByToken.bind(this);
        this.ListProducts = this.ListProducts.bind(this);
        this.GetProduct = this.GetProduct.bind(this);
        this.ListSpecs = this.ListSpecs.bind(this);
        this.GetSpec = this.GetSpec.bind(this);
        this.ListPromotions = this.ListPromotions.bind(this);
        this.GetPromotion = this.GetPromotion.bind(this);
        this.Register = this.Register.bind(this);
        this.ListShipments = this.ListShipments.bind(this);
        this.GetShipment = this.GetShipment.bind(this);
        this.ListShipmentItems = this.ListShipmentItems.bind(this);
        this.ListSpendingAccounts = this.ListSpendingAccounts.bind(this);
        this.GetSpendingAccount = this.GetSpendingAccount.bind(this);
        this.ListUserGroups = this.ListUserGroups.bind(this);
    }

   /**
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TMeUser extends MeUser>( requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TMeUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param meUser Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TMeUser extends MeUser>(meUser: MeUser, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TMeUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me`, meUser, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param meUser 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TMeUser extends MeUser>(meUser: PartialDeep<MeUser>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TMeUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/me`, meUser, { params: {  ...requestOptions, impersonating } } )
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
    public async ListAddresses<TBuyerAddress extends BuyerAddress>( options: { search?: string, searchOn?: ('ID' | 'AddressName' | 'CompanyName' | 'City' | 'Street1' | 'Street2' | 'LastName' | 'FirstName' | 'State' | 'Zip')[], sortBy?: ('AddressName' | 'ID' | 'DateCreated' | 'CompanyName' | 'FirstName' | 'LastName' | 'Street1' | 'Street2' | 'City' | 'State' | 'Zip' | 'Country' | 'Phone' | '!AddressName' | '!ID' | '!DateCreated' | '!CompanyName' | '!FirstName' | '!LastName' | '!Street1' | '!Street2' | '!City' | '!State' | '!Zip' | '!Country' | '!Phone')[], page?: number, pageSize?: number, filters?: Filters<Required<TBuyerAddress>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TBuyerAddress>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/addresses`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param buyerAddress Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async CreateAddress<TBuyerAddress extends BuyerAddress>(buyerAddress: BuyerAddress, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/addresses`, buyerAddress, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetAddress<TBuyerAddress extends BuyerAddress>(addressID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/addresses/${addressID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param addressID ID of the address.
    * @param buyerAddress Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SaveAddress<TBuyerAddress extends BuyerAddress>(addressID: string, buyerAddress: BuyerAddress, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/addresses/${addressID}`, buyerAddress, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteAddress(addressID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/me/addresses/${addressID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param addressID ID of the address.
    * @param buyerAddress 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async PatchAddress(addressID: string, buyerAddress: BuyerAddress, requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/me/addresses/${addressID}`, buyerAddress, { params: {  ...requestOptions, impersonating } } )
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
    public async ListCatalogs<TCatalog extends Catalog>( options: { search?: string, searchOn?: ('ID' | 'Name' | 'Description')[], sortBy?: ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[], page?: number, pageSize?: number, filters?: Filters<Required<TCatalog>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCatalog>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/catalogs`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param catalogID ID of the catalog.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetCatalog<TCatalog extends Catalog>(catalogID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/catalogs/${catalogID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param listOptions.depth Indicates how deep down the hierarchy to return results. Valid values are a number of 1 or greater, or 'all'. Relative to ParentID if specified. Default is 1.
    * @param listOptions.catalogID ID of the catalog.
    * @param listOptions.productID ID of the product.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListCategories<TCategory extends Category>( options: { depth?: string, catalogID?: string, productID?: string, search?: string, searchOn?: ('ID' | 'Name' | 'Description')[], sortBy?: ('ID' | 'Name' | '!ID' | '!Name')[], page?: number, pageSize?: number, filters?: Filters<Required<TCategory>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCategory>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/categories`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param categoryID ID of the category.
    * @param listOptions.catalogID ID of the catalog.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetCategory<TCategory extends Category>(categoryID: string,  options: { catalogID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TCategory>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/categories/${categoryID}`, { params: { ...options,  ...requestOptions, impersonating } } )
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
    public async ListCostCenters<TCostCenter extends CostCenter>( options: { search?: string, searchOn?: ('ID' | 'Name' | 'Description')[], sortBy?: ('Name' | 'ID' | '!Name' | '!ID')[], page?: number, pageSize?: number, filters?: Filters<Required<TCostCenter>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCostCenter>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/costcenters`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
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
    public async ListCreditCards<TBuyerCreditCard extends BuyerCreditCard>( options: { search?: string, searchOn?: ('ID' | 'CardholderName' | 'CardType' | 'ExpirationDate')[], sortBy?: ('ID' | 'CardholderName' | 'CardType' | 'ExpirationDate' | 'DateCreated' | '!ID' | '!CardholderName' | '!CardType' | '!ExpirationDate' | '!DateCreated')[], page?: number, pageSize?: number, filters?: Filters<Required<TBuyerCreditCard>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TBuyerCreditCard>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/creditcards`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param buyerCreditCard 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async CreateCreditCard<TBuyerCreditCard extends BuyerCreditCard>(buyerCreditCard: BuyerCreditCard, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/creditcards`, buyerCreditCard, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param creditcardID ID of the creditcard.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetCreditCard<TBuyerCreditCard extends BuyerCreditCard>(creditcardID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/creditcards/${creditcardID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param creditcardID ID of the creditcard.
    * @param buyerCreditCard 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SaveCreditCard<TBuyerCreditCard extends BuyerCreditCard>(creditcardID: string, buyerCreditCard: BuyerCreditCard, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/creditcards/${creditcardID}`, buyerCreditCard, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param creditcardID ID of the creditcard.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteCreditCard(creditcardID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/me/creditcards/${creditcardID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param creditcardID ID of the creditcard.
    * @param buyerCreditCard 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async PatchCreditCard(creditcardID: string, buyerCreditCard: BuyerCreditCard, requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/me/creditcards/${creditcardID}`, buyerCreditCard, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param listOptions.from Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param listOptions.to Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListOrders<TOrder extends Order>( options: { from?: string, to?: string, search?: string, searchOn?: ('ID' | 'FromCompanyID' | 'ToCompanyID' | 'Comments')[], sortBy?: ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromUser' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromUser' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[], page?: number, pageSize?: number, filters?: Filters<Required<TOrder>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TOrder>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/orders`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param listOptions.anonUserToken Anon user token of the me.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async TransferAnonUserOrder( options: { anonUserToken?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/orders`, { params: { ...options,  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param listOptions.from Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param listOptions.to Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListApprovableOrders<TOrder extends Order>( options: { from?: string, to?: string, search?: string, searchOn?: ('ID' | 'FromCompanyID' | 'ToCompanyID' | 'Comments')[], sortBy?: ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromUser' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromUser' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[], page?: number, pageSize?: number, filters?: Filters<Required<TOrder>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TOrder>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/orders/approvable`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param tokenPasswordReset Required fields: NewPassword
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ResetPasswordByToken(tokenPasswordReset: TokenPasswordReset, requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/password`, tokenPasswordReset, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param listOptions.catalogID ID of the catalog.
    * @param listOptions.categoryID ID of the category.
    * @param listOptions.depth Indicates how deep down the category hierarchy to return results. Valid values are a number of 1 or greater, or 'all'. Relative to CategoryID if specified, otherwise top level of the Catalog. Default is 'all'.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListProducts<TBuyerProduct extends BuyerProduct>( options: { catalogID?: string, categoryID?: string, depth?: string, search?: string, searchOn?: ('ID' | 'Name' | 'Description' | string)[], sortBy?: ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID' | string)[], page?: number, pageSize?: number, filters?: Filters<Required<TBuyerProduct>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPageWithFacets<TBuyerProduct>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetProduct<TBuyerProduct extends BuyerProduct>(productID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products/${productID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param productID ID of the product.
    * @param listOptions.catalogID ID of the catalog.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListSpecs<TSpec extends Spec>(productID: string,  options: { catalogID?: string, search?: string, searchOn?: ('ID' | 'Name' | 'Description')[], sortBy?: ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[], page?: number, pageSize?: number, filters?: Filters<Required<TSpec>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpec>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products/${productID}/specs`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param productID ID of the product.
    * @param specID ID of the spec.
    * @param listOptions.catalogID ID of the catalog.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetSpec<TSpec extends Spec>(productID: string, specID: string,  options: { catalogID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpec>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products/${productID}/specs/${specID}`, { params: { ...options,  ...requestOptions, impersonating } } )
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
    public async ListPromotions<TPromotion extends Promotion>( options: { search?: string, searchOn?: ('ID' | 'Name' | 'Code' | 'Description' | 'FinePrint' | 'EligibleExpression' | 'ValueExpression')[], sortBy?: ('Name' | 'ID' | 'Code' | 'StartDate' | 'ExpirationDate' | 'EligibleExpression' | 'ValueExpression' | 'CanCombine' | '!Name' | '!ID' | '!Code' | '!StartDate' | '!ExpirationDate' | '!EligibleExpression' | '!ValueExpression' | '!CanCombine')[], page?: number, pageSize?: number, filters?: Filters<Required<TPromotion>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TPromotion>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/promotions`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param promotionID ID of the promotion.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetPromotion<TPromotion extends Promotion>(promotionID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPromotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/promotions/${promotionID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param listOptions.anonUserToken Anon user token of the user.
    * @param meUser Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Register<TAccessTokenBasic extends AccessTokenBasic>(meUser: MeUser, options: { anonUserToken?: string } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAccessTokenBasic>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/register`, meUser, { params: { ...options,  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
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
    public async ListShipments<TShipment extends Shipment>( options: { orderID?: string, search?: string, searchOn?: ('ID' | 'BuyerID' | 'Shipper' | 'DateShipped' | 'DateDelivered' | 'TrackingNumber')[], sortBy?: ('DateShipped' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[], page?: number, pageSize?: number, filters?: Filters<Required<TShipment>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TShipment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/shipments`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
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
    public async GetShipment<TShipment extends Shipment>(shipmentID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/shipments/${shipmentID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param shipmentID ID of the shipment.
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
    public async ListShipmentItems<TShipmentItem extends ShipmentItem>(shipmentID: string,  options: { orderID?: string, search?: string, searchOn?: ('ID' | 'BuyerID' | 'Shipper' | 'DateShipped' | 'DateDelivered' | 'TrackingNumber')[], sortBy?: ('DateShipped' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[], page?: number, pageSize?: number, filters?: Filters<Required<TShipmentItem>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TShipmentItem>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/shipments/${shipmentID}/items`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
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
    public async ListSpendingAccounts<TSpendingAccount extends SpendingAccount>( options: { search?: string, searchOn?: ('ID' | 'Name' | 'RedemptionCode')[], sortBy?: ('Name' | 'ID' | '!Name' | '!ID')[], page?: number, pageSize?: number, filters?: Filters<Required<TSpendingAccount>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpendingAccount>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/spendingAccounts`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param spendingAccountID ID of the spending account.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetSpendingAccount<TSpendingAccount extends SpendingAccount>(spendingAccountID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpendingAccount>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/spendingaccounts/${spendingAccountID}`, { params: {  ...requestOptions, impersonating } } )
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
    public async ListUserGroups<TUserGroup extends UserGroup>( options: { search?: string, searchOn?: ('ID' | 'Name' | 'Description')[], sortBy?: ('Name' | 'ID' | '!Name' | '!ID')[], page?: number, pageSize?: number, filters?: Filters<Required<TUserGroup>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TUserGroup>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/usergroups`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
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
     * Me.As().List() // lists Me using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Me();