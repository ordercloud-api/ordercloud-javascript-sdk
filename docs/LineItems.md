# OrderCloud.LineItems

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](LineItems.md#callDelete) | **DELETE** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**create**](LineItems.md#create) | **POST** /orders/{direction}/{orderID}/lineitems | 
[**get**](LineItems.md#get) | **GET** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**list**](LineItems.md#list) | **GET** /orders/{direction}/{orderID}/lineitems | 
[**patch**](LineItems.md#patch) | **PATCH** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**patchShippingAddress**](LineItems.md#patchShippingAddress) | **PATCH** /orders/{direction}/{orderID}/lineitems/{lineItemID}/shipto | 
[**save**](LineItems.md#save) | **PUT** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
[**setShippingAddress**](LineItems.md#setShippingAddress) | **PUT** /orders/{direction}/{orderID}/lineitems/{lineItemID}/shipto | 


<a name="callDelete"></a>
# **callDelete**
> callDelete(direction, orderID, lineItemID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

apiInstance.callDelete(direction, orderID, lineItemID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="create"></a>
# **create**
> LineItem create(direction, orderID, lineItem)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var lineItem = new OrderCloud.LineItem(); // LineItem | 

apiInstance.create(direction, orderID, lineItem).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **lineItem** | [**LineItem**](LineItem.md)|  | 

### Return type

[**LineItem**](LineItem.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="get"></a>
# **get**
> LineItem get(direction, orderID, lineItemID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

apiInstance.get(direction, orderID, lineItemID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 

### Return type

[**LineItem**](LineItem.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="list"></a>
# **list**
> ListLineItem list(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var opts = { 
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
apiInstance.list(direction, orderID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
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

<a name="patch"></a>
# **patch**
> LineItem patch(direction, orderID, lineItemID, partialLineItem)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

var partialLineItem = new OrderCloud.LineItem(); // LineItem | 

apiInstance.patch(direction, orderID, lineItemID, partialLineItem).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
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

<a name="patchShippingAddress"></a>
# **patchShippingAddress**
> LineItem patchShippingAddress(direction, orderID, lineItemID, partialAddress)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

var partialAddress = new OrderCloud.Address(); // Address | 

apiInstance.patchShippingAddress(direction, orderID, lineItemID, partialAddress).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
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

<a name="save"></a>
# **save**
> LineItem save(direction, orderID, lineItemID, lineItem)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

var lineItem = new OrderCloud.LineItem(); // LineItem | 

apiInstance.save(direction, orderID, lineItemID, lineItem).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
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

<a name="setShippingAddress"></a>
# **setShippingAddress**
> LineItem setShippingAddress(direction, orderID, lineItemID, address)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.LineItems();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

var address = new OrderCloud.Address(); // Address | 

apiInstance.setShippingAddress(direction, orderID, lineItemID, address).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
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

