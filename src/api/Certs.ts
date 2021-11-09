import { PublicKey } from '../models/PublicKey';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Certs {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.GetPublicKey = this.GetPublicKey.bind(this);
    }

   /**
    * Get a single cert public key. Returns a JSON Web Key (JWK). Can be used for validating the token was signed by OrderCloud.
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/certs/get-public-key|api docs} for more info 
    * 
    * @param ID ID of the public key.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetPublicKey<TPublicKey extends PublicKey>(ID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TPublicKey>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`oauth/certs/${ID}`, { ...requestOptions, impersonating,  } )
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
     * Certs.As().List() // lists Certs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Certs();