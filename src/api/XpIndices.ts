import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { XpIndex } from '../models/XpIndex';
import { XpThingType } from '../models/XpThingType';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
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
    * Get a list of xp indices. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/xp-indices/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List(listOptions?: { search?: string, searchOn?: Searchable<'XpIndices.List'>, sortBy?: Sortable<'XpIndices.List'>, page?: number, pageSize?: number, filters?: Filters<Required<XpIndex>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<XpIndex>>>;
    public async List<TXpIndex extends XpIndex>(listOptions?: { search?: string, searchOn?: Searchable<'XpIndices.List'>, sortBy?: Sortable<'XpIndices.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TXpIndex>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TXpIndex>>>;
    public async List<TXpIndex extends XpIndex>(listOptions: { search?: string, searchOn?: Searchable<'XpIndices.List'>, sortBy?: Sortable<'XpIndices.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TXpIndex>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TXpIndex>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/xpindices`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Put a xp index put. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/xp-indices/put|api docs} for more info 
    * 
    * @param xpIndex 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Put(xpIndex: XpIndex,requestOptions?: RequestOptions ): Promise<void>;
    public async Put(xpIndex: XpIndex,requestOptions?: RequestOptions ): Promise<void>;
    public async Put(xpIndex: XpIndex,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/xpindices`, { ...requestOptions, data: xpIndex, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a xp index. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/xp-indices/delete|api docs} for more info 
    * 
    * @param thingType Thing type of the xp index. Possible values: Product, Variant, Order, LineItem, Address, CostCenter, CreditCard, Payment, Spec, SpecOption, UserGroup, Company, Category, PriceSchedule, Shipment, SpendingAccount, User, Promotion, ApprovalRule, Catalog, ProductFacet, MessageSender.
    * @param key Key of the xp index.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(thingType: XpThingType, key: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(thingType: XpThingType, key: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(thingType: XpThingType, key: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/xpindices/${thingType}/${key}`, { ...requestOptions, impersonating, params: {   } } )
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