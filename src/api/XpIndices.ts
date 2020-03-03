import { ListPage } from '../models/ListPage';
import { XpIndex } from '../models/XpIndex';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

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
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TXpIndex extends XpIndex>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TXpIndex>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TXpIndex>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/xpindices`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param xpIndex 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Put(xpIndex: XpIndex, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/xpindices`, { data: xpIndex, params: { accessToken, impersonating } }  );
    }

   /**
    * @param thingType Thing type of the xp index. Possible values: Product, Variant, Order, LineItem, Address, CostCenter, CreditCard, Payment, Spec, SpecOption, UserGroup, Company, Category, PriceSchedule, Shipment, SpendingAccount, User, Promotion, ApprovalRule, Catalog, ProductFacet, MessageSender.
    * @param key Key of the xp index.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(thingType: 'Product' | 'Variant' | 'Order' | 'LineItem' | 'Address' | 'CostCenter' | 'CreditCard' | 'Payment' | 'Spec' | 'SpecOption' | 'UserGroup' | 'Company' | 'Category' | 'PriceSchedule' | 'Shipment' | 'SpendingAccount' | 'User' | 'Promotion' | 'ApprovalRule' | 'Catalog' | 'ProductFacet' | 'MessageSender', key: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/xpindices/${thingType}/${key}`, { params: { accessToken, impersonating } } );
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