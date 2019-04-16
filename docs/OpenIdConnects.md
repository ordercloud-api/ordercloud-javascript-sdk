# OrderCloud.OpenIdConnects

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](OpenIdConnects.md#Create) | **POST** /openidconnects | 
[**Delete**](OpenIdConnects.md#Delete) | **DELETE** /openidconnects/{openidconnectID} | 
[**Get**](OpenIdConnects.md#Get) | **GET** /openidconnects/{openidconnectID} | 
[**List**](OpenIdConnects.md#List) | **GET** /openidconnects | 
[**Patch**](OpenIdConnects.md#Patch) | **PATCH** /openidconnects/{openidconnectID} | 
[**Save**](OpenIdConnects.md#Save) | **PUT** /openidconnects/{openidconnectID} | 


<a name="Create"></a>
# **Create**
> OpenIdConnect Create(openIdConnect)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OpenIdConnects();

var openIdConnect = new OrderCloud.OpenIdConnect(); // OpenIdConnect | 

apiInstance.Create(openIdConnect).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **openIdConnect** | [**OpenIdConnect**](OpenIdConnect.md)|  | 

### Return type

[**OpenIdConnect**](OpenIdConnect.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(openidconnectID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OpenIdConnects();

var openidconnectID = "openidconnectID_example"; // String | ID of the openidconnect.

apiInstance.Delete(openidconnectID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **openidconnectID** | **String**| ID of the openidconnect. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Get"></a>
# **Get**
> OpenIdConnect Get(openidconnectID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OpenIdConnects();

var openidconnectID = "openidconnectID_example"; // String | ID of the openidconnect.

apiInstance.Get(openidconnectID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **openidconnectID** | **String**| ID of the openidconnect. | 

### Return type

[**OpenIdConnect**](OpenIdConnect.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListOpenIdConnect List(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OpenIdConnects();

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

[**ListOpenIdConnect**](ListOpenIdConnect.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> OpenIdConnect Patch(openidconnectID, partialOpenIdConnect)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OpenIdConnects();

var openidconnectID = "openidconnectID_example"; // String | ID of the openidconnect.

var partialOpenIdConnect = new OrderCloud.OpenIdConnect(); // OpenIdConnect | 

apiInstance.Patch(openidconnectID, partialOpenIdConnect).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **openidconnectID** | **String**| ID of the openidconnect. | 
 **partialOpenIdConnect** | [**OpenIdConnect**](OpenIdConnect.md)|  | 

### Return type

[**OpenIdConnect**](OpenIdConnect.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Save"></a>
# **Save**
> OpenIdConnect Save(openidconnectID, openIdConnect)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.OpenIdConnects();

var openidconnectID = "openidconnectID_example"; // String | ID of the openidconnect.

var openIdConnect = new OrderCloud.OpenIdConnect(); // OpenIdConnect | 

apiInstance.Save(openidconnectID, openIdConnect).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **openidconnectID** | **String**| ID of the openidconnect. | 
 **openIdConnect** | [**OpenIdConnect**](OpenIdConnect.md)|  | 

### Return type

[**OpenIdConnect**](OpenIdConnect.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

