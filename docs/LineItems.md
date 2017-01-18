# OrderCloud.LineItems

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](LineItems.md#Create) | **POST** /buyers/{buyerID}/orders/{orderID}/lineitems | 
[**Delete**](LineItems.md#Delete) | **DELETE** /buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID} | 
[**Get**](LineItems.md#Get) | **GET** /buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID} | 
[**List**](LineItems.md#List) | **GET** /buyers/{buyerID}/orders/{orderID}/lineitems | 
[**Patch**](LineItems.md#Patch) | **PATCH** /buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID} | 
[**PatchShippingAddress**](LineItems.md#PatchShippingAddress) | **PATCH** /buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID}/shipto | 
[**SetShippingAddress**](LineItems.md#SetShippingAddress) | **PUT** /buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID}/shipto | 
[**Update**](LineItems.md#Update) | **PUT** /buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID} | 


<a name="Create"></a>
# **Create**
> LineItem Create(buyerID, orderID, lineItem)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var lineItem = new OrderCloud.LineItem(); // LineItem | 

apiInstance.Create(buyerID, orderID, lineItem).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **lineItem** | [**LineItem**](LineItem.md)|  | 

### Return type

[**LineItem**](LineItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(buyerID, orderID, lineItemID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

apiInstance.Delete(buyerID, orderID, lineItemID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Get"></a>
# **Get**
> LineItem Get(buyerID, orderID, lineItemID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

apiInstance.Get(buyerID, orderID, lineItemID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 

### Return type

[**LineItem**](LineItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListLineItem List(buyerID, orderID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var opts = { 
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
apiInstance.List(buyerID, orderID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListLineItem**](ListLineItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> LineItem Patch(buyerID, orderID, lineItemID, partialLineItem)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

var partialLineItem = new OrderCloud.LineItem(); // LineItem | 

apiInstance.Patch(buyerID, orderID, lineItemID, partialLineItem).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 
 **partialLineItem** | [**LineItem**](LineItem.md)|  | 

### Return type

[**LineItem**](LineItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="PatchShippingAddress"></a>
# **PatchShippingAddress**
> LineItem PatchShippingAddress(buyerID, orderID, lineItemID, partialAddress)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

var partialAddress = new OrderCloud.Address(); // Address | 

apiInstance.PatchShippingAddress(buyerID, orderID, lineItemID, partialAddress).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 
 **partialAddress** | [**Address**](Address.md)|  | 

### Return type

[**LineItem**](LineItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SetShippingAddress"></a>
# **SetShippingAddress**
> LineItem SetShippingAddress(buyerID, orderID, lineItemID, address)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

var address = new OrderCloud.Address(); // Address | 

apiInstance.SetShippingAddress(buyerID, orderID, lineItemID, address).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**LineItem**](LineItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> LineItem Update(buyerID, orderID, lineItemID, lineItem)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

var lineItem = new OrderCloud.LineItem(); // LineItem | 

apiInstance.Update(buyerID, orderID, lineItemID, lineItem).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 
 **lineItem** | [**LineItem**](LineItem.md)|  | 

### Return type

[**LineItem**](LineItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

