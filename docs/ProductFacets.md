# OrderCloud.ProductFacets

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](ProductFacets.md#Create) | **POST** /productfacets | 
[**Delete**](ProductFacets.md#Delete) | **DELETE** /productfacets/{productFacetID} | 
[**Get**](ProductFacets.md#Get) | **GET** /productfacets/{productFacetID} | 
[**List**](ProductFacets.md#List) | **GET** /productfacets | 
[**Patch**](ProductFacets.md#Patch) | **PATCH** /productfacets/{productFacetID} | 
[**Save**](ProductFacets.md#Save) | **PUT** /productfacets/{productFacetID} | 


<a name="Create"></a>
# **Create**
> ProductFacet Create(productFacet)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductFacets();

var productFacet = new OrderCloud.ProductFacet(); // ProductFacet | 

apiInstance.Create(productFacet).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFacet** | [**ProductFacet**](ProductFacet.md)|  | 

### Return type

[**ProductFacet**](ProductFacet.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(productFacetID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductFacets();

var productFacetID = "productFacetID_example"; // String | ID of the product facet.

apiInstance.Delete(productFacetID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFacetID** | **String**| ID of the product facet. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Get"></a>
# **Get**
> ProductFacet Get(productFacetID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductFacets();

var productFacetID = "productFacetID_example"; // String | ID of the product facet.

apiInstance.Get(productFacetID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFacetID** | **String**| ID of the product facet. | 

### Return type

[**ProductFacet**](ProductFacet.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListProductFacet List(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductFacets();

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

[**ListProductFacet**](ListProductFacet.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> ProductFacet Patch(productFacetID, partialProductFacet)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductFacets();

var productFacetID = "productFacetID_example"; // String | ID of the product facet.

var partialProductFacet = new OrderCloud.ProductFacet(); // ProductFacet | 

apiInstance.Patch(productFacetID, partialProductFacet).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFacetID** | **String**| ID of the product facet. | 
 **partialProductFacet** | [**ProductFacet**](ProductFacet.md)|  | 

### Return type

[**ProductFacet**](ProductFacet.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Save"></a>
# **Save**
> ProductFacet Save(productFacetID, productFacet)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ProductFacets();

var productFacetID = "productFacetID_example"; // String | ID of the product facet.

var productFacet = new OrderCloud.ProductFacet(); // ProductFacet | 

apiInstance.Save(productFacetID, productFacet).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFacetID** | **String**| ID of the product facet. | 
 **productFacet** | [**ProductFacet**](ProductFacet.md)|  | 

### Return type

[**ProductFacet**](ProductFacet.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

