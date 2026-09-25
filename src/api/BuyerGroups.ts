import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { BuyerGroup } from '../models/BuyerGroup';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class BuyerGroups {
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
    }

   /**
    * List buyer groups 
    * Check out the {@link https://ordercloud.io/api-reference/marketplace-owner/buyer-groups/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page.
    * @param listOptions.filters An object or dictionary representing key/value pairs to apply as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List<TBuyerGroup extends BuyerGroup>(listOptions: { search?: string, searchOn?: Searchable<'BuyerGroups.List'>, sortBy?: Sortable<'BuyerGroups.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TBuyerGroup>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/buyergroups`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a buyer group 
    * Check out the {@link https://ordercloud.io/api-reference/marketplace-owner/buyer-groups/create|api docs} for more info 
    * 
    * @param buyerGroup Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TBuyerGroup extends BuyerGroup>(buyerGroup: BuyerGroup,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/buyergroups`, { ...requestOptions, data: buyerGroup, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Retrieve a buyer group 
    * Check out the {@link https://ordercloud.io/api-reference/marketplace-owner/buyer-groups/get|api docs} for more info 
    * 
    * @param buyerGroupID ID of the buyer group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TBuyerGroup extends BuyerGroup>(buyerGroupID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/buyergroups/${buyerGroupID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a buyer group If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/marketplace-owner/buyer-groups/save|api docs} for more info 
    * 
    * @param buyerGroupID ID of the buyer group.
    * @param buyerGroup Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TBuyerGroup extends BuyerGroup>(buyerGroupID: string, buyerGroup: BuyerGroup,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/buyergroups/${buyerGroupID}`, { ...requestOptions, data: buyerGroup, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a buyer group 
    * Check out the {@link https://ordercloud.io/api-reference/marketplace-owner/buyer-groups/delete|api docs} for more info 
    * 
    * @param buyerGroupID ID of the buyer group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(buyerGroupID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/buyergroups/${buyerGroupID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a buyer group 
    * Check out the {@link https://ordercloud.io/api-reference/marketplace-owner/buyer-groups/patch|api docs} for more info 
    * 
    * @param buyerGroupID ID of the buyer group.
    * @param buyerGroup 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TBuyerGroup extends BuyerGroup>(buyerGroupID: string, buyerGroup: PartialDeep<BuyerGroup>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyerGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/buyergroups/${buyerGroupID}`, { ...requestOptions, data: buyerGroup, impersonating,  } )
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
     * BuyerGroups.As().List() // lists BuyerGroups using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new BuyerGroups();