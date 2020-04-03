# Migration Guide

The objective of this guide is to document the breaking changes and updates required to migrate from one major version to the next.

## version 3.x.x to version 4.x.x

* [Axios](https://www.npmjs.com/package/axios) is now a peer dependency. Peer dependencies are not installed automatically, they must be installed separately.

* Interacting directly with the SDK instance is no longer possible. Configuration of the sdk is now done via the `Configuration` service and setting tokens is done via the `Tokens` service. Setting a token in a browser environment will set the token in cookies, and on the server they will be stored on the sdk instance.

    Before:

    ```javascript
    const defaultClient = OrderCloud.Sdk.instance;

    // configuring baseApiPath and baseAuthUrl
    defaultClient.baseApiPath = 'https://api.ordercloud.io/v1';
    defaultClient.baseAuthPath = 'https://auth.ordercloud.io/oauth/token';

    // setting the token
    defaultClient.authentications['oauth2'].accessToken = 'my-token'; // setting token
    ```

    After:

    ```javascript
    Configuration.Set({
        baseApiUrl: 'https://api.ordercloud.io/v1',
        baseAuthUrl: 'https://auth.ordercloud.io/oauth/token'
    })

    Tokens.SetAccessToken('my-token');
    ```

* The `As()` method used for impersonation has been moved from being accessible from the sdk *to* each resource.

    Before:

    ```javascript
    OrderCloudSDK.As().Me.ListProducts();
    ```

    After:

    ```javascript
    OrderCloudSDK.Me.As().ListProducts

    // OR (if using selective imports)
    Me.As().ListProducts
    ```

* The `PasswordResets` service has been renamed to `ForgottenPassword`.

    Before:

    ```javascript
    const resetRequest = {
        ClientID: 'my-client-id',
        Email: 'test@test.com',
        Username: 'test'
    }
    PasswordResets.SendVerificationCode(resetRequest)
    ```

    After:

    ```javascript
    const resetRequest = {
        ClientID: 'my-client-id',
        Email: 'test@test.com',
        Username: 'test'
    }
    ForgottenPassword.SendVerificationCode(resetRequest)
    ```

* `Auth.PasswordResets` has been renamed to `Auth.ForgottenPassword`
    Before

    ```javascript
    Auth.PasswordResets()
    ```

* `searchOn` and `sortBy` now accept an array of strings instead of a single comma delimited string

    Before:

    ```javascript
    Me.ListProducts({searchOn: 'ID,Name', sortBy: 'ID,Name'})
    ```

    After:

    ```javascript
    Me.ListProducts({searchOn: ['ID', 'Name'], sortBy: ['ID', 'Name']})
    ```

* The schema for errors has changed. Please refer to the [error handling section](../README.md#handling-errors-) in the readme.

> The following are Typescript breaking changes. If you are not using Typescript you can safely ignore them.

* The minimum compatible typescript version is now 3.5

* Models previously were defined such that all properties were required. Now, properties are only required if the Create/Update operation requires them. Please see [understanding ordercloud's models](../README.md#understanding-orderclouds-models) for more information.

* List models have been replaced with a generic `ListPage` model that takes a type parameter for the item.

    Before:

    ```typescript
    const orderList: ListOrder
    const ccList: ListCreditCard
    ```

    After:

    ```typescript
    const orderList: ListPage<Order>
    const ccList: ListPage<CreditCard>
    ```

* OrderDirection must be either `Incoming` or `Outgoing` case-sensitive.

    Before:

    ```typescript
    Orders.List('incoming')
    ```

    After:

    ```typescript
    Orders.List('Incoming')
    ```

* `Auth.RefreshToken` no longer takes in a `scope` parameter. This parameter didn't actually do anything, when you refresh a token you get a new access token with the same roles as the first one had.

    Before

    ```javascript
    Auth.RefreshToken('my-refresh-token', 'my-client-id', ['Shopper'])
    ```

    After

    ```javascript
    Auth.RefreshToken('my-refresh-token', 'my-client-id')
    ```

## version 2.x.x to version 3.x.x

* `ApiClient` renamed to `Sdk` to prevent name clash with new API resource [ApiClient](https://ordercloud.io/api-reference/seller/api-clients).

    Before:

    ```javascript
    const defaultClient = OrderCloud.ApiClient.instance;
    ```

    After:

    ```javascript
    const defaultClient = OrderCloud.Sdk.instance;
    ```

## version 1.x.x to version 2.x.x

* `searchOn` and `sortBy` now only accept a comma-delimited string. Previously accepted a comma-delimited string **or** an array of strings

* Renamed "Update" (used for PUT's) in favor of "Save" to clarify intent. For example `OrderCloudSDK.Orders.Update` now becomes `OrderCloudSDK.Orders.Save`. This is for *all* resources.
