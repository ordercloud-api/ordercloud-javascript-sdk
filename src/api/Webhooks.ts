import { ListPage } from '../models/ListPage';
import { Webhook } from '../models/Webhook';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class Webhooks {
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
    public async List<TWebhook extends Webhook>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TWebhook>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TWebhook>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/webhooks`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param webhook Required fields: Name, Url, HashKey
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TWebhook extends Webhook>(webhook: Webhook, accessToken?: string ): Promise<RequiredDeep<TWebhook>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/webhooks`, { data: webhook, params: { accessToken, impersonating } }  );
    }

   /**
    * @param webhookID ID of the webhook.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TWebhook extends Webhook>(webhookID: string,  accessToken?: string ): Promise<RequiredDeep<TWebhook>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/webhooks/${webhookID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param webhookID ID of the webhook.
    * @param webhook Required fields: Name, Url, HashKey
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TWebhook extends Webhook>(webhookID: string, webhook: Webhook, accessToken?: string ): Promise<RequiredDeep<TWebhook>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/webhooks/${webhookID}`, { data: webhook, params: { accessToken, impersonating } }  );
    }

   /**
    * @param webhookID ID of the webhook.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(webhookID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/webhooks/${webhookID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param webhookID ID of the webhook.
    * @param webhook 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TWebhook extends Webhook>(webhookID: string, webhook: PartialDeep<Webhook>,  accessToken?: string ): Promise<RequiredDeep<TWebhook>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/webhooks/${webhookID}`, { data: webhook, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Webhooks.As().List() // lists Webhooks using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Webhooks();