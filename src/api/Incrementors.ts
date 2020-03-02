import { ListPage } from '../models/ListPage';
import { Incrementor } from '../models/Incrementor';
import { PartialDeep } from '../models/PartialDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class Incrementors {
    private impersonating:boolean = false;

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TIncrementor extends Incrementor>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TIncrementor>> } = {}, accessToken?: string ): Promise<Required<ListPage<TIncrementor>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/incrementors`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param incrementor Required fields: LastNumber, LeftPaddingCount
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TIncrementor extends Incrementor>(incrementor: Incrementor, accessToken?: string ): Promise<Required<TIncrementor>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/incrementors`, { data: incrementor, params: { accessToken, impersonating } }  );
    }

   /**
    * @param incrementorID ID of the incrementor.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TIncrementor extends Incrementor>(incrementorID: string,  accessToken?: string ): Promise<Required<TIncrementor>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/incrementors/${incrementorID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param incrementorID ID of the incrementor.
    * @param incrementor Required fields: LastNumber, LeftPaddingCount
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TIncrementor extends Incrementor>(incrementorID: string, incrementor: Incrementor, accessToken?: string ): Promise<Required<TIncrementor>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/incrementors/${incrementorID}`, { data: incrementor, params: { accessToken, impersonating } }  );
    }

   /**
    * @param incrementorID ID of the incrementor.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(incrementorID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/incrementors/${incrementorID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param incrementorID ID of the incrementor.
    * @param incrementor 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TIncrementor extends Incrementor>(incrementorID: string, incrementor: PartialDeep<Incrementor>,  accessToken?: string ): Promise<Required<TIncrementor>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/incrementors/${incrementorID}`, { data: incrementor, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Incrementors.As().List() // lists Incrementors using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Incrementors();