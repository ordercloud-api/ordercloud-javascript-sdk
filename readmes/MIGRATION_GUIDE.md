# Migration Guide

The objective of this guide is to document the breaking changes and updates required to migrate from one major version to the next.

## version 3.x.x to version 4.x.x

* Interacting directly with the SDK instance is no longer possible. Configuration of the sdk is now done via the `Configuration` service and setting tokens is done via the `Token` service.

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

    Tokens.SetAccess('my-token');
    ```

* The `As()` method used for impersonation has been moved from being accessible off the sdk instance *to* each resource.

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

## version 2.x.x to version 3.x.x

* `ApiClient` renamed to `Sdk` to prevent name-clash with new API resource.

    The API now has a resource for managing [`ApiClients`](https://developer.ordercloud.io/documentation/api-reference/Seller/MessageSenders/SaveCCListenerAssignment). This name-clashed with how we were referencing the SDK's instance. to get the default client.

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
