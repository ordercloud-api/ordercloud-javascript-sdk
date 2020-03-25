import { MeUser } from '../models/MeUser';
import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
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
    * Get the Current Authenticated User 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TMeUser extends MeUser>( requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TMeUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Update the Currently Authenticated User If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/save|api docs} for more info 
    * 
    * @param meUser Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TMeUser extends MeUser>(meUser: MeUser, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TMeUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me`, meUser, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Patch the Currently Authenticated User. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/patch|api docs} for more info 
    * 
    * @param meUser 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TMeUser extends MeUser>(meUser: PartialDeep<MeUser>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TMeUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/me`, meUser, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of addresses visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-addresses|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListAddresses<TBuyerAddress extends BuyerAddress>( listOptions: { search?: string, searchOn?: Searchable<'Me.ListAddresses'>, sortBy?: Sortable<'Me.ListAddresses'>, page?: number, pageSize?: number, filters?: Filters<Required<TBuyerAddress>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TBuyerAddress>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/addresses`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new address. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/create-address|api docs} for more info 
    * 
    * @param buyerAddress Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async CreateAddress<TBuyerAddress extends BuyerAddress>(buyerAddress: BuyerAddress, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/addresses`, buyerAddress, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single address. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-address|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetAddress<TBuyerAddress extends BuyerAddress>(addressID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/addresses/${addressID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an address. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/save-address|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param buyerAddress Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SaveAddress<TBuyerAddress extends BuyerAddress>(addressID: string, buyerAddress: BuyerAddress, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/addresses/${addressID}`, buyerAddress, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an address. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/delete-address|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteAddress(addressID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/me/addresses/${addressID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an address. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/patch-address|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param buyerAddress 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async PatchAddress(addressID: string, buyerAddress: BuyerAddress, requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/me/addresses/${addressID}`, buyerAddress, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of catalogs visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-catalogs|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListCatalogs<TCatalog extends Catalog>( listOptions: { search?: string, searchOn?: Searchable<'Me.ListCatalogs'>, sortBy?: Sortable<'Me.ListCatalogs'>, page?: number, pageSize?: number, filters?: Filters<Required<TCatalog>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCatalog>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/catalogs`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single catalog. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-catalog|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetCatalog<TCatalog extends Catalog>(catalogID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/catalogs/${catalogID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of categories visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-categories|api docs} for more info 
    * 
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
    public async ListCategories<TCategory extends Category>( listOptions: { depth?: string, catalogID?: string, productID?: string, search?: string, searchOn?: Searchable<'Me.ListCategories'>, sortBy?: Sortable<'Me.ListCategories'>, page?: number, pageSize?: number, filters?: Filters<Required<TCategory>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCategory>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/categories`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single category. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-category|api docs} for more info 
    * 
    * @param categoryID ID of the category.
    * @param listOptions.catalogID ID of the catalog.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetCategory<TCategory extends Category>(categoryID: string,  listOptions: { catalogID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TCategory>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/categories/${categoryID}`, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of cost centers visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-cost-centers|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListCostCenters<TCostCenter extends CostCenter>( listOptions: { search?: string, searchOn?: Searchable<'Me.ListCostCenters'>, sortBy?: Sortable<'Me.ListCostCenters'>, page?: number, pageSize?: number, filters?: Filters<Required<TCostCenter>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCostCenter>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/costcenters`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of credit cards visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-credit-cards|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListCreditCards<TBuyerCreditCard extends BuyerCreditCard>( listOptions: { search?: string, searchOn?: Searchable<'Me.ListCreditCards'>, sortBy?: Sortable<'Me.ListCreditCards'>, page?: number, pageSize?: number, filters?: Filters<Required<TBuyerCreditCard>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TBuyerCreditCard>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/creditcards`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new credit card. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/create-credit-card|api docs} for more info 
    * 
    * @param buyerCreditCard 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async CreateCreditCard<TBuyerCreditCard extends BuyerCreditCard>(buyerCreditCard: BuyerCreditCard, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/creditcards`, buyerCreditCard, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single credit card. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-credit-card|api docs} for more info 
    * 
    * @param creditcardID ID of the creditcard.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetCreditCard<TBuyerCreditCard extends BuyerCreditCard>(creditcardID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/creditcards/${creditcardID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a credit card. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/save-credit-card|api docs} for more info 
    * 
    * @param creditcardID ID of the creditcard.
    * @param buyerCreditCard 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SaveCreditCard<TBuyerCreditCard extends BuyerCreditCard>(creditcardID: string, buyerCreditCard: BuyerCreditCard, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/creditcards/${creditcardID}`, buyerCreditCard, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a credit card. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/delete-credit-card|api docs} for more info 
    * 
    * @param creditcardID ID of the creditcard.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async DeleteCreditCard(creditcardID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/me/creditcards/${creditcardID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a credit card. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/patch-credit-card|api docs} for more info 
    * 
    * @param creditcardID ID of the creditcard.
    * @param buyerCreditCard 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async PatchCreditCard(creditcardID: string, buyerCreditCard: BuyerCreditCard, requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/me/creditcards/${creditcardID}`, buyerCreditCard, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of orders visible to this user. List orders created by this user.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-orders|api docs} for more info 
    * 
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
    public async ListOrders<TOrder extends Order>( listOptions: { from?: string, to?: string, search?: string, searchOn?: Searchable<'Me.ListOrders'>, sortBy?: Sortable<'Me.ListOrders'>, page?: number, pageSize?: number, filters?: Filters<Required<TOrder>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TOrder>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/orders`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Transfer an anon user order. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/transfer-anon-user-order|api docs} for more info 
    * 
    * @param listOptions.anonUserToken Anon user token of the me.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async TransferAnonUserOrder( listOptions: { anonUserToken?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/orders`, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of orders that this user can approve. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-approvable-orders|api docs} for more info 
    * 
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
    public async ListApprovableOrders<TOrder extends Order>( listOptions: { from?: string, to?: string, search?: string, searchOn?: Searchable<'Me.ListApprovableOrders'>, sortBy?: Sortable<'Me.ListApprovableOrders'>, page?: number, pageSize?: number, filters?: Filters<Required<TOrder>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TOrder>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/orders/approvable`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Reset a password by token. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/reset-password-by-token|api docs} for more info 
    * 
    * @param tokenPasswordReset Required fields: NewPassword
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ResetPasswordByToken(tokenPasswordReset: TokenPasswordReset, requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/password`, tokenPasswordReset, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of products visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-products|api docs} for more info 
    * 
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
    public async ListProducts<TBuyerProduct extends BuyerProduct>( listOptions: { catalogID?: string, categoryID?: string, depth?: string, search?: string, searchOn?: Searchable<'Me.ListProducts'>, sortBy?: Sortable<'Me.ListProducts'>, page?: number, pageSize?: number, filters?: Filters<Required<TBuyerProduct>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPageWithFacets<TBuyerProduct>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single product. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-product|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetProduct<TBuyerProduct extends BuyerProduct>(productID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products/${productID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of specs visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-specs|api docs} for more info 
    * 
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
    public async ListSpecs<TSpec extends Spec>(productID: string,  listOptions: { catalogID?: string, search?: string, searchOn?: Searchable<'Me.ListSpecs'>, sortBy?: Sortable<'Me.ListSpecs'>, page?: number, pageSize?: number, filters?: Filters<Required<TSpec>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpec>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products/${productID}/specs`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single spec. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-spec|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param specID ID of the spec.
    * @param listOptions.catalogID ID of the catalog.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetSpec<TSpec extends Spec>(productID: string, specID: string,  listOptions: { catalogID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpec>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products/${productID}/specs/${specID}`, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of promotions visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-promotions|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListPromotions<TPromotion extends Promotion>( listOptions: { search?: string, searchOn?: Searchable<'Me.ListPromotions'>, sortBy?: Sortable<'Me.ListPromotions'>, page?: number, pageSize?: number, filters?: Filters<Required<TPromotion>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TPromotion>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/promotions`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single promotion. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-promotion|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetPromotion<TPromotion extends Promotion>(promotionID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPromotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/promotions/${promotionID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Register a register. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/register|api docs} for more info 
    * 
    * @param listOptions.anonUserToken Anon user token of the user.
    * @param meUser Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Register<TAccessTokenBasic extends AccessTokenBasic>(meUser: MeUser, listOptions: { anonUserToken?: string } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAccessTokenBasic>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/register`, meUser, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of shipments visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-shipments|api docs} for more info 
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
    public async ListShipments<TShipment extends Shipment>( listOptions: { orderID?: string, search?: string, searchOn?: Searchable<'Me.ListShipments'>, sortBy?: Sortable<'Me.ListShipments'>, page?: number, pageSize?: number, filters?: Filters<Required<TShipment>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TShipment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/shipments`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single shipment. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-shipment|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetShipment<TShipment extends Shipment>(shipmentID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/shipments/${shipmentID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of shipment items visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-shipment-items|api docs} for more info 
    * 
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
    public async ListShipmentItems<TShipmentItem extends ShipmentItem>(shipmentID: string,  listOptions: { orderID?: string, search?: string, searchOn?: Searchable<'Me.ListShipmentItems'>, sortBy?: Sortable<'Me.ListShipmentItems'>, page?: number, pageSize?: number, filters?: Filters<Required<TShipmentItem>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TShipmentItem>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/shipments/${shipmentID}/items`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of spending accounts visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-spending-accounts|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListSpendingAccounts<TSpendingAccount extends SpendingAccount>( listOptions: { search?: string, searchOn?: Searchable<'Me.ListSpendingAccounts'>, sortBy?: Sortable<'Me.ListSpendingAccounts'>, page?: number, pageSize?: number, filters?: Filters<Required<TSpendingAccount>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpendingAccount>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/spendingAccounts`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single spending account. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-spending-account|api docs} for more info 
    * 
    * @param spendingAccountID ID of the spending account.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async GetSpendingAccount<TSpendingAccount extends SpendingAccount>(spendingAccountID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpendingAccount>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/spendingaccounts/${spendingAccountID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of user groups visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-user-groups|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ListUserGroups<TUserGroup extends UserGroup>( listOptions: { search?: string, searchOn?: Searchable<'Me.ListUserGroups'>, sortBy?: Sortable<'Me.ListUserGroups'>, page?: number, pageSize?: number, filters?: Filters<Required<TUserGroup>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TUserGroup>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/usergroups`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
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