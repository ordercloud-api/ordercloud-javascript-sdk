import { ListPage } from '../models/ListPage';
import { ImpersonationConfig } from '../models/ImpersonationConfig';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class ImpersonationConfigs {
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
    public async List<TImpersonationConfig extends ImpersonationConfig>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TImpersonationConfig>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TImpersonationConfig>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/impersonationconfig`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param impersonationConfig Required fields: BuyerID, SecurityProfileID, ClientID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TImpersonationConfig extends ImpersonationConfig>(impersonationConfig: ImpersonationConfig, accessToken?: string ): Promise<RequiredDeep<TImpersonationConfig>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/impersonationconfig`, impersonationConfig, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param impersonationConfigID ID of the impersonation config.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string,  accessToken?: string ): Promise<RequiredDeep<TImpersonationConfig>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/impersonationconfig/${impersonationConfigID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param impersonationConfigID ID of the impersonation config.
    * @param impersonationConfig Required fields: BuyerID, SecurityProfileID, ClientID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, impersonationConfig: ImpersonationConfig, accessToken?: string ): Promise<RequiredDeep<TImpersonationConfig>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/impersonationconfig/${impersonationConfigID}`, impersonationConfig, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param impersonationConfigID ID of the impersonation config.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(impersonationConfigID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/impersonationconfig/${impersonationConfigID}`, { params: {  accessToken, impersonating } } );
    }

   /**
    * @param impersonationConfigID ID of the impersonation config.
    * @param impersonationConfig 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, impersonationConfig: PartialDeep<ImpersonationConfig>,  accessToken?: string ): Promise<RequiredDeep<TImpersonationConfig>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/impersonationconfig/${impersonationConfigID}`, impersonationConfig, { params: {  accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * ImpersonationConfigs.As().List() // lists ImpersonationConfigs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new ImpersonationConfigs();