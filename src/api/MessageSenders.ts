import { ListPage } from '../models/ListPage';
import { MessageSender } from '../models/MessageSender';
import { MessageSenderAssignment } from '../models/MessageSenderAssignment';
import { MessageCCListenerAssignment } from '../models/MessageCCListenerAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class MessageSenders {
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
        this.ListCCListenerAssignments = this.ListCCListenerAssignments.bind(this);
        this.SaveCCListenerAssignment = this.SaveCCListenerAssignment.bind(this);
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
    public async List<TMessageSender extends MessageSender>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TMessageSender>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TMessageSender>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/messagesenders`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param messageSender Required fields: Name, MessageTypes, URL, SharedKey
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TMessageSender extends MessageSender>(messageSender: MessageSender, accessToken?: string ): Promise<RequiredDeep<TMessageSender>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/messagesenders`, { data: messageSender, params: { accessToken, impersonating } }  );
    }

   /**
    * @param messageSenderID ID of the message sender.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TMessageSender extends MessageSender>(messageSenderID: string,  accessToken?: string ): Promise<RequiredDeep<TMessageSender>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/messagesenders/${messageSenderID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param messageSenderID ID of the message sender.
    * @param messageSender Required fields: Name, MessageTypes, URL, SharedKey
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TMessageSender extends MessageSender>(messageSenderID: string, messageSender: MessageSender, accessToken?: string ): Promise<RequiredDeep<TMessageSender>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/messagesenders/${messageSenderID}`, { data: messageSender, params: { accessToken, impersonating } }  );
    }

   /**
    * @param messageSenderID ID of the message sender.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(messageSenderID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/messagesenders/${messageSenderID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param messageSenderID ID of the message sender.
    * @param messageSender 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TMessageSender extends MessageSender>(messageSenderID: string, messageSender: PartialDeep<MessageSender>,  accessToken?: string ): Promise<RequiredDeep<TMessageSender>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/messagesenders/${messageSenderID}`, { data: messageSender, params: { accessToken, impersonating } }  );
    }

   /**
    * @param messageSenderID ID of the message sender.
    * @param options.buyerID ID of the buyer.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.supplierID ID of the supplier.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment(messageSenderID: string,  options: { buyerID?: string, userID?: string, userGroupID?: string, supplierID?: string } = {}, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/messagesenders/${messageSenderID}/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param options.buyerID ID of the buyer.
    * @param options.messageSenderID ID of the message sender.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.level Level of the message sender assignment. Possible values: User, Group, Company.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.supplierID ID of the supplier.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments<TMessageSenderAssignment extends MessageSenderAssignment>( options: { buyerID?: string, messageSenderID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, supplierID?: string } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TMessageSenderAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/messagesenders/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param messageSenderAssignment Required fields: MessageSenderID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment(messageSenderAssignment: MessageSenderAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/messagesenders/assignments`, { data: messageSenderAssignment, params: { accessToken, impersonating } }  );
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
    public async ListCCListenerAssignments<TMessageCCListenerAssignment extends MessageCCListenerAssignment>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TMessageCCListenerAssignment>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TMessageCCListenerAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/messagesenders/CCListenerAssignments`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param messageCCListenerAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveCCListenerAssignment(messageCCListenerAssignment: MessageCCListenerAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/messagesenders/CCListenerAssignments`, { data: messageCCListenerAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * MessageSenders.As().List() // lists MessageSenders using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new MessageSenders();