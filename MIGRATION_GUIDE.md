# Migration Guide

The objective of this guide is to document the breaking changes and updates required to migrate from one major version to the next.

## version 10.x.x to version 11.x.x
* The return type for the `Cart.ListEligiblePromotions` and `Orders.ListEligiblePromotions` methods have been updated from `OrderPromotion` to `EligiblePromotion`

    Before:
    ```typescript
    Orders.ListEligiblePromotions<TOrderPromotion>(...) : Promise<RequiredDeep<ListPage<TOrderPromotion>>>
    ```

    After:
    ```typescript
    Orders.ListEligiblePromotions<TEligiblePromotion>(...) : Promise<RequiredDeep<ListPage<TEligiblePromotion>>>
    ```

## version 9.x.x to version 10.x.x
* The `userID` parameter as well as the 'User' option in the `level` parameter have been removed from listOptions on serveral list assignment operations: `Bundles.ListAssignments(), CostCenters.ListAssignments(), Categories.ListAssignments(), Locales.ListAssignments(), MessageSenders.ListAssignments(), InventoryRecords.ListAssignments(), InventoryRecords.ListVariantAssignments(), Products.ListAssignments(), Promotions.ListAssignments()`.  

    Before:
    ```typescript
    Products.ListAssignments({ level: 'User'}); // 'Group' or 'Company' also valid 
    ```

    After:
    ```typescript
    Products.ListAssignments({ level: 'Group'}); // 'Company' also valid 
    ```

## version 8.x.x to version 9.x.x
* The return type for the `Me.ListProductCollectionEntries` method has been updated from `BuyerProduct` to `ProductCollectionBuyerProduct`

    Before:
    ```typescript
    ListProductCollectionEntries<TBuyerProduct>(...) : Promise<RequiredDeep<ListPageWithFacets<TBuyerProduct>>>
    ```

    After:
    ```typescript
    ListProductCollectionEntries<TProductCollectionBuyerProduct>(...) : Promise<RequiredDeep<ListPageWithFacets<TProductCollectionBuyerProduct>>>
    ```

    * The return type for the `ProductCollections.ListEntries` method has been updated from `Product` to `ProductCollectionProduct`

    Before:
    ```typescript
    ListEntries<TProduct>(...) : Promise<RequiredDeep<ListPageWithFacets<TProduct>>>
    ```

    After:
    ```typescript
    ListEntries<TProductCollectionBuyerProduct>(...) : Promise<RequiredDeep<ListPageWithFacets<TProductCollectionBuyerProduct>>>
    ```

## version 7.x.x to version 8.x.x
* The return type for the `ListEligiblePromotions` method has been updated from `Promotion` to `OrderPromotion`

    Before:
    ```typescript
    ListEligiblePromotions<TPromotion>(...) : Promise<RequiredDeep<ListPage<TPromotion>>>
    ```

    After:
    ```typescript
    ListEligiblePromotions<TOrderPromotion>(...) : Promise<RequiredDeep<ListPage<TOrderPromotion>>>
    ```

## version 6.x.x to version 7.x.x
* The method names for the `EntitySynchronization` service have been streamlined for improved clarity. The previous naming convention included the suffix `EntitySyncConfig`, which has now been removed

    Before:
    ```typescript
    EntitySynchronization.GetInventoryRecordEntitySyncConfig(...)
    ```

    After:
    ```typescript
    EntitySynchronization.GetInventoryRecords(...)
    ```

## version 5.x.x to version 6.x.x
* `ForgottenPassword` service renamed to `ForgottenCredentials`

    Before:
    ```typescript
    ForgottenPassword.SendVerificationCode(...)
    ```

    After:
    ```typescript
    ForgottenCredentials.SendVerificationCode(...)
    ```

## version 4.x.x to version 5.x.x
* [Axios](https://www.npmjs.com/package/axios) less than version 1.0.0 is no longer supported
* The type for the `errors` property on the class `OrderCloudError` has changed

    Before:
    ```typescript
    errors?: ApiError[] | AuthError[]
    ```

    After:
    ```typescript
    errors?: ApiError[]
    ```
* There was a bug where ordercloud errors were incorrectly nested under an additional `Errors` property. This has been fixed to match the type above

    Before:
    ```typescript
    catch(exception) {
        const ordercloudErrors = exception.errors.Errors;
    }
    ```

    After:
    ```typescript
    catch(exception) {
        const ordercloudErrors = exception.errors;
    }
    ```

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
        baseApiUrl: 'https://api.ordercloud.io',
        apiVersion: 'v1'
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

* `XpIndexs` service has been renamed to `XpIndices`

    Before:

    ```javascript
    XpIndexs.List()
    ```

    After:
    ```javascript
    XpIndices.List()
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
