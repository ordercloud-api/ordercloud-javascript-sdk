# OrderCloud.Webhooks

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](Webhooks.md#Create) | **POST** /webhooks | 
[**Delete**](Webhooks.md#Delete) | **DELETE** /webhooks/{webhookID} | 
[**Get**](Webhooks.md#Get) | **GET** /webhooks/{webhookID} | 
[**List**](Webhooks.md#List) | **GET** /webhooks | 
[**Patch**](Webhooks.md#Patch) | **PATCH** /webhooks/{webhookID} | 
[**Save**](Webhooks.md#Save) | **PUT** /webhooks/{webhookID} | 


<a name="Create"></a>
# **Create**
> Webhook Create(webhook)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Webhooks();

var webhook = new OrderCloud.Webhook(); // Webhook | 

apiInstance.Create(webhook).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook** | [**Webhook**](Webhook.md)|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(webhookID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Webhooks();

var webhookID = "webhookID_example"; // String | ID of the webhook.

apiInstance.Delete(webhookID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookID** | **String**| ID of the webhook. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Get"></a>
# **Get**
> Webhook Get(webhookID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Webhooks();

var webhookID = "webhookID_example"; // String | ID of the webhook.

apiInstance.Get(webhookID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookID** | **String**| ID of the webhook. | 

### Return type

[**Webhook**](Webhook.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListWebhook List(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Webhooks();

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

[**ListWebhook**](ListWebhook.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> Webhook Patch(webhookID, partialWebhook)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Webhooks();

var webhookID = "webhookID_example"; // String | ID of the webhook.

var partialWebhook = new OrderCloud.Webhook(); // Webhook | 

apiInstance.Patch(webhookID, partialWebhook).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookID** | **String**| ID of the webhook. | 
 **partialWebhook** | [**Webhook**](Webhook.md)|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Save"></a>
# **Save**
> Webhook Save(webhookID, webhook)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Webhooks();

var webhookID = "webhookID_example"; // String | ID of the webhook.

var webhook = new OrderCloud.Webhook(); // Webhook | 

apiInstance.Save(webhookID, webhook).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookID** | **String**| ID of the webhook. | 
 **webhook** | [**Webhook**](Webhook.md)|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

