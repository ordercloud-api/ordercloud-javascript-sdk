# OrderCloud.ImpersonationConfigs

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](ImpersonationConfigs.md#callDelete) | **DELETE** /impersonationconfig/{impersonationConfigID} | 
[**create**](ImpersonationConfigs.md#create) | **POST** /impersonationconfig | 
[**get**](ImpersonationConfigs.md#get) | **GET** /impersonationconfig/{impersonationConfigID} | 
[**list**](ImpersonationConfigs.md#list) | **GET** /impersonationconfig | 
[**patch**](ImpersonationConfigs.md#patch) | **PATCH** /impersonationconfig/{impersonationConfigID} | 
[**save**](ImpersonationConfigs.md#save) | **PUT** /impersonationconfig/{impersonationConfigID} | 


<a name="callDelete"></a>
# **callDelete**
> callDelete(impersonationConfigID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var impersonationConfigID = "impersonationConfigID_example"; // String | ID of the impersonation config.

apiInstance.callDelete(impersonationConfigID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfigID** | **String**| ID of the impersonation config. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="create"></a>
# **create**
> ImpersonationConfig create(impersonationConfig)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var impersonationConfig = new OrderCloud.ImpersonationConfig(); // ImpersonationConfig | 

apiInstance.create(impersonationConfig).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfig** | [**ImpersonationConfig**](ImpersonationConfig.md)|  | 

### Return type

[**ImpersonationConfig**](ImpersonationConfig.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="get"></a>
# **get**
> ImpersonationConfig get(impersonationConfigID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var impersonationConfigID = "impersonationConfigID_example"; // String | ID of the impersonation config.

apiInstance.get(impersonationConfigID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfigID** | **String**| ID of the impersonation config. | 

### Return type

[**ImpersonationConfig**](ImpersonationConfig.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="list"></a>
# **list**
> ListImpersonationConfig list(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var opts = { 
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
apiInstance.list(opts).then(function(data) {
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

[**ListImpersonationConfig**](ListImpersonationConfig.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="patch"></a>
# **patch**
> ImpersonationConfig patch(impersonationConfigID, partialImpersonationConfig)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var impersonationConfigID = "impersonationConfigID_example"; // String | ID of the impersonation config.

var partialImpersonationConfig = new OrderCloud.ImpersonationConfig(); // ImpersonationConfig | 

apiInstance.patch(impersonationConfigID, partialImpersonationConfig).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfigID** | **String**| ID of the impersonation config. | 
 **partialImpersonationConfig** | [**ImpersonationConfig**](ImpersonationConfig.md)|  | 

### Return type

[**ImpersonationConfig**](ImpersonationConfig.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="save"></a>
# **save**
> ImpersonationConfig save(impersonationConfigID, impersonationConfig)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var impersonationConfigID = "impersonationConfigID_example"; // String | ID of the impersonation config.

var impersonationConfig = new OrderCloud.ImpersonationConfig(); // ImpersonationConfig | 

apiInstance.save(impersonationConfigID, impersonationConfig).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfigID** | **String**| ID of the impersonation config. | 
 **impersonationConfig** | [**ImpersonationConfig**](ImpersonationConfig.md)|  | 

### Return type

[**ImpersonationConfig**](ImpersonationConfig.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

