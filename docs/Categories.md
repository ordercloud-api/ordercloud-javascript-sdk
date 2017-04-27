# OrderCloud.Categories

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](Categories.md#Create) | **POST** /catalogs/{catalogID}/categories | 
[**Delete**](Categories.md#Delete) | **DELETE** /catalogs/{catalogID}/categories/{categoryID} | 
[**DeleteAssignment**](Categories.md#DeleteAssignment) | **DELETE** /catalogs/{catalogID}/categories/{categoryID}/assignments | 
[**DeleteProductAssignment**](Categories.md#DeleteProductAssignment) | **DELETE** /catalogs/{catalogID}/categories/{categoryID}/productassignments/{productID} | 
[**Get**](Categories.md#Get) | **GET** /catalogs/{catalogID}/categories/{categoryID} | 
[**List**](Categories.md#List) | **GET** /catalogs/{catalogID}/categories | 
[**ListAssignments**](Categories.md#ListAssignments) | **GET** /catalogs/{catalogID}/categories/assignments | 
[**ListProductAssignments**](Categories.md#ListProductAssignments) | **GET** /catalogs/{catalogID}/categories/productassignments | 
[**Patch**](Categories.md#Patch) | **PATCH** /catalogs/{catalogID}/categories/{categoryID} | 
[**SaveAssignment**](Categories.md#SaveAssignment) | **POST** /catalogs/{catalogID}/categories/assignments | 
[**SaveProductAssignment**](Categories.md#SaveProductAssignment) | **POST** /catalogs/{catalogID}/categories/productassignments | 
[**Update**](Categories.md#Update) | **PUT** /catalogs/{catalogID}/categories/{categoryID} | 


<a name="Create"></a>
# **Create**
> Category Create(catalogID, category)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Categories();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var category = new OrderCloud.Category(); // Category | 

apiInstance.Create(catalogID, category).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **category** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(catalogID, categoryID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Categories();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var categoryID = "categoryID_example"; // String | ID of the category.

apiInstance.Delete(catalogID, categoryID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeleteAssignment"></a>
# **DeleteAssignment**
> DeleteAssignment(catalogID, categoryID, buyerID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Categories();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var categoryID = "categoryID_example"; // String | ID of the category.

var buyerID = "buyerID_example"; // String | ID of the buyer.

var opts = { 
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example" // String | ID of the user group.
};
apiInstance.DeleteAssignment(catalogID, categoryID, buyerID, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 
 **buyerID** | **String**| ID of the buyer. | 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeleteProductAssignment"></a>
# **DeleteProductAssignment**
> DeleteProductAssignment(catalogID, categoryID, productID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Categories();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var categoryID = "categoryID_example"; // String | ID of the category.

var productID = "productID_example"; // String | ID of the product.

apiInstance.DeleteProductAssignment(catalogID, categoryID, productID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 
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
> Category Get(catalogID, categoryID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Categories();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var categoryID = "categoryID_example"; // String | ID of the category.

apiInstance.Get(catalogID, categoryID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 

### Return type

[**Category**](Category.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListCategory List(catalogID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Categories();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var opts = { 
  'depth': "depth_example", // String | Depth of the category.
  'search': "search_example", // String | Search of the category.
  'searchOn': ["searchOn_example"], // [String] | Search on of the category.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the category.
  'page': 56, // Number | Page of the category.
  'pageSize': 56, // Number | Page size of the category.
  'filters': {key: "filters_example"} // {String: String} | Filters of the category.
};
apiInstance.List(catalogID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **depth** | **String**| Depth of the category. | [optional] 
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

<a name="ListAssignments"></a>
# **ListAssignments**
> ListCategoryAssignment ListAssignments(catalogID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Categories();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var opts = { 
  'categoryID': "categoryID_example", // String | ID of the category.
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the category.
  'page': 56, // Number | Page of the category.
  'pageSize': 56 // Number | Page size of the category.
};
apiInstance.ListAssignments(catalogID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | [optional] 
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **level** | **String**| Level of the category. | [optional] 
 **page** | **Number**| Page of the category. | [optional] 
 **pageSize** | **Number**| Page size of the category. | [optional] 

### Return type

[**ListCategoryAssignment**](ListCategoryAssignment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListProductAssignments"></a>
# **ListProductAssignments**
> ListCategoryProductAssignment ListProductAssignments(catalogID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Categories();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var opts = { 
  'categoryID': "categoryID_example", // String | ID of the category.
  'productID': "productID_example", // String | ID of the product.
  'page': 56, // Number | Page of the category.
  'pageSize': 56 // Number | Page size of the category.
};
apiInstance.ListProductAssignments(catalogID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | [optional] 
 **productID** | **String**| ID of the product. | [optional] 
 **page** | **Number**| Page of the category. | [optional] 
 **pageSize** | **Number**| Page size of the category. | [optional] 

### Return type

[**ListCategoryProductAssignment**](ListCategoryProductAssignment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> Category Patch(catalogID, categoryID, category)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Categories();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var categoryID = "categoryID_example"; // String | ID of the category.

var category = new OrderCloud.Category(); // Category | 

apiInstance.Patch(catalogID, categoryID, category).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 
 **category** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SaveAssignment"></a>
# **SaveAssignment**
> SaveAssignment(catalogID, categoryAssignment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Categories();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var categoryAssignment = new OrderCloud.CategoryAssignment(); // CategoryAssignment | 

apiInstance.SaveAssignment(catalogID, categoryAssignment).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryAssignment** | [**CategoryAssignment**](CategoryAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SaveProductAssignment"></a>
# **SaveProductAssignment**
> SaveProductAssignment(catalogID, productAssignment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Categories();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var productAssignment = new OrderCloud.CategoryProductAssignment(); // CategoryProductAssignment | 

apiInstance.SaveProductAssignment(catalogID, productAssignment).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **productAssignment** | [**CategoryProductAssignment**](CategoryProductAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> Category Update(catalogID, categoryID, category)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Categories();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var categoryID = "categoryID_example"; // String | ID of the category.

var category = new OrderCloud.Category(); // Category | 

apiInstance.Update(catalogID, categoryID, category).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 
 **category** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

