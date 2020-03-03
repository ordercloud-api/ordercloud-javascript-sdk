import { ListPage } from '../models/ListPage';
import { Buyer } from '../models/Buyer';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class Buyers {
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
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TBuyer extends Buyer>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TBuyer>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TBuyer>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param buyer Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TBuyer extends Buyer>(buyer: Buyer, accessToken?: string ): Promise<RequiredDeep<TBuyer>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers`, { data: buyer, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TBuyer extends Buyer>(buyerID: string,  accessToken?: string ): Promise<RequiredDeep<TBuyer>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param buyer Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TBuyer extends Buyer>(buyerID: string, buyer: Buyer, accessToken?: string ): Promise<RequiredDeep<TBuyer>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/buyers/${buyerID}`, { data: buyer, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(buyerID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param buyer 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TBuyer extends Buyer>(buyerID: string, buyer: PartialDeep<Buyer>,  accessToken?: string ): Promise<RequiredDeep<TBuyer>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/buyers/${buyerID}`, { data: buyer, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Buyers.As().List() // lists Buyers using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Buyers();