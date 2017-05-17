# OrderCloud.ImpersonationConfigs

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](ImpersonationConfigs.md#Create) | **POST** /impersonationconfig | 
[**Delete**](ImpersonationConfigs.md#Delete) | **DELETE** /impersonationconfig/{impersonationConfigID} | 
[**Get**](ImpersonationConfigs.md#Get) | **GET** /impersonationconfig/{impersonationConfigID} | 
[**List**](ImpersonationConfigs.md#List) | **GET** /impersonationconfig | 
[**Patch**](ImpersonationConfigs.md#Patch) | **PATCH** /impersonationconfig/{impersonationConfigID} | 
[**Update**](ImpersonationConfigs.md#Update) | **PUT** /impersonationconfig/{impersonationConfigID} | 


<a name="Create"></a>
# **Create**
> ImpersonationConfig Create(impersonationConfig)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var impersonationConfig = new OrderCloud.ImpersonationConfig(); // ImpersonationConfig | 

apiInstance.Create(impersonationConfig).then(function(data) {
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

<a name="Delete"></a>
# **Delete**
> Delete(impersonationConfigID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var impersonationConfigID = "impersonationConfigID_example"; // String | ID of the impersonation config.

apiInstance.Delete(impersonationConfigID).then(function() {
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

<a name="Get"></a>
# **Get**
> ImpersonationConfig Get(impersonationConfigID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var impersonationConfigID = "impersonationConfigID_example"; // String | ID of the impersonation config.

apiInstance.Get(impersonationConfigID).then(function(data) {
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

<a name="List"></a>
# **List**
> ListImpersonationConfig List(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var opts = { 
  'search': "search_example", // String | Search of the impersonation config.
  'searchOn': ["searchOn_example"], // [String] | Search on of the impersonation config.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the impersonation config.
  'page': 56, // Number | Page of the impersonation config.
  'pageSize': 56, // Number | Page size of the impersonation config.
  'filters': {key: "filters_example"} // {String: String} | Filters of the impersonation config.
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
 **search** | **String**| Search of the impersonation config. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the impersonation config. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the impersonation config. | [optional] 
 **page** | **Number**| Page of the impersonation config. | [optional] 
 **pageSize** | **Number**| Page size of the impersonation config. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the impersonation config. | [optional] 

### Return type

[**ListImpersonationConfig**](ListImpersonationConfig.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> ImpersonationConfig Patch(impersonationConfigID, impersonationConfig)



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

apiInstance.Patch(impersonationConfigID, impersonationConfig).then(function(data) {
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

<a name="Update"></a>
# **Update**
> ImpersonationConfig Update(impersonationConfigID, impersonationConfig)



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

apiInstance.Update(impersonationConfigID, impersonationConfig).then(function(data) {
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

