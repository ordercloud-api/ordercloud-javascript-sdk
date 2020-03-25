import { PasswordResetRequest } from '../models/PasswordResetRequest';
import { PasswordReset } from '../models/PasswordReset';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class ForgottenPassword {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.SendVerificationCode = this.SendVerificationCode.bind(this);
        this.ResetPasswordByVerificationCode = this.ResetPasswordByVerificationCode.bind(this);
    }

   /**
    * Send a verification code. Sends a temporary verification code via email, which must subsequently be passed in a Reset Password call.
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/forgotten-password/send-verification-code|api docs} for more info 
    * 
    * @param passwordResetRequest Required fields: ClientID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async SendVerificationCode(passwordResetRequest: PasswordResetRequest,requestOptions?: RequestOptions ): Promise<void>;
    public async SendVerificationCode(passwordResetRequest: PasswordResetRequest,requestOptions?: RequestOptions ): Promise<void>;
    public async SendVerificationCode(passwordResetRequest: PasswordResetRequest,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/password/reset`, { ...requestOptions, data: passwordResetRequest, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Reset a password by verification code. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/forgotten-password/reset-password-by-verification-code|api docs} for more info 
    * 
    * @param verificationCode Verification code of the password reset.
    * @param passwordReset Required fields: ClientID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async ResetPasswordByVerificationCode(verificationCode: string, passwordReset: PasswordReset,requestOptions?: RequestOptions ): Promise<void>;
    public async ResetPasswordByVerificationCode(verificationCode: string, passwordReset: PasswordReset,requestOptions?: RequestOptions ): Promise<void>;
    public async ResetPasswordByVerificationCode(verificationCode: string, passwordReset: PasswordReset,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/password/reset/${verificationCode}`, { ...requestOptions, data: passwordReset, impersonating, params: {   } } )
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
     * ForgottenPassword.As().List() // lists ForgottenPassword using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new ForgottenPassword();