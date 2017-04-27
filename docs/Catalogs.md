# OrderCloud.Catalogs

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](Catalogs.md#Create) | **POST** /catalogs | 
[**Delete**](Catalogs.md#Delete) | **DELETE** /catalogs/{catalogID} | 
[**DeleteAssignment**](Catalogs.md#DeleteAssignment) | **DELETE** /catalogs/{catalogID}/assignments | 
[**DeleteProductAssignment**](Catalogs.md#DeleteProductAssignment) | **DELETE** /catalogs/{catalogID}/productassignments/{productID} | 
[**Get**](Catalogs.md#Get) | **GET** /catalogs/{catalogID} | 
[**List**](Catalogs.md#List) | **GET** /catalogs | 
[**ListAssignments**](Catalogs.md#ListAssignments) | **GET** /catalogs/assignments | 
[**ListProductAssignments**](Catalogs.md#ListProductAssignments) | **GET** /catalogs/productassignments | 
[**Patch**](Catalogs.md#Patch) | **PATCH** /catalogs/{catalogID} | 
[**SaveAssignment**](Catalogs.md#SaveAssignment) | **POST** /catalogs/assignments | 
[**SaveProductAssignment**](Catalogs.md#SaveProductAssignment) | **POST** /catalogs/productassignments | 
[**Update**](Catalogs.md#Update) | **PUT** /catalogs/{catalogID} | 


<a name="Create"></a>
# **Create**
> Catalog Create(catalog)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Catalogs();

var catalog = new OrderCloud.Catalog(); // Catalog | 

apiInstance.Create(catalog).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog** | [**Catalog**](Catalog.md)|  | 

### Return type

[**Catalog**](Catalog.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(catalogID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Catalogs();

var catalogID = "catalogID_example"; // String | ID of the catalog.

apiInstance.Delete(catalogID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeleteAssignment"></a>
# **DeleteAssignment**
> DeleteAssignment(catalogID, buyerID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Catalogs();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var buyerID = "buyerID_example"; // String | ID of the buyer.

apiInstance.DeleteAssignment(catalogID, buyerID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **buyerID** | **String**| ID of the buyer. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeleteProductAssignment"></a>
# **DeleteProductAssignment**
> DeleteProductAssignment(catalogID, productID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Catalogs();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var productID = "productID_example"; // String | ID of the product.

apiInstance.DeleteProductAssignment(catalogID, productID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **productID** | **String**| ID of the product. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Get"></a>
# **Get**
> Catalog Get(catalogID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Catalogs();

var catalogID = "catalogID_example"; // String | ID of the catalog.

apiInstance.Get(catalogID).then(function(data) {
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

<a name="List"></a>
# **List**
> ListCatalog List(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Catalogs();

var opts = { 
  'search': "search_example", // String | Search of the catalog.
  'searchOn': ["searchOn_example"], // [String] | Search on of the catalog.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the catalog.
  'page': 56, // Number | Page of the catalog.
  'pageSize': 56, // Number | Page size of the catalog.
  'filters': {key: "filters_example"} // {String: String} | Filters of the catalog.
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

<a name="ListAssignments"></a>
# **ListAssignments**
> ListCatalogAssignment ListAssignments(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Catalogs();

var opts = { 
  'catalogID': "catalogID_example", // String | ID of the catalog.
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'page': 56, // Number | Page of the catalog.
  'pageSize': 56 // Number | Page size of the catalog.
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
 **catalogID** | **String**| ID of the catalog. | [optional] 
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **page** | **Number**| Page of the catalog. | [optional] 
 **pageSize** | **Number**| Page size of the catalog. | [optional] 

### Return type

[**ListCatalogAssignment**](ListCatalogAssignment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListProductAssignments"></a>
# **ListProductAssignments**
> ListProductCatalogAssignment ListProductAssignments(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Catalogs();

var opts = { 
  'catalogID': "catalogID_example", // String | ID of the catalog.
  'productID': "productID_example", // String | ID of the product.
  'page': 56, // Number | Page of the catalog.
  'pageSize': 56 // Number | Page size of the catalog.
};
apiInstance.ListProductAssignments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | [optional] 
 **productID** | **String**| ID of the product. | [optional] 
 **page** | **Number**| Page of the catalog. | [optional] 
 **pageSize** | **Number**| Page size of the catalog. | [optional] 

### Return type

[**ListProductCatalogAssignment**](ListProductCatalogAssignment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> Catalog Patch(catalogID, partialCatalog)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Catalogs();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var partialCatalog = new OrderCloud.Catalog(); // Catalog | 

apiInstance.Patch(catalogID, partialCatalog).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **partialCatalog** | [**Catalog**](Catalog.md)|  | 

### Return type

[**Catalog**](Catalog.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SaveAssignment"></a>
# **SaveAssignment**
> SaveAssignment(assignment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Catalogs();

var assignment = new OrderCloud.CatalogAssignment(); // CatalogAssignment | 

apiInstance.SaveAssignment(assignment).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignment** | [**CatalogAssignment**](CatalogAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SaveProductAssignment"></a>
# **SaveProductAssignment**
> SaveProductAssignment(productAssignment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Catalogs();

var productAssignment = new OrderCloud.ProductCatalogAssignment(); // ProductCatalogAssignment | 

apiInstance.SaveProductAssignment(productAssignment).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productAssignment** | [**ProductCatalogAssignment**](ProductCatalogAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> Catalog Update(catalogID, catalog)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Catalogs();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var catalog = new OrderCloud.Catalog(); // Catalog | 

apiInstance.Update(catalogID, catalog).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **catalog** | [**Catalog**](Catalog.md)|  | 

### Return type

[**Catalog**](Catalog.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

