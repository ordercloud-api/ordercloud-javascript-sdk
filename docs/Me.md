# OrderCloud.Me

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateAddress**](Me.md#CreateAddress) | **POST** /me/addresses | 
[**CreateCreditCard**](Me.md#CreateCreditCard) | **POST** /me/creditcards | 
[**DeleteAddress**](Me.md#DeleteAddress) | **DELETE** /me/addresses/{addressID} | 
[**DeleteCreditCard**](Me.md#DeleteCreditCard) | **DELETE** /me/creditcards/{creditcardID} | 
[**Get**](Me.md#Get) | **GET** /me | 
[**GetAddress**](Me.md#GetAddress) | **GET** /me/addresses/{addressID} | 
[**GetCatalog**](Me.md#GetCatalog) | **GET** /me/catalogs/{catalogID} | 
[**GetCreditCard**](Me.md#GetCreditCard) | **GET** /me/creditcards/{creditcardID} | 
[**GetProduct**](Me.md#GetProduct) | **GET** /me/products/{productID} | 
[**GetPromotion**](Me.md#GetPromotion) | **GET** /me/promotions/{promotionID} | 
[**GetShipment**](Me.md#GetShipment) | **GET** /me/shipments/{shipmentID} | 
[**GetSpec**](Me.md#GetSpec) | **GET** /me/products/{productID}/specs/{specID} | 
[**GetSpendingAccount**](Me.md#GetSpendingAccount) | **GET** /me/spendingaccounts/{spendingAccountID} | 
[**ListAddresses**](Me.md#ListAddresses) | **GET** /me/addresses | 
[**ListApprovableOrders**](Me.md#ListApprovableOrders) | **GET** /me/orders/approvable | 
[**ListCatalogs**](Me.md#ListCatalogs) | **GET** /me/catalogs | 
[**ListCategories**](Me.md#ListCategories) | **GET** /me/categories | 
[**ListCostCenters**](Me.md#ListCostCenters) | **GET** /me/costcenters | 
[**ListCreditCards**](Me.md#ListCreditCards) | **GET** /me/creditcards | 
[**ListOrders**](Me.md#ListOrders) | **GET** /me/orders | 
[**ListProducts**](Me.md#ListProducts) | **GET** /me/products | 
[**ListPromotions**](Me.md#ListPromotions) | **GET** /me/promotions | 
[**ListShipmentItems**](Me.md#ListShipmentItems) | **GET** /me/shipments/{shipmentID}/items | 
[**ListShipments**](Me.md#ListShipments) | **GET** /me/shipments | 
[**ListSpecs**](Me.md#ListSpecs) | **GET** /me/products/{productID}/specs | 
[**ListSpendingAccounts**](Me.md#ListSpendingAccounts) | **GET** /me/spendingAccounts | 
[**ListUserGroups**](Me.md#ListUserGroups) | **GET** /me/usergroups | 
[**Patch**](Me.md#Patch) | **PATCH** /me | 
[**PatchAddress**](Me.md#PatchAddress) | **PATCH** /me/addresses/{addressID} | 
[**PatchCreditCard**](Me.md#PatchCreditCard) | **PATCH** /me/creditcards/{creditcardID} | 
[**Register**](Me.md#Register) | **PUT** /me/register | 
[**ResetPasswordByToken**](Me.md#ResetPasswordByToken) | **POST** /me/password | 
[**TransferAnonUserOrder**](Me.md#TransferAnonUserOrder) | **PUT** /me/orders | 
[**Update**](Me.md#Update) | **PUT** /me | 
[**UpdateAddress**](Me.md#UpdateAddress) | **PUT** /me/addresses/{addressID} | 
[**UpdateCreditCard**](Me.md#UpdateCreditCard) | **PUT** /me/creditcards/{creditcardID} | 


<a name="CreateAddress"></a>
# **CreateAddress**
> BuyerAddress CreateAddress(address)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var address = new OrderCloud.BuyerAddress(); // BuyerAddress | 

apiInstance.CreateAddress(address).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | [**BuyerAddress**](BuyerAddress.md)|  | 

### Return type

[**BuyerAddress**](BuyerAddress.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="CreateCreditCard"></a>
# **CreateCreditCard**
> BuyerCreditCard CreateCreditCard(creditCard)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var creditCard = new OrderCloud.BuyerCreditCard(); // BuyerCreditCard | 

apiInstance.CreateCreditCard(creditCard).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditCard** | [**BuyerCreditCard**](BuyerCreditCard.md)|  | 

### Return type

[**BuyerCreditCard**](BuyerCreditCard.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeleteAddress"></a>
# **DeleteAddress**
> DeleteAddress(addressID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var addressID = "addressID_example"; // String | ID of the address.

apiInstance.DeleteAddress(addressID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressID** | **String**| ID of the address. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeleteCreditCard"></a>
# **DeleteCreditCard**
> DeleteCreditCard(creditcardID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var creditcardID = "creditcardID_example"; // String | ID of the creditcard.

apiInstance.DeleteCreditCard(creditcardID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditcardID** | **String**| ID of the creditcard. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Get"></a>
# **Get**
> MeUser Get()



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();
apiInstance.Get().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MeUser**](MeUser.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="GetAddress"></a>
# **GetAddress**
> BuyerAddress GetAddress(addressID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var addressID = "addressID_example"; // String | ID of the address.

apiInstance.GetAddress(addressID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressID** | **String**| ID of the address. | 

### Return type

[**BuyerAddress**](BuyerAddress.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="GetCatalog"></a>
# **GetCatalog**
> Catalog GetCatalog(catalogID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var catalogID = "catalogID_example"; // String | ID of the catalog.

apiInstance.GetCatalog(catalogID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 

### Return type

[**Catalog**](Catalog.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="GetCreditCard"></a>
# **GetCreditCard**
> BuyerCreditCard GetCreditCard(creditcardID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var creditcardID = "creditcardID_example"; // String | ID of the creditcard.

apiInstance.GetCreditCard(creditcardID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditcardID** | **String**| ID of the creditcard. | 

### Return type

[**BuyerCreditCard**](BuyerCreditCard.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="GetProduct"></a>
# **GetProduct**
> BuyerProduct GetProduct(productID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var productID = "productID_example"; // String | ID of the product.

apiInstance.GetProduct(productID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 

### Return type

[**BuyerProduct**](BuyerProduct.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="GetPromotion"></a>
# **GetPromotion**
> Promotion GetPromotion(promotionID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var promotionID = "promotionID_example"; // String | ID of the promotion.

apiInstance.GetPromotion(promotionID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionID** | **String**| ID of the promotion. | 

### Return type

[**Promotion**](Promotion.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="GetShipment"></a>
# **GetShipment**
> BuyerShipment GetShipment(shipmentID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var shipmentID = "shipmentID_example"; // String | ID of the shipment.

apiInstance.GetShipment(shipmentID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 

### Return type

[**BuyerShipment**](BuyerShipment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="GetSpec"></a>
# **GetSpec**
> BuyerSpec GetSpec(productID, specID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var productID = "productID_example"; // String | ID of the product.

var specID = "specID_example"; // String | ID of the spec.

var opts = { 
  'catalogID': "catalogID_example" // String | ID of the catalog.
};
apiInstance.GetSpec(productID, specID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
 **specID** | **String**| ID of the spec. | 
 **catalogID** | **String**| ID of the catalog. | [optional] 

### Return type

[**BuyerSpec**](BuyerSpec.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="GetSpendingAccount"></a>
# **GetSpendingAccount**
> SpendingAccount GetSpendingAccount(spendingAccountID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var spendingAccountID = "spendingAccountID_example"; // String | ID of the spending account.

apiInstance.GetSpendingAccount(spendingAccountID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spendingAccountID** | **String**| ID of the spending account. | 

### Return type

[**SpendingAccount**](SpendingAccount.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListAddresses"></a>
# **ListAddresses**
> ListBuyerAddress ListAddresses(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var opts = { 
  'search': "search_example", // String | Search of the address.
  'searchOn': ["searchOn_example"], // [String] | Search on of the address.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the address.
  'page': 56, // Number | Page of the address.
  'pageSize': 56, // Number | Page size of the address.
  'filters': {key: "filters_example"} // {String: String} | Filters of the address.
};
apiInstance.ListAddresses(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Search of the address. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the address. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the address. | [optional] 
 **page** | **Number**| Page of the address. | [optional] 
 **pageSize** | **Number**| Page size of the address. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the address. | [optional] 

### Return type

[**ListBuyerAddress**](ListBuyerAddress.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListApprovableOrders"></a>
# **ListApprovableOrders**
> ListOrder ListApprovableOrders(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var opts = { 
  'from': "from_example", // String | Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
  'to': "to_example", // String | Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
  'search': "search_example", // String | Search of the order.
  'searchOn': ["searchOn_example"], // [String] | Search on of the order.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the order.
  'page': 56, // Number | Page of the order.
  'pageSize': 56, // Number | Page size of the order.
  'filters': {key: "filters_example"} // {String: String} | Filters of the order.
};
apiInstance.ListApprovableOrders(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| Lower bound of date range that the order was created (if outgoing) or submitted (if incoming). | [optional] 
 **to** | **String**| Upper bound of date range that the order was created (if outgoing) or submitted (if incoming). | [optional] 
 **search** | **String**| Search of the order. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the order. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the order. | [optional] 
 **page** | **Number**| Page of the order. | [optional] 
 **pageSize** | **Number**| Page size of the order. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the order. | [optional] 

### Return type

[**ListOrder**](ListOrder.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListCatalogs"></a>
# **ListCatalogs**
> ListCatalog ListCatalogs(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var opts = { 
  'search': "search_example", // String | Search of the catalog.
  'searchOn': ["searchOn_example"], // [String] | Search on of the catalog.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the catalog.
  'page': 56, // Number | Page of the catalog.
  'pageSize': 56, // Number | Page size of the catalog.
  'filters': {key: "filters_example"} // {String: String} | Filters of the catalog.
};
apiInstance.ListCatalogs(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Search of the catalog. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the catalog. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the catalog. | [optional] 
 **page** | **Number**| Page of the catalog. | [optional] 
 **pageSize** | **Number**| Page size of the catalog. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the catalog. | [optional] 

### Return type

[**ListCatalog**](ListCatalog.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListCategories"></a>
# **ListCategories**
> ListCategory ListCategories(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var opts = { 
  'depth': "depth_example", // String | Depth of the category.
  'catalogID': "catalogID_example", // String | ID of the catalog.
  'search': "search_example", // String | Search of the category.
  'searchOn': ["searchOn_example"], // [String] | Search on of the category.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the category.
  'page': 56, // Number | Page of the category.
  'pageSize': 56, // Number | Page size of the category.
  'filters': {key: "filters_example"} // {String: String} | Filters of the category.
};
apiInstance.ListCategories(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **depth** | **String**| Depth of the category. | [optional] 
 **catalogID** | **String**| ID of the catalog. | [optional] 
 **search** | **String**| Search of the category. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the category. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the category. | [optional] 
 **page** | **Number**| Page of the category. | [optional] 
 **pageSize** | **Number**| Page size of the category. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the category. | [optional] 

### Return type

[**ListCategory**](ListCategory.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListCostCenters"></a>
# **ListCostCenters**
> ListCostCenter ListCostCenters(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var opts = { 
  'search': "search_example", // String | Search of the cost center.
  'searchOn': ["searchOn_example"], // [String] | Search on of the cost center.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the cost center.
  'page': 56, // Number | Page of the cost center.
  'pageSize': 56, // Number | Page size of the cost center.
  'filters': {key: "filters_example"} // {String: String} | Filters of the cost center.
};
apiInstance.ListCostCenters(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Search of the cost center. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the cost center. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the cost center. | [optional] 
 **page** | **Number**| Page of the cost center. | [optional] 
 **pageSize** | **Number**| Page size of the cost center. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the cost center. | [optional] 

### Return type

[**ListCostCenter**](ListCostCenter.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListCreditCards"></a>
# **ListCreditCards**
> ListBuyerCreditCard ListCreditCards(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var opts = { 
  'search': "search_example", // String | Search of the credit card.
  'searchOn': ["searchOn_example"], // [String] | Search on of the credit card.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the credit card.
  'page': 56, // Number | Page of the credit card.
  'pageSize': 56, // Number | Page size of the credit card.
  'filters': {key: "filters_example"} // {String: String} | Filters of the credit card.
};
apiInstance.ListCreditCards(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Search of the credit card. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the credit card. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the credit card. | [optional] 
 **page** | **Number**| Page of the credit card. | [optional] 
 **pageSize** | **Number**| Page size of the credit card. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the credit card. | [optional] 

### Return type

[**ListBuyerCreditCard**](ListBuyerCreditCard.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListOrders"></a>
# **ListOrders**
> ListOrder ListOrders(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var opts = { 
  'from': "from_example", // String | Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
  'to': "to_example", // String | Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
  'search': "search_example", // String | Search of the order.
  'searchOn': ["searchOn_example"], // [String] | Search on of the order.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the order.
  'page': 56, // Number | Page of the order.
  'pageSize': 56, // Number | Page size of the order.
  'filters': {key: "filters_example"} // {String: String} | Filters of the order.
};
apiInstance.ListOrders(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| Lower bound of date range that the order was created (if outgoing) or submitted (if incoming). | [optional] 
 **to** | **String**| Upper bound of date range that the order was created (if outgoing) or submitted (if incoming). | [optional] 
 **search** | **String**| Search of the order. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the order. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the order. | [optional] 
 **page** | **Number**| Page of the order. | [optional] 
 **pageSize** | **Number**| Page size of the order. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the order. | [optional] 

### Return type

[**ListOrder**](ListOrder.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListProducts"></a>
# **ListProducts**
> ListBuyerProduct ListProducts(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var opts = { 
  'catalogID': "catalogID_example", // String | ID of the catalog.
  'categoryID': "categoryID_example", // String | ID of the category.
  'depth': "depth_example", // String | Depth of the product.
  'search': "search_example", // String | Search of the product.
  'searchOn': ["searchOn_example"], // [String] | Search on of the product.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the product.
  'page': 56, // Number | Page of the product.
  'pageSize': 56, // Number | Page size of the product.
  'filters': {key: "filters_example"} // {String: String} | Filters of the product.
};
apiInstance.ListProducts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | [optional] 
 **categoryID** | **String**| ID of the category. | [optional] 
 **depth** | **String**| Depth of the product. | [optional] 
 **search** | **String**| Search of the product. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the product. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the product. | [optional] 
 **page** | **Number**| Page of the product. | [optional] 
 **pageSize** | **Number**| Page size of the product. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the product. | [optional] 

### Return type

[**ListBuyerProduct**](ListBuyerProduct.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListPromotions"></a>
# **ListPromotions**
> ListPromotion ListPromotions(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var opts = { 
  'search': "search_example", // String | Search of the promotion.
  'searchOn': ["searchOn_example"], // [String] | Search on of the promotion.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the promotion.
  'page': 56, // Number | Page of the promotion.
  'pageSize': 56, // Number | Page size of the promotion.
  'filters': {key: "filters_example"} // {String: String} | Filters of the promotion.
};
apiInstance.ListPromotions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Search of the promotion. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the promotion. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the promotion. | [optional] 
 **page** | **Number**| Page of the promotion. | [optional] 
 **pageSize** | **Number**| Page size of the promotion. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the promotion. | [optional] 

### Return type

[**ListPromotion**](ListPromotion.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListShipmentItems"></a>
# **ListShipmentItems**
> ListShipmentItem ListShipmentItems(shipmentID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var shipmentID = "shipmentID_example"; // String | ID of the shipment.

var opts = { 
  'orderID': "orderID_example", // String | ID of the order.
  'search': "search_example", // String | Search of the shipment.
  'searchOn': ["searchOn_example"], // [String] | Search on of the shipment.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the shipment.
  'page': 56, // Number | Page of the shipment.
  'pageSize': 56, // Number | Page size of the shipment.
  'filters': {key: "filters_example"} // {String: String} | Filters of the shipment.
};
apiInstance.ListShipmentItems(shipmentID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 
 **orderID** | **String**| ID of the order. | [optional] 
 **search** | **String**| Search of the shipment. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the shipment. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the shipment. | [optional] 
 **page** | **Number**| Page of the shipment. | [optional] 
 **pageSize** | **Number**| Page size of the shipment. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the shipment. | [optional] 

### Return type

[**ListShipmentItem**](ListShipmentItem.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListShipments"></a>
# **ListShipments**
> ListBuyerShipment ListShipments(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var opts = { 
  'orderID': "orderID_example", // String | ID of the order.
  'search': "search_example", // String | Search of the shipment.
  'searchOn': ["searchOn_example"], // [String] | Search on of the shipment.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the shipment.
  'page': 56, // Number | Page of the shipment.
  'pageSize': 56, // Number | Page size of the shipment.
  'filters': {key: "filters_example"} // {String: String} | Filters of the shipment.
};
apiInstance.ListShipments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderID** | **String**| ID of the order. | [optional] 
 **search** | **String**| Search of the shipment. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the shipment. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the shipment. | [optional] 
 **page** | **Number**| Page of the shipment. | [optional] 
 **pageSize** | **Number**| Page size of the shipment. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the shipment. | [optional] 

### Return type

[**ListBuyerShipment**](ListBuyerShipment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListSpecs"></a>
# **ListSpecs**
> ListBuyerSpec ListSpecs(productID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var productID = "productID_example"; // String | ID of the product.

var opts = { 
  'catalogID': "catalogID_example", // String | ID of the catalog.
  'search': "search_example", // String | Search of the product.
  'searchOn': ["searchOn_example"], // [String] | Search on of the product.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the product.
  'page': 56, // Number | Page of the product.
  'pageSize': 56, // Number | Page size of the product.
  'filters': {key: "filters_example"} // {String: String} | Filters of the product.
};
apiInstance.ListSpecs(productID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productID** | **String**| ID of the product. | 
 **catalogID** | **String**| ID of the catalog. | [optional] 
 **search** | **String**| Search of the product. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the product. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the product. | [optional] 
 **page** | **Number**| Page of the product. | [optional] 
 **pageSize** | **Number**| Page size of the product. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the product. | [optional] 

### Return type

[**ListBuyerSpec**](ListBuyerSpec.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListSpendingAccounts"></a>
# **ListSpendingAccounts**
> ListSpendingAccount ListSpendingAccounts(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var opts = { 
  'search': "search_example", // String | Search of the spending account.
  'searchOn': ["searchOn_example"], // [String] | Search on of the spending account.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the spending account.
  'page': 56, // Number | Page of the spending account.
  'pageSize': 56, // Number | Page size of the spending account.
  'filters': {key: "filters_example"} // {String: String} | Filters of the spending account.
};
apiInstance.ListSpendingAccounts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Search of the spending account. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the spending account. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the spending account. | [optional] 
 **page** | **Number**| Page of the spending account. | [optional] 
 **pageSize** | **Number**| Page size of the spending account. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the spending account. | [optional] 

### Return type

[**ListSpendingAccount**](ListSpendingAccount.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListUserGroups"></a>
# **ListUserGroups**
> ListUserGroup ListUserGroups(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var opts = { 
  'search': "search_example", // String | Search of the user group.
  'searchOn': ["searchOn_example"], // [String] | Search on of the user group.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the user group.
  'page': 56, // Number | Page of the user group.
  'pageSize': 56, // Number | Page size of the user group.
  'filters': {key: "filters_example"} // {String: String} | Filters of the user group.
};
apiInstance.ListUserGroups(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Search of the user group. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the user group. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the user group. | [optional] 
 **page** | **Number**| Page of the user group. | [optional] 
 **pageSize** | **Number**| Page size of the user group. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the user group. | [optional] 

### Return type

[**ListUserGroup**](ListUserGroup.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> MeUser Patch(user)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var user = new OrderCloud.User(); // User | 

apiInstance.Patch(user).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

[**MeUser**](MeUser.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="PatchAddress"></a>
# **PatchAddress**
> PatchAddress(addressID, address)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var addressID = "addressID_example"; // String | ID of the address.

var address = new OrderCloud.Address(); // Address | 

apiInstance.PatchAddress(addressID, address).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressID** | **String**| ID of the address. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="PatchCreditCard"></a>
# **PatchCreditCard**
> PatchCreditCard(creditcardID, creditCard)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var creditcardID = "creditcardID_example"; // String | ID of the creditcard.

var creditCard = new OrderCloud.CreditCard(); // CreditCard | 

apiInstance.PatchCreditCard(creditcardID, creditCard).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditcardID** | **String**| ID of the creditcard. | 
 **creditCard** | [**CreditCard**](CreditCard.md)|  | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Register"></a>
# **Register**
> Object Register(anonUserToken, user)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var anonUserToken = "anonUserToken_example"; // String | Anon user token of the me.

var user = new OrderCloud.User(); // User | 

apiInstance.Register(anonUserToken, user).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anonUserToken** | **String**| Anon user token of the me. | 
 **user** | [**User**](User.md)|  | 

### Return type

**Object**

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ResetPasswordByToken"></a>
# **ResetPasswordByToken**
> ResetPasswordByToken(reset)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var reset = new OrderCloud.TokenPasswordReset(); // TokenPasswordReset | 

apiInstance.ResetPasswordByToken(reset).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reset** | [**TokenPasswordReset**](TokenPasswordReset.md)|  | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="TransferAnonUserOrder"></a>
# **TransferAnonUserOrder**
> TransferAnonUserOrder(anonUserToken)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var anonUserToken = "anonUserToken_example"; // String | Anon user token of the me.

apiInstance.TransferAnonUserOrder(anonUserToken).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anonUserToken** | **String**| Anon user token of the me. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> MeUser Update(user)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var user = new OrderCloud.User(); // User | 

apiInstance.Update(user).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

[**MeUser**](MeUser.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="UpdateAddress"></a>
# **UpdateAddress**
> BuyerAddress UpdateAddress(addressID, address)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var addressID = "addressID_example"; // String | ID of the address.

var address = new OrderCloud.BuyerAddress(); // BuyerAddress | 

apiInstance.UpdateAddress(addressID, address).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressID** | **String**| ID of the address. | 
 **address** | [**BuyerAddress**](BuyerAddress.md)|  | 

### Return type

[**BuyerAddress**](BuyerAddress.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="UpdateCreditCard"></a>
# **UpdateCreditCard**
> BuyerCreditCard UpdateCreditCard(creditcardID, creditCard)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Me();

var creditcardID = "creditcardID_example"; // String | ID of the creditcard.

var creditCard = new OrderCloud.BuyerCreditCard(); // BuyerCreditCard | 

apiInstance.UpdateCreditCard(creditcardID, creditCard).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditcardID** | **String**| ID of the creditcard. | 
 **creditCard** | [**BuyerCreditCard**](BuyerCreditCard.md)|  | 

### Return type

[**BuyerCreditCard**](BuyerCreditCard.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

