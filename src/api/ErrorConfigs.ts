import { ErrorConfig } from '../models/ErrorConfig';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class ErrorConfigs {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.Get = this.Get.bind(this);
        this.Save = this.Save.bind(this);
        this.Delete = this.Delete.bind(this);
        this.Patch = this.Patch.bind(this);
        this.Validate = this.Validate.bind(this);
    }

   /**
    * Get a single error config. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/error-configs/get|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TErrorConfig extends ErrorConfig>(requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TErrorConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/integrations/ErrorConfig`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update an error config. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/integrations/error-configs/save|api docs} for more info 
    * 
    * @param errorConfig Required fields: DeliveryConfigID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TErrorConfig extends ErrorConfig>(errorConfig: ErrorConfig,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TErrorConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/integrations/ErrorConfig`, { ...requestOptions, data: errorConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete an error config. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/error-configs/delete|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/integrations/ErrorConfig`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update an error config. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/error-configs/patch|api docs} for more info 
    * 
    * @param errorConfig 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TErrorConfig extends ErrorConfig>(errorConfig: PartialDeep<ErrorConfig>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TErrorConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/integrations/ErrorConfig`, { ...requestOptions, data: errorConfig, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Validates an error config. 
    * Check out the {@link https://ordercloud.io/api-reference/integrations/error-configs/validate|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Validate(requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/integrations/ErrorConfig/validate`, { ...requestOptions, impersonating,  } )
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
     * ErrorConfigs.As().List() // lists ErrorConfigs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new ErrorConfigs();