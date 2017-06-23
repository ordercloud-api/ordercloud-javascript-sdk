# OrderCloud.LineItems

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](LineItems.md#Create) | **POST** /orders/{direction}/{orderID}/lineitems | 
[**Delete**](LineItems.md#Delete) | **DELETE** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**Get**](LineItems.md#Get) | **GET** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**List**](LineItems.md#List) | **GET** /orders/{direction}/{orderID}/lineitems | 
[**Patch**](LineItems.md#Patch) | **PATCH** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**PatchShippingAddress**](LineItems.md#PatchShippingAddress) | **PATCH** /orders/{direction}/{orderID}/lineitems/{lineItemID}/shipto | 
[**SetShippingAddress**](LineItems.md#SetShippingAddress) | **PUT** /orders/{direction}/{orderID}/lineitems/{lineItemID}/shipto | 
[**Update**](LineItems.md#Update) | **PUT** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 


<a name="Create"></a>
# **Create**
> LineItem Create(direction, orderID, lineItem)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the line item. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var lineItem = new OrderCloud.LineItem(); // LineItem | 

apiInstance.Create(direction, orderID, lineItem).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the line item. Possible values: Incoming, Outgoing. | 
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
> Delete(direction, orderID, lineItemID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the line item. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

apiInstance.Delete(direction, orderID, lineItemID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the line item. Possible values: Incoming, Outgoing. | 
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
> LineItem Get(direction, orderID, lineItemID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the line item. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

apiInstance.Get(direction, orderID, lineItemID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the line item. Possible values: Incoming, Outgoing. | 
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
> ListLineItem List(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the line item. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var opts = { 
  'search': "search_example", // String | Search of the line item.
  'searchOn': ["searchOn_example"], // [String] | Search on of the line item.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the line item.
  'page': 56, // Number | Page of the line item.
  'pageSize': 56, // Number | Page size of the line item.
  'filters': {key: "filters_example"} // {String: String} | Filters of the line item.
};
apiInstance.List(direction, orderID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the line item. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **search** | **String**| Search of the line item. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the line item. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the line item. | [optional] 
 **page** | **Number**| Page of the line item. | [optional] 
 **pageSize** | **Number**| Page size of the line item. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the line item. | [optional] 

### Return type

[**ListLineItem**](ListLineItem.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> LineItem Patch(direction, orderID, lineItemID, partialLineItem)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the line item. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

var partialLineItem = new OrderCloud.LineItem(); // LineItem | 

apiInstance.Patch(direction, orderID, lineItemID, partialLineItem).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the line item. Possible values: Incoming, Outgoing. | 
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
> LineItem PatchShippingAddress(direction, orderID, lineItemID, partialAddress)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the line item. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

var partialAddress = new OrderCloud.Address(); // Address | 

apiInstance.PatchShippingAddress(direction, orderID, lineItemID, partialAddress).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the line item. Possible values: Incoming, Outgoing. | 
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
> LineItem SetShippingAddress(direction, orderID, lineItemID, address)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the line item. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

var address = new OrderCloud.Address(); // Address | 

apiInstance.SetShippingAddress(direction, orderID, lineItemID, address).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the line item. Possible values: Incoming, Outgoing. | 
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
> LineItem Update(direction, orderID, lineItemID, lineItem)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the line item. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

var lineItem = new OrderCloud.LineItem(); // LineItem | 

apiInstance.Update(direction, orderID, lineItemID, lineItem).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the line item. Possible values: Incoming, Outgoing. | 
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

