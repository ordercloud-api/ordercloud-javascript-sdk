# OrderCloud.Suppliers

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](Suppliers.md#Create) | **POST** /suppliers | 
[**Delete**](Suppliers.md#Delete) | **DELETE** /suppliers/{supplierID} | 
[**Get**](Suppliers.md#Get) | **GET** /suppliers/{supplierID} | 
[**List**](Suppliers.md#List) | **GET** /suppliers | 
[**Patch**](Suppliers.md#Patch) | **PATCH** /suppliers/{supplierID} | 
[**Update**](Suppliers.md#Update) | **PUT** /suppliers/{supplierID} | 


<a name="Create"></a>
# **Create**
> Supplier Create(company)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Suppliers();

var company = new OrderCloud.Supplier(); // Supplier | 

apiInstance.Create(company).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | [**Supplier**](Supplier.md)|  | 

### Return type

[**Supplier**](Supplier.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(supplierID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Suppliers();

var supplierID = "supplierID_example"; // String | ID of the supplier.

apiInstance.Delete(supplierID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> Supplier Get(supplierID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Suppliers();

var supplierID = "supplierID_example"; // String | ID of the supplier.

apiInstance.Get(supplierID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 

### Return type

[**Supplier**](Supplier.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListSupplier List(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Suppliers();

var opts = { 
  'search': "search_example", // String | Search of the supplier.
  'searchOn': ["searchOn_example"], // [String] | Search on of the supplier.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the supplier.
  'page': 56, // Number | Page of the supplier.
  'pageSize': 56, // Number | Page size of the supplier.
  'filters': {key: "filters_example"} // {String: String} | Filters of the supplier.
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
 **search** | **String**| Search of the supplier. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the supplier. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the supplier. | [optional] 
 **page** | **Number**| Page of the supplier. | [optional] 
 **pageSize** | **Number**| Page size of the supplier. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the supplier. | [optional] 

### Return type

[**ListSupplier**](ListSupplier.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> Supplier Patch(supplierID, company)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Suppliers();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var company = new OrderCloud.Supplier(); // Supplier | 

apiInstance.Patch(supplierID, company).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **company** | [**Supplier**](Supplier.md)|  | 

### Return type

[**Supplier**](Supplier.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> Supplier Update(supplierID, company)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Suppliers();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var company = new OrderCloud.Supplier(); // Supplier | 

apiInstance.Update(supplierID, company).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **company** | [**Supplier**](Supplier.md)|  | 

### Return type

[**Supplier**](Supplier.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

