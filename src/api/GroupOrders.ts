import { AccessToken } from '../models/AccessToken';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class GroupOrders {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.GetToken = this.GetToken.bind(this);
    }

   /**
    * Get a single group order token. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/group-orders/get-token|api docs} for more info 
    * 
    * @param invitationID ID of the invitation.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetToken<TAccessToken extends AccessToken>(invitationID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAccessToken>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/grouporders/${invitationID}/token`, { ...requestOptions, impersonating,  } )
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
     * GroupOrders.As().List() // lists GroupOrders using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new GroupOrders();