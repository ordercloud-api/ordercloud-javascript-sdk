# OrderCloud.Shipments

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](Shipments.md#Create) | **POST** /shipments | 
[**Delete**](Shipments.md#Delete) | **DELETE** /shipments/{shipmentID} | 
[**DeleteItem**](Shipments.md#DeleteItem) | **DELETE** /shipments/{shipmentID}/items/{orderID}/{lineItemID} | 
[**Get**](Shipments.md#Get) | **GET** /shipments/{shipmentID} | 
[**GetItem**](Shipments.md#GetItem) | **GET** /shipments/{shipmentID}/items/{orderID}/{lineItemID} | 
[**List**](Shipments.md#List) | **GET** /shipments | 
[**ListItems**](Shipments.md#ListItems) | **GET** /shipments/{shipmentID}/items | 
[**Patch**](Shipments.md#Patch) | **PATCH** /shipments/{shipmentID} | 
[**SaveItem**](Shipments.md#SaveItem) | **POST** /shipments/{shipmentID}/items | 
[**Update**](Shipments.md#Update) | **PUT** /shipments/{shipmentID} | 


<a name="Create"></a>
# **Create**
> Shipment Create(shipment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Shipments();

var shipment = new OrderCloud.Shipment(); // Shipment | 

apiInstance.Create(shipment).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipment** | [**Shipment**](Shipment.md)|  | 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(shipmentID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Shipments();

var shipmentID = "shipmentID_example"; // String | ID of the shipment.

apiInstance.Delete(shipmentID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeleteItem"></a>
# **DeleteItem**
> DeleteItem(shipmentID, orderID, lineItemID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Shipments();

var shipmentID = "shipmentID_example"; // String | ID of the shipment.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

apiInstance.DeleteItem(shipmentID, orderID, lineItemID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 
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
> Shipment Get(shipmentID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Shipments();

var shipmentID = "shipmentID_example"; // String | ID of the shipment.

apiInstance.Get(shipmentID).then(function(data) {
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

[**Shipment**](Shipment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="GetItem"></a>
# **GetItem**
> ShipmentItem GetItem(shipmentID, orderID, lineItemID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Shipments();

var shipmentID = "shipmentID_example"; // String | ID of the shipment.

var orderID = "orderID_example"; // String | ID of the order.

var lineItemID = "lineItemID_example"; // String | ID of the line item.

apiInstance.GetItem(shipmentID, orderID, lineItemID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 
 **orderID** | **String**| ID of the order. | 
 **lineItemID** | **String**| ID of the line item. | 

### Return type

[**ShipmentItem**](ShipmentItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListShipment List(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Shipments();

var opts = { 
  'orderID': "orderID_example", // String | ID of the order.
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
apiInstance.List(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderID** | **String**| ID of the order. | [optional] 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListShipment**](ListShipment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListItems"></a>
# **ListItems**
> ListShipmentItem ListItems(shipmentID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Shipments();

var shipmentID = "shipmentID_example"; // String | ID of the shipment.

var opts = { 
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
apiInstance.ListItems(shipmentID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListShipmentItem**](ListShipmentItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> Shipment Patch(shipmentID, shipment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Shipments();

var shipmentID = "shipmentID_example"; // String | ID of the shipment.

var shipment = new OrderCloud.Shipment(); // Shipment | 

apiInstance.Patch(shipmentID, shipment).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 
 **shipment** | [**Shipment**](Shipment.md)|  | 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SaveItem"></a>
# **SaveItem**
> ShipmentItem SaveItem(shipmentID, item)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Shipments();

var shipmentID = "shipmentID_example"; // String | ID of the shipment.

var item = new OrderCloud.ShipmentItem(); // ShipmentItem | 

apiInstance.SaveItem(shipmentID, item).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 
 **item** | [**ShipmentItem**](ShipmentItem.md)|  | 

### Return type

[**ShipmentItem**](ShipmentItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> Shipment Update(shipmentID, shipment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Shipments();

var shipmentID = "shipmentID_example"; // String | ID of the shipment.

var shipment = new OrderCloud.Shipment(); // Shipment | 

apiInstance.Update(shipmentID, shipment).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentID** | **String**| ID of the shipment. | 
 **shipment** | [**Shipment**](Shipment.md)|  | 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

