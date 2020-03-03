import { ListPage } from '../models/ListPage';
import { CreditCard } from '../models/CreditCard';
import { CreditCardAssignment } from '../models/CreditCardAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class CreditCards {
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
        this.DeleteAssignment = this.DeleteAssignment.bind(this);
        this.ListAssignments = this.ListAssignments.bind(this);
        this.SaveAssignment = this.SaveAssignment.bind(this);
    }

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
    public async List<TCreditCard extends CreditCard>(buyerID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TCreditCard>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TCreditCard>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/creditcards`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param creditCard 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TCreditCard extends CreditCard>(buyerID: string, creditCard: CreditCard, accessToken?: string ): Promise<RequiredDeep<TCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/${buyerID}/creditcards`, { data: creditCard, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param creditCardID ID of the credit card.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TCreditCard extends CreditCard>(buyerID: string, creditCardID: string,  accessToken?: string ): Promise<RequiredDeep<TCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/creditcards/${creditCardID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param creditCardID ID of the credit card.
    * @param creditCard 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TCreditCard extends CreditCard>(buyerID: string, creditCardID: string, creditCard: CreditCard, accessToken?: string ): Promise<RequiredDeep<TCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/buyers/${buyerID}/creditcards/${creditCardID}`, { data: creditCard, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param creditCardID ID of the credit card.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(buyerID: string, creditCardID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}/creditcards/${creditCardID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param creditCardID ID of the credit card.
    * @param creditCard 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TCreditCard extends CreditCard>(buyerID: string, creditCardID: string, creditCard: PartialDeep<CreditCard>,  accessToken?: string ): Promise<RequiredDeep<TCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/buyers/${buyerID}/creditcards/${creditCardID}`, { data: creditCard, params: { accessToken, impersonating } }  );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param creditCardID ID of the credit card.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment(buyerID: string, creditCardID: string,  options: { userID?: string, userGroupID?: string } = {}, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}/creditcards/${creditCardID}/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param options.creditCardID ID of the credit card.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.level Level of the credit card assignment. Possible values: User, Group, Company.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments<TCreditCardAssignment extends CreditCardAssignment>(buyerID: string,  options: { creditCardID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TCreditCardAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/buyers/${buyerID}/creditcards/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param buyerID ID of the buyer.
    * @param creditCardAssignment Required fields: CreditCardID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment(buyerID: string, creditCardAssignment: CreditCardAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/buyers/${buyerID}/creditcards/assignments`, { data: creditCardAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * CreditCards.As().List() // lists CreditCards using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new CreditCards();