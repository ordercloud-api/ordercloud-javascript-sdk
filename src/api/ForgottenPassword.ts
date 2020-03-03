import { PasswordResetRequest } from '../models/PasswordResetRequest';
import { PasswordReset } from '../models/PasswordReset';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class ForgottenPassword {
    private impersonating:boolean = false;

   /**
    * @param passwordResetRequest Required fields: ClientID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SendVerificationCode(passwordResetRequest: PasswordResetRequest, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/password/reset`, { data: passwordResetRequest, params: { accessToken, impersonating } }  );
    }

   /**
    * @param verificationCode Verification code of the password reset.
    * @param passwordReset Required fields: ClientID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ResetPasswordByVerificationCode(verificationCode: string, passwordReset: PasswordReset, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/password/reset/${verificationCode}`, { data: passwordReset, params: { accessToken, impersonating } }  );
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