import { MeUser } from '../models/MeUser';
import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { BuyerAddress } from '../models/BuyerAddress';
import { Catalog } from '../models/Catalog';
import { Category } from '../models/Category';
import { CostCenter } from '../models/CostCenter';
import { BuyerCreditCard } from '../models/BuyerCreditCard';
import { Order } from '../models/Order';
import { SearchType } from '../models/SearchType';
import { TokenPasswordReset } from '../models/TokenPasswordReset';
import { ProductCollection } from '../models/ProductCollection';
import { ProductCollectionInvitation } from '../models/ProductCollectionInvitation';
import { ListPageWithFacets } from '../models/ListPageWithFacets';
import { BuyerProduct } from '../models/BuyerProduct';
import { InventoryRecord } from '../models/InventoryRecord';
import { ProductSeller } from '../models/ProductSeller';
import { Spec } from '../models/Spec';
import { Variant } from '../models/Variant';
import { Promotion } from '../models/Promotion';
import { AccessTokenBasic } from '../models/AccessTokenBasic';
import { BuyerSupplier } from '../models/BuyerSupplier';
import { Shipment } from '../models/Shipment';
import { ShipmentItem } from '../models/ShipmentItem';
import { SpendingAccount } from '../models/SpendingAccount';
import { Subscription } from '../models/Subscription';
import { LineItem } from '../models/LineItem';
import { BundleItems } from '../models/BundleItems';
import { UserGroup } from '../models/UserGroup';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
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
        this.ListProductCollections = this.ListProductCollections.bind(this);
        this.CreateProductCollection = this.CreateProductCollection.bind(this);
        this.GetProductCollection = this.GetProductCollection.bind(this);
        this.SaveProductCollection = this.SaveProductCollection.bind(this);
        this.DeleteProductCollection = this.DeleteProductCollection.bind(this);
        this.PatchProductCollection = this.PatchProductCollection.bind(this);
        this.CreateProductCollectionEntry = this.CreateProductCollectionEntry.bind(this);
        this.DeleteProductCollectionEntry = this.DeleteProductCollectionEntry.bind(this);
        this.ListProductCollectionInvitations = this.ListProductCollectionInvitations.bind(this);
        this.CreateProductCollectionInvitation = this.CreateProductCollectionInvitation.bind(this);
        this.GetProductCollectionInvitation = this.GetProductCollectionInvitation.bind(this);
        this.DeleteProductCollectionInvitation = this.DeleteProductCollectionInvitation.bind(this);
        this.PatchProductCollectionInvitation = this.PatchProductCollectionInvitation.bind(this);
        this.AcceptProductCollectionInvitation = this.AcceptProductCollectionInvitation.bind(this);
        this.DeclineProductCollectionInvitation = this.DeclineProductCollectionInvitation.bind(this);
        this.ListProductCollectionEntries = this.ListProductCollectionEntries.bind(this);
        this.ListProducts = this.ListProducts.bind(this);
        this.GetProduct = this.GetProduct.bind(this);
        this.ListProductInventoryRecords = this.ListProductInventoryRecords.bind(this);
        this.ListProductSellers = this.ListProductSellers.bind(this);
        this.ListSpecs = this.ListSpecs.bind(this);
        this.GetSpec = this.GetSpec.bind(this);
        this.ListVariants = this.ListVariants.bind(this);
        this.GetVariant = this.GetVariant.bind(this);
        this.ListVariantInventoryRecords = this.ListVariantInventoryRecords.bind(this);
        this.ListPromotions = this.ListPromotions.bind(this);
        this.GetPromotion = this.GetPromotion.bind(this);
        this.Register = this.Register.bind(this);
        this.ListBuyerSellers = this.ListBuyerSellers.bind(this);
        this.ListShipments = this.ListShipments.bind(this);
        this.GetShipment = this.GetShipment.bind(this);
        this.ListShipmentItems = this.ListShipmentItems.bind(this);
        this.ListSpendingAccounts = this.ListSpendingAccounts.bind(this);
        this.GetSpendingAccount = this.GetSpendingAccount.bind(this);
        this.ListSubscriptions = this.ListSubscriptions.bind(this);
        this.CreateSubscription = this.CreateSubscription.bind(this);
        this.GetSubscription = this.GetSubscription.bind(this);
        this.SaveSubscription = this.SaveSubscription.bind(this);
        this.DeleteSubscription = this.DeleteSubscription.bind(this);
        this.PatchSubscription = this.PatchSubscription.bind(this);
        this.ListSubscriptionItems = this.ListSubscriptionItems.bind(this);
        this.CreateSubscriptionItem = this.CreateSubscriptionItem.bind(this);
        this.GetSubscriptionItem = this.GetSubscriptionItem.bind(this);
        this.SaveSubscriptionItem = this.SaveSubscriptionItem.bind(this);
        this.DeleteSubscriptionItem = this.DeleteSubscriptionItem.bind(this);
        this.PatchSubscriptionItem = this.PatchSubscriptionItem.bind(this);
        this.CreateSubscriptionBundleItem = this.CreateSubscriptionBundleItem.bind(this);
        this.DeleteSubscriptionBundleItem = this.DeleteSubscriptionBundleItem.bind(this);
        this.ListUserGroups = this.ListUserGroups.bind(this);
    }

   /**
    * Get the Current Authenticated User 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TMeUser extends MeUser>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TMeUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me`, { ...requestOptions, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TMeUser extends MeUser>(meUser: MeUser,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TMeUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/me`, { ...requestOptions, data: meUser, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TMeUser extends MeUser>(meUser: PartialDeep<MeUser>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TMeUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/me`, { ...requestOptions, data: meUser, impersonating,  } )
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
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListAddresses<TBuyerAddress extends BuyerAddress>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListAddresses'>, sortBy?: Sortable<'Me.ListAddresses'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TBuyerAddress>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/addresses`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new address. Only available to Buyer Users. Addresses created using this endpoint are considered private, and only accessible to the user who created them.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/create-address|api docs} for more info 
    * 
    * @param buyerAddress Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async CreateAddress<TBuyerAddress extends BuyerAddress>(buyerAddress: BuyerAddress,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/me/addresses`, { ...requestOptions, data: buyerAddress, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetAddress<TBuyerAddress extends BuyerAddress>(addressID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/addresses/${addressID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Update an address. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/save-address|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param buyerAddress Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveAddress<TBuyerAddress extends BuyerAddress>(addressID: string, buyerAddress: BuyerAddress,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/me/addresses/${addressID}`, { ...requestOptions, data: buyerAddress, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteAddress(addressID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/me/addresses/${addressID}`, { ...requestOptions, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchAddress(addressID: string, buyerAddress: PartialDeep<BuyerAddress>, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/me/addresses/${addressID}`, { ...requestOptions, data: buyerAddress, impersonating,  } )
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
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param listOptions.sellerID ID of the seller.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListCatalogs<TCatalog extends Catalog>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListCatalogs'>, sortBy?: Sortable<'Me.ListCatalogs'>, page?: number, pageSize?: number, filters?: Filters, sellerID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCatalog>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/catalogs`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetCatalog<TCatalog extends Catalog>(catalogID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TCatalog>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/catalogs/${catalogID}`, { ...requestOptions, impersonating,  } )
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
    * @param listOptions.catalogID The user’s default CatalogID will be used to return categories if you do not pass another CatalogID explicitly. Listing categories across multiple catalogs is not supported.
    * @param listOptions.productID ID of the product.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListCategories<TCategory extends Category>(listOptions: { depth?: string, catalogID?: string, productID?: string, search?: string, searchOn?: Searchable<'Me.ListCategories'>, sortBy?: Sortable<'Me.ListCategories'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCategory>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/categories`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetCategory<TCategory extends Category>(categoryID: string, listOptions: { catalogID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TCategory>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/categories/${categoryID}`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListCostCenters<TCostCenter extends CostCenter>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListCostCenters'>, sortBy?: Sortable<'Me.ListCostCenters'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TCostCenter>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/costcenters`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListCreditCards<TBuyerCreditCard extends BuyerCreditCard>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListCreditCards'>, sortBy?: Sortable<'Me.ListCreditCards'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TBuyerCreditCard>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/creditcards`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new credit card. Only available to Buyer Users. Credit Cards created using this endpoint are considered private, and only accessible to the user who created them.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/create-credit-card|api docs} for more info 
    * 
    * @param buyerCreditCard 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async CreateCreditCard<TBuyerCreditCard extends BuyerCreditCard>(buyerCreditCard: BuyerCreditCard,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerCreditCard>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/me/creditcards`, { ...requestOptions, data: buyerCreditCard, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetCreditCard<TBuyerCreditCard extends BuyerCreditCard>(creditcardID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerCreditCard>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/creditcards/${creditcardID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Update a credit card. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/save-credit-card|api docs} for more info 
    * 
    * @param creditcardID ID of the creditcard.
    * @param buyerCreditCard 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveCreditCard<TBuyerCreditCard extends BuyerCreditCard>(creditcardID: string, buyerCreditCard: BuyerCreditCard,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerCreditCard>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/me/creditcards/${creditcardID}`, { ...requestOptions, data: buyerCreditCard, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteCreditCard(creditcardID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/me/creditcards/${creditcardID}`, { ...requestOptions, impersonating,  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchCreditCard(creditcardID: string, buyerCreditCard: PartialDeep<BuyerCreditCard>, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/me/creditcards/${creditcardID}`, { ...requestOptions, data: buyerCreditCard, impersonating,  } )
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
    * @param listOptions.searchType Type of search to perform. Possible values: AnyTerm (default), AllTermsAnyField, AllTermsSameField, ExactPhrase, ExactPhrasePrefix.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListOrders<TOrder extends Order>(listOptions: { from?: string, to?: string, search?: string, searchOn?: Searchable<'Me.ListOrders'>, searchType?: SearchType, sortBy?: Sortable<'Me.ListOrders'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TOrder>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/orders`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Transfer an order. If a user begins an order as the anonymous shopper and later logs in, use this endpoint to transfer that order to them.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/transfer-anon-user-order|api docs} for more info 
    * 
    * @param listOptions.anonUserToken Anon user token of the me.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async TransferAnonUserOrder(listOptions: { anonUserToken?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/me/orders`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListApprovableOrders<TOrder extends Order>(listOptions: { from?: string, to?: string, search?: string, searchOn?: Searchable<'Me.ListApprovableOrders'>, sortBy?: Sortable<'Me.ListApprovableOrders'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TOrder>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/orders/approvable`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ResetPasswordByToken(tokenPasswordReset: TokenPasswordReset,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/me/password`, { ...requestOptions, data: tokenPasswordReset, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of product collections visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-product-collections|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListProductCollections<TProductCollection extends ProductCollection>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListProductCollections'>, sortBy?: Sortable<'Me.ListProductCollections'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TProductCollection>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/productcollections`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new product collection. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/create-product-collection|api docs} for more info 
    * 
    * @param productCollection Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async CreateProductCollection<TProductCollection extends ProductCollection>(productCollection: ProductCollection,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductCollection>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/me/productcollections`, { ...requestOptions, data: productCollection, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single product collection. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-product-collection|api docs} for more info 
    * 
    * @param productCollectionID ID of the product collection.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetProductCollection<TProductCollection extends ProductCollection>(productCollectionID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductCollection>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/productcollections/${productCollectionID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a product collection. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/save-product-collection|api docs} for more info 
    * 
    * @param productCollectionID ID of the product collection.
    * @param productCollection Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveProductCollection<TProductCollection extends ProductCollection>(productCollectionID: string, productCollection: ProductCollection,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductCollection>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/me/productcollections/${productCollectionID}`, { ...requestOptions, data: productCollection, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a product collection. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/delete-product-collection|api docs} for more info 
    * 
    * @param productCollectionID ID of the product collection.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteProductCollection(productCollectionID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/me/productcollections/${productCollectionID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a product collection. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/patch-product-collection|api docs} for more info 
    * 
    * @param productCollectionID ID of the product collection.
    * @param productCollection 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchProductCollection<TProductCollection extends ProductCollection>(productCollectionID: string, productCollection: PartialDeep<ProductCollection>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductCollection>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/me/productcollections/${productCollectionID}`, { ...requestOptions, data: productCollection, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new product collection entry. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/create-product-collection-entry|api docs} for more info 
    * 
    * @param productCollectionID ID of the product collection.
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async CreateProductCollectionEntry(productCollectionID: string, productID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/me/productcollections/${productCollectionID}/${productID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a product collection entry. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/delete-product-collection-entry|api docs} for more info 
    * 
    * @param productCollectionID ID of the product collection.
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteProductCollectionEntry(productCollectionID: string, productID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/me/productcollections/${productCollectionID}/${productID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of product collection invitations visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-product-collection-invitations|api docs} for more info 
    * 
    * @param productCollectionID ID of the product collection.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.searchType Type of search to perform. Possible values: AnyTerm (default), AllTermsAnyField, AllTermsSameField, ExactPhrase, ExactPhrasePrefix.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListProductCollectionInvitations<TProductCollectionInvitation extends ProductCollectionInvitation>(productCollectionID: string, listOptions: { search?: string, searchOn?: Searchable<'Me.ListProductCollectionInvitations'>, searchType?: SearchType, sortBy?: Sortable<'Me.ListProductCollectionInvitations'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TProductCollectionInvitation>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/productcollections/${productCollectionID}/invitations`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new product collection invitation. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/create-product-collection-invitation|api docs} for more info 
    * 
    * @param productCollectionID ID of the product collection.
    * @param productCollectionInvitation Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async CreateProductCollectionInvitation<TProductCollectionInvitation extends ProductCollectionInvitation>(productCollectionID: string, productCollectionInvitation: ProductCollectionInvitation,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductCollectionInvitation>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/me/productcollections/${productCollectionID}/invitations`, { ...requestOptions, data: productCollectionInvitation, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single product collection invitation. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-product-collection-invitation|api docs} for more info 
    * 
    * @param productCollectionID ID of the product collection.
    * @param invitationID ID of the invitation.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetProductCollectionInvitation<TProductCollectionInvitation extends ProductCollectionInvitation>(productCollectionID: string, invitationID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductCollectionInvitation>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/productcollections/${productCollectionID}/invitations/${invitationID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a product collection invitation. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/delete-product-collection-invitation|api docs} for more info 
    * 
    * @param productCollectionID ID of the product collection.
    * @param invitationID ID of the invitation.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteProductCollectionInvitation(productCollectionID: string, invitationID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/me/productcollections/${productCollectionID}/invitations/${invitationID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a product collection invitation. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/patch-product-collection-invitation|api docs} for more info 
    * 
    * @param productCollectionID ID of the product collection.
    * @param invitationID ID of the invitation.
    * @param productCollectionInvitation 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchProductCollectionInvitation<TProductCollectionInvitation extends ProductCollectionInvitation>(productCollectionID: string, invitationID: string, productCollectionInvitation: PartialDeep<ProductCollectionInvitation>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProductCollectionInvitation>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/me/productcollections/${productCollectionID}/invitations/${invitationID}`, { ...requestOptions, data: productCollectionInvitation, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Accept a product collection invitation. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/accept-product-collection-invitation|api docs} for more info 
    * 
    * @param productCollectionID ID of the product collection.
    * @param invitationID ID of the invitation.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async AcceptProductCollectionInvitation(productCollectionID: string, invitationID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/me/productcollections/${productCollectionID}/invitations/accept/${invitationID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Decline a product collection invitation. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/decline-product-collection-invitation|api docs} for more info 
    * 
    * @param productCollectionID ID of the product collection.
    * @param invitationID ID of the invitation.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeclineProductCollectionInvitation(productCollectionID: string, invitationID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/me/productcollections/${productCollectionID}/invitations/decline/${invitationID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of product collection entries visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-product-collection-entries|api docs} for more info 
    * 
    * @param productCollectionID ID of the product collection.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.searchType Type of search to perform. Possible values: AnyTerm (default), AllTermsAnyField, AllTermsSameField, ExactPhrase, ExactPhrasePrefix.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListProductCollectionEntries<TBuyerProduct extends BuyerProduct>(productCollectionID: string, listOptions: { search?: string, searchOn?: Searchable<'Me.ListProductCollectionEntries'>, searchType?: SearchType, sortBy?: Sortable<'Me.ListProductCollectionEntries'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPageWithFacets<TBuyerProduct>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/productcollections/${productCollectionID}/products`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param listOptions.searchType Type of search to perform. Possible values: AnyTerm (default), AllTermsAnyField, AllTermsSameField, ExactPhrase, ExactPhrasePrefix.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param listOptions.sellerID ID of the seller.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListProducts<TBuyerProduct extends BuyerProduct>(listOptions: { catalogID?: string, categoryID?: string, depth?: string, search?: string, searchOn?: Searchable<'Me.ListProducts'>, searchType?: SearchType, sortBy?: Sortable<'Me.ListProducts'>, page?: number, pageSize?: number, filters?: Filters, sellerID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPageWithFacets<TBuyerProduct>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/products`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param listOptions.sellerID ID of the seller.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetProduct<TBuyerProduct extends BuyerProduct>(productID: string, listOptions: { sellerID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerProduct>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/products/${productID}`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of product inventory records visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-product-inventory-records|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListProductInventoryRecords<TInventoryRecord extends InventoryRecord>(productID: string, listOptions: { search?: string, searchOn?: Searchable<'Me.ListProductInventoryRecords'>, sortBy?: Sortable<'Me.ListProductInventoryRecords'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TInventoryRecord>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/products/${productID}/inventoryrecords`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of product sellers visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-product-sellers|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListProductSellers<TProductSeller extends ProductSeller>(productID: string, listOptions: { search?: string, searchOn?: Searchable<'Me.ListProductSellers'>, sortBy?: Sortable<'Me.ListProductSellers'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TProductSeller>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/products/${productID}/sellers`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListSpecs<TSpec extends Spec>(productID: string, listOptions: { catalogID?: string, search?: string, searchOn?: Searchable<'Me.ListSpecs'>, sortBy?: Sortable<'Me.ListSpecs'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpec>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/products/${productID}/specs`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetSpec<TSpec extends Spec>(productID: string, specID: string, listOptions: { catalogID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpec>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/products/${productID}/specs/${specID}`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of variants visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-variants|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListVariants<TVariant extends Variant>(productID: string, listOptions: { search?: string, searchOn?: Searchable<'Me.ListVariants'>, sortBy?: Sortable<'Me.ListVariants'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TVariant>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/products/${productID}/variants`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single variant. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-variant|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetVariant<TVariant extends Variant>(productID: string, variantID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TVariant>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/products/${productID}/variants/${variantID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of variant inventory records visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-variant-inventory-records|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListVariantInventoryRecords<TInventoryRecord extends InventoryRecord>(productID: string, variantID: string, listOptions: { search?: string, searchOn?: Searchable<'Me.ListVariantInventoryRecords'>, sortBy?: Sortable<'Me.ListVariantInventoryRecords'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TInventoryRecord>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/products/${productID}/variants/${variantID}/inventoryrecords`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListPromotions<TPromotion extends Promotion>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListPromotions'>, sortBy?: Sortable<'Me.ListPromotions'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TPromotion>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/promotions`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetPromotion<TPromotion extends Promotion>(promotionID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPromotion>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/promotions/${promotionID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Register a User. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/register|api docs} for more info 
    * 
    * @param listOptions.anonUserToken Anon user token of the user.
    * @param meUser Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Register<TAccessTokenBasic extends AccessTokenBasic>(meUser: MeUser,listOptions: { anonUserToken?: string } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAccessTokenBasic>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/me/register`, { ...requestOptions, data: meUser, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of sellers this user can purchase from. Organizations you can place orders directly to.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-buyer-sellers|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListBuyerSellers<TBuyerSupplier extends BuyerSupplier>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListBuyerSellers'>, sortBy?: Sortable<'Me.ListBuyerSellers'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TBuyerSupplier>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/sellers`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListShipments<TShipment extends Shipment>(listOptions: { orderID?: string, search?: string, searchOn?: Searchable<'Me.ListShipments'>, sortBy?: Sortable<'Me.ListShipments'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TShipment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/shipments`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetShipment<TShipment extends Shipment>(shipmentID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/shipments/${shipmentID}`, { ...requestOptions, impersonating,  } )
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
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListShipmentItems<TShipmentItem extends ShipmentItem>(shipmentID: string, listOptions: { orderID?: string, search?: string, searchOn?: Searchable<'Me.ListShipmentItems'>, sortBy?: Sortable<'Me.ListShipmentItems'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TShipmentItem>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/shipments/${shipmentID}/items`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListSpendingAccounts<TSpendingAccount extends SpendingAccount>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListSpendingAccounts'>, sortBy?: Sortable<'Me.ListSpendingAccounts'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpendingAccount>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/spendingAccounts`, { ...requestOptions, impersonating, params: listOptions  } )
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
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetSpendingAccount<TSpendingAccount extends SpendingAccount>(spendingAccountID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSpendingAccount>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/spendingaccounts/${spendingAccountID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of subscriptions visible to this user. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-subscriptions|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListSubscriptions<TSubscription extends Subscription>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListSubscriptions'>, sortBy?: Sortable<'Me.ListSubscriptions'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSubscription>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/subscriptions`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new subscription. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/create-subscription|api docs} for more info 
    * 
    * @param subscription Required fields: Frequency, Interval, NextOrderDate
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async CreateSubscription<TSubscription extends Subscription>(subscription: Subscription,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSubscription>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/me/subscriptions`, { ...requestOptions, data: subscription, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single subscription. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-subscription|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetSubscription<TSubscription extends Subscription>(subscriptionID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSubscription>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/subscriptions/${subscriptionID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a subscription. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/save-subscription|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param subscription Required fields: Frequency, Interval, NextOrderDate
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveSubscription<TSubscription extends Subscription>(subscriptionID: string, subscription: Subscription,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSubscription>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/me/subscriptions/${subscriptionID}`, { ...requestOptions, data: subscription, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a subscription. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/delete-subscription|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteSubscription(subscriptionID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/me/subscriptions/${subscriptionID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a subscription. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/patch-subscription|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param subscription 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchSubscription<TSubscription extends Subscription>(subscriptionID: string, subscription: PartialDeep<Subscription>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSubscription>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/me/subscriptions/${subscriptionID}`, { ...requestOptions, data: subscription, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of subscription items visible to this user. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-subscription-items|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListSubscriptionItems<TLineItem extends LineItem>(subscriptionID: string, listOptions: { search?: string, searchOn?: Searchable<'Me.ListSubscriptionItems'>, sortBy?: Sortable<'Me.ListSubscriptionItems'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TLineItem>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/subscriptions/${subscriptionID}/items`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new subscription item. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/create-subscription-item|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param lineItem Required fields: ProductID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async CreateSubscriptionItem<TLineItem extends LineItem>(subscriptionID: string, lineItem: LineItem,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/me/subscriptions/${subscriptionID}/items`, { ...requestOptions, data: lineItem, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single subscription item. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-subscription-item|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param subscriptionItemID ID of the subscription item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetSubscriptionItem<TLineItem extends LineItem>(subscriptionID: string, subscriptionItemID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/subscriptions/${subscriptionID}/items/${subscriptionItemID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a subscription item. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/save-subscription-item|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param subscriptionItemID ID of the subscription item.
    * @param lineItem Required fields: ProductID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveSubscriptionItem<TLineItem extends LineItem>(subscriptionID: string, subscriptionItemID: string, lineItem: LineItem,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/me/subscriptions/${subscriptionID}/items/${subscriptionItemID}`, { ...requestOptions, data: lineItem, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a subscription item. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/delete-subscription-item|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param subscriptionItemID ID of the subscription item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteSubscriptionItem(subscriptionID: string, subscriptionItemID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/me/subscriptions/${subscriptionID}/items/${subscriptionItemID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a subscription item. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/patch-subscription-item|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param subscriptionItemID ID of the subscription item.
    * @param lineItem 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchSubscriptionItem<TLineItem extends LineItem>(subscriptionID: string, subscriptionItemID: string, lineItem: PartialDeep<LineItem>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/me/subscriptions/${subscriptionID}/items/${subscriptionItemID}`, { ...requestOptions, data: lineItem, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new subscription bundle item. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/create-subscription-bundle-item|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param bundleID ID of the bundle.
    * @param bundleItems 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async CreateSubscriptionBundleItem<TLineItem extends LineItem>(subscriptionID: string, bundleID: string, bundleItems: BundleItems,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/me/subscriptions/${subscriptionID}/items/bundles/${bundleID}`, { ...requestOptions, data: bundleItems, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a subscription bundle item. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/delete-subscription-bundle-item|api docs} for more info 
    * 
    * @param subscriptionID ID of the subscription.
    * @param bundleID ID of the bundle.
    * @param bundleItemID ID of the bundle item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteSubscriptionBundleItem(subscriptionID: string, bundleID: string, bundleItemID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/me/subscriptions/${subscriptionID}/items/bundles/${bundleID}/${bundleItemID}`, { ...requestOptions, impersonating,  } )
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
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListUserGroups<TUserGroup extends UserGroup>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListUserGroups'>, sortBy?: Sortable<'Me.ListUserGroups'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TUserGroup>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/me/usergroups`, { ...requestOptions, impersonating, params: listOptions  } )
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