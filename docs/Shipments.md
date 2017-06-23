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
  'search': "search_example", // String | Search of the shipment.
  'searchOn': ["searchOn_example"], // [String] | Search on of the shipment.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the shipment.
  'page': 56, // Number | Page of the shipment.
  'pageSize': 56, // Number | Page size of the shipment.
  'filters': {key: "filters_example"} // {String: String} | Filters of the shipment.
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
 **search** | **String**| Search of the shipment. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the shipment. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the shipment. | [optional] 
 **page** | **Number**| Page of the shipment. | [optional] 
 **pageSize** | **Number**| Page size of the shipment. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the shipment. | [optional] 

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
  'search': "search_example", // String | Search of the shipment.
  'searchOn': ["searchOn_example"], // [String] | Search on of the shipment.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the shipment.
  'page': 56, // Number | Page of the shipment.
  'pageSize': 56, // Number | Page size of the shipment.
  'filters': {key: "filters_example"} // {String: String} | Filters of the shipment.
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

