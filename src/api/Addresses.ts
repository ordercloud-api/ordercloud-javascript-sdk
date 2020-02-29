import { ListPage } from '../models/ListPage';
import { Address } from '../models/Address';
import { AddressAssignment } from '../models/AddressAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class Addresses {
    private impersonating:boolean = false;

   /**
    * @param buyerID ID of the buyer.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TAddress extends Address>(buyerID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TAddress>> }, accessToken?: string ): Promise<Required<ListPage<TAddress>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/addresses`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TAddress extends Address>(buyerID: string, address: Address, accessToken?: string ): Promise<Required<TAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/${buyerID}/addresses`, { data: address, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TAddress extends Address>(buyerID: string, addressID: string,  accessToken?: string ): Promise<Required<TAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/addresses/${addressID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TAddress extends Address>(buyerID: string, addressID: string, address: Address, accessToken?: string ): Promise<Required<TAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/buyers/${buyerID}/addresses/${addressID}`, { data: address, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(buyerID: string, addressID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}/addresses/${addressID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param address 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TAddress extends Address>(buyerID: string, addressID: string, address: PartialDeep<Address>,  accessToken?: string ): Promise<Required<TAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/buyers/${buyerID}/addresses/${addressID}`, { data: address, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment(buyerID: string, addressID: string,  options: { userID?: string, userGroupID?: string }, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}/addresses/${addressID}/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param options.addressID ID of the address.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.level Level of the address assignment. Possible values: User, Group, Company.
    * @param options.isShipping Is shipping of the address assignment.
    * @param options.isBilling Is billing of the address assignment.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments<TAddressAssignment extends AddressAssignment>(buyerID: string,  options: { addressID?: string, userID?: string, userGroupID?: string, level?: string, isShipping?: boolean, isBilling?: boolean, page?: number, pageSize?: number }, accessToken?: string ): Promise<Required<ListPage<TAddressAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/addresses/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param addressAssignment Required fields: AddressID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment(buyerID: string, addressAssignment: AddressAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/${buyerID}/addresses/assignments`, { data: addressAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Addresses.As().List() // lists Addresses using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Addresses();