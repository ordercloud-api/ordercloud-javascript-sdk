import { ListPage } from '../models/ListPage';
import { Payment } from '../models/Payment';
import { PaymentTransaction } from '../models/PaymentTransaction';
import { PartialDeep } from '../models/PartialDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class Payments {
    private impersonating:boolean = false;

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TPayment extends Payment>(direction: 'Incoming' | 'Outgoing', orderID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TPayment>> }, accessToken?: string ): Promise<Required<ListPage<TPayment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/orders/${direction}/${orderID}/payments`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param payment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TPayment extends Payment>(direction: 'Incoming' | 'Outgoing', orderID: string, payment: Payment, accessToken?: string ): Promise<Required<TPayment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orders/${direction}/${orderID}/payments`, { data: payment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TPayment extends Payment>(direction: 'Incoming' | 'Outgoing', orderID: string, paymentID: string,  accessToken?: string ): Promise<Required<TPayment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/orders/${direction}/${orderID}/payments/${paymentID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(direction: 'Incoming' | 'Outgoing', orderID: string, paymentID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/orders/${direction}/${orderID}/payments/${paymentID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param payment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TPayment extends Payment>(direction: 'Incoming' | 'Outgoing', orderID: string, paymentID: string, payment: PartialDeep<Payment>,  accessToken?: string ): Promise<Required<TPayment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/orders/${direction}/${orderID}/payments/${paymentID}`, { data: payment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param paymentTransaction Required fields: Type, DateExecuted
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async CreateTransaction<TPayment extends Payment>(direction: 'Incoming' | 'Outgoing', orderID: string, paymentID: string, paymentTransaction: PaymentTransaction, accessToken?: string ): Promise<Required<TPayment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orders/${direction}/${orderID}/payments/${paymentID}/transactions`, { data: paymentTransaction, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param transactionID ID of the transaction.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteTransaction(direction: 'Incoming' | 'Outgoing', orderID: string, paymentID: string, transactionID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/orders/${direction}/${orderID}/payments/${paymentID}/transactions/${transactionID}`, { params: { accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Payments.As().List() // lists Payments using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Payments();