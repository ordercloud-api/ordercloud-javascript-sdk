import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { XpIndex } from '../models/XpIndex';
import { XpThingType } from '../models/XpThingType';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class XpIndices {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.List = this.List.bind(this);
        this.Put = this.Put.bind(this);
        this.Delete = this.Delete.bind(this);
    }

   /**
    * Get a list of XP indices. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/xp-indices/list|api docs} for more info 
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
    public async List<TXpIndex extends XpIndex>(listOptions: { search?: string, searchOn?: Searchable<'XpIndices.List'>, sortBy?: Sortable<'XpIndices.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TXpIndex>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/xpindices`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or Update an XP index. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/xp-indices/put|api docs} for more info 
    * 
    * @param xpIndex 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Put(xpIndex: XpIndex,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/xpindices`, { ...requestOptions, data: xpIndex, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a XP index. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/xp-indices/delete|api docs} for more info 
    * 
    * @param thingType Thing type of the xp index. Possible values: Address, Variant, Order, OrderReturn, LineItem, CostCenter, CreditCard, Payment, Spec, SpecOption, UserGroup, Company, Category, PriceSchedule, Shipment, SpendingAccount, User, Promotion, ApprovalRule, SellerApprovalRule, Catalog, ProductFacet, MessageSender, InventoryRecord.
    * @param key Key of the xp index.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(thingType: XpThingType, key: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/xpindices/${thingType}/${key}`, { ...requestOptions, impersonating,  } )
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
     * XpIndices.As().List() // lists XpIndices using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new XpIndices();