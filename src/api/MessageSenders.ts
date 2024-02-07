import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { MessageSender } from '../models/MessageSender';
import { MessageSenderAssignment } from '../models/MessageSenderAssignment';
import { PartyType } from '../models/PartyType';
import { MessageCCListenerAssignment } from '../models/MessageCCListenerAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

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
    * Get a list of message senders. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/message-senders/list|api docs} for more info 
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
    public async List<TMessageSender extends MessageSender>(listOptions: { search?: string, searchOn?: Searchable<'MessageSenders.List'>, sortBy?: Sortable<'MessageSenders.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TMessageSender>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/messagesenders`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new message sender. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/integrations/message-senders/create|api docs} for more info 
    * 
    * @param messageSender Required fields: Name, MessageTypes
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TMessageSender extends MessageSender>(messageSender: MessageSender,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TMessageSender>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/messagesenders`, { ...requestOptions, data: messageSender, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single message sender. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/message-senders/get|api docs} for more info 
    * 
    * @param messageSenderID ID of the message sender.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TMessageSender extends MessageSender>(messageSenderID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TMessageSender>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/messagesenders/${messageSenderID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a message sender. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/integrations/message-senders/save|api docs} for more info 
    * 
    * @param messageSenderID ID of the message sender.
    * @param messageSender Required fields: Name, MessageTypes
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TMessageSender extends MessageSender>(messageSenderID: string, messageSender: MessageSender,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TMessageSender>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/messagesenders/${messageSenderID}`, { ...requestOptions, data: messageSender, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a message sender. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/message-senders/delete|api docs} for more info 
    * 
    * @param messageSenderID ID of the message sender.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(messageSenderID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/messagesenders/${messageSenderID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a message sender. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/message-senders/patch|api docs} for more info 
    * 
    * @param messageSenderID ID of the message sender.
    * @param messageSender 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TMessageSender extends MessageSender>(messageSenderID: string, messageSender: PartialDeep<MessageSender>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TMessageSender>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/messagesenders/${messageSenderID}`, { ...requestOptions, data: messageSender, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a message sender assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/message-senders/delete-assignment|api docs} for more info 
    * 
    * @param messageSenderID ID of the message sender.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteAssignment(messageSenderID: string, listOptions: { buyerID?: string, userID?: string, userGroupID?: string, supplierID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/messagesenders/${messageSenderID}/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of message sender assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/message-senders/list-assignments|api docs} for more info 
    * 
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.messageSenderID ID of the message sender.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the message sender assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. Default: 1. When paginating through many items (> page 30), we recommend the "Last ID" method, as outlined in the Advanced Querying documentation.
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListAssignments<TMessageSenderAssignment extends MessageSenderAssignment>(listOptions: { buyerID?: string, messageSenderID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number, supplierID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TMessageSenderAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/messagesenders/assignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a message sender assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/message-senders/save-assignment|api docs} for more info 
    * 
    * @param messageSenderAssignment Required fields: MessageSenderID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveAssignment(messageSenderAssignment: MessageSenderAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/messagesenders/assignments`, { ...requestOptions, data: messageSenderAssignment, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of message sender cc listener assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/message-senders/list-cclistener-assignments|api docs} for more info 
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
    public async ListCCListenerAssignments<TMessageCCListenerAssignment extends MessageCCListenerAssignment>(listOptions: { search?: string, searchOn?: Searchable<'MessageSenders.ListCCListenerAssignments'>, sortBy?: Sortable<'MessageSenders.ListCCListenerAssignments'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TMessageCCListenerAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/messagesenders/CCListenerAssignments`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a message sender cc listener assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/message-senders/save-cclistener-assignment|api docs} for more info 
    * 
    * @param messageCCListenerAssignment Required fields: MessageSenderAssignment, MessageType
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveCCListenerAssignment(messageCCListenerAssignment: MessageCCListenerAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/messagesenders/CCListenerAssignments`, { ...requestOptions, data: messageCCListenerAssignment, impersonating,  } )
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
     * MessageSenders.As().List() // lists MessageSenders using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new MessageSenders();