# OrderCloud.ApiClients

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](ApiClients.md#Create) | **POST** /apiclients | 
[**Delete**](ApiClients.md#Delete) | **DELETE** /apiclients/{apiClientID} | 
[**DeleteBuyerAssignment**](ApiClients.md#DeleteBuyerAssignment) | **DELETE** /buyers/{buyerID}/ApiClients/Assignments/{apiClientID} | 
[**DeleteSupplierAssignment**](ApiClients.md#DeleteSupplierAssignment) | **DELETE** /suppliers/{supplierID}/ApiClients/Assignments/{apiClientID} | 
[**Get**](ApiClients.md#Get) | **GET** /apiclients/{apiClientID} | 
[**List**](ApiClients.md#List) | **GET** /apiclients | 
[**ListAssignments**](ApiClients.md#ListAssignments) | **GET** /apiclients/assignments | 
[**Patch**](ApiClients.md#Patch) | **PATCH** /apiclients/{apiClientID} | 
[**Save**](ApiClients.md#Save) | **PUT** /apiclients/{apiClientID} | 
[**SaveAssignment**](ApiClients.md#SaveAssignment) | **POST** /apiclients/assignments | 


<a name="Create"></a>
# **Create**
> ApiClient Create(apiClient)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClients();

var apiClient = new OrderCloud.ApiClient(); // ApiClient | 

apiInstance.Create(apiClient).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClient** | [**ApiClient**](ApiClient.md)|  | 

### Return type

[**ApiClient**](ApiClient.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(apiClientID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClients();

var apiClientID = "apiClientID_example"; // String | ID of the api client.

apiInstance.Delete(apiClientID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientID** | **String**| ID of the api client. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeleteBuyerAssignment"></a>
# **DeleteBuyerAssignment**
> DeleteBuyerAssignment(apiClientID, buyerID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClients();

var apiClientID = "apiClientID_example"; // String | ID of the api client.

var buyerID = "buyerID_example"; // String | ID of the buyer.

apiInstance.DeleteBuyerAssignment(apiClientID, buyerID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientID** | **String**| ID of the api client. | 
 **buyerID** | **String**| ID of the buyer. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeleteSupplierAssignment"></a>
# **DeleteSupplierAssignment**
> DeleteSupplierAssignment(apiClientID, supplierID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClients();

var apiClientID = "apiClientID_example"; // String | ID of the api client.

var supplierID = "supplierID_example"; // String | ID of the supplier.

apiInstance.DeleteSupplierAssignment(apiClientID, supplierID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientID** | **String**| ID of the api client. | 
 **supplierID** | **String**| ID of the supplier. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Get"></a>
# **Get**
> ApiClient Get(apiClientID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClients();

var apiClientID = "apiClientID_example"; // String | ID of the api client.

apiInstance.Get(apiClientID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientID** | **String**| ID of the api client. | 

### Return type

[**ApiClient**](ApiClient.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListApiClient List(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClients();

var opts = { 
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
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListApiClient**](ListApiClient.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListAssignments"></a>
# **ListAssignments**
> ListApiClientAssignment ListAssignments(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClients();

var opts = { 
  'apiClientID': "apiClientID_example", // String | ID of the api client.
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'supplierID': "supplierID_example", // String | ID of the supplier.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56 // Number | Number of results to return per page. Default: 20, max: 100.
};
apiInstance.ListAssignments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientID** | **String**| ID of the api client. | [optional] 
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **supplierID** | **String**| ID of the supplier. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListApiClientAssignment**](ListApiClientAssignment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> ApiClient Patch(apiClientID, partialApiClient)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClients();

var apiClientID = "apiClientID_example"; // String | ID of the api client.

var partialApiClient = new OrderCloud.ApiClient(); // ApiClient | 

apiInstance.Patch(apiClientID, partialApiClient).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientID** | **String**| ID of the api client. | 
 **partialApiClient** | [**ApiClient**](ApiClient.md)|  | 

### Return type

[**ApiClient**](ApiClient.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Save"></a>
# **Save**
> ApiClient Save(apiClientID, apiClient)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClients();

var apiClientID = "apiClientID_example"; // String | ID of the api client.

var apiClient = new OrderCloud.ApiClient(); // ApiClient | 

apiInstance.Save(apiClientID, apiClient).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientID** | **String**| ID of the api client. | 
 **apiClient** | [**ApiClient**](ApiClient.md)|  | 

### Return type

[**ApiClient**](ApiClient.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SaveAssignment"></a>
# **SaveAssignment**
> SaveAssignment(apiClientAssignment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApiClients();

var apiClientAssignment = new OrderCloud.ApiClientAssignment(); // ApiClientAssignment | 

apiInstance.SaveAssignment(apiClientAssignment).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiClientAssignment** | [**ApiClientAssignment**](ApiClientAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

