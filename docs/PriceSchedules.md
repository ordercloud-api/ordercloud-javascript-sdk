# OrderCloud.PriceSchedules

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](PriceSchedules.md#Create) | **POST** /priceschedules | 
[**Delete**](PriceSchedules.md#Delete) | **DELETE** /priceschedules/{priceScheduleID} | 
[**DeletePriceBreak**](PriceSchedules.md#DeletePriceBreak) | **DELETE** /priceschedules/{priceScheduleID}/PriceBreaks | 
[**Get**](PriceSchedules.md#Get) | **GET** /priceschedules/{priceScheduleID} | 
[**List**](PriceSchedules.md#List) | **GET** /priceschedules | 
[**Patch**](PriceSchedules.md#Patch) | **PATCH** /priceschedules/{priceScheduleID} | 
[**SavePriceBreak**](PriceSchedules.md#SavePriceBreak) | **POST** /priceschedules/{priceScheduleID}/PriceBreaks | 
[**Update**](PriceSchedules.md#Update) | **PUT** /priceschedules/{priceScheduleID} | 


<a name="Create"></a>
# **Create**
> PriceSchedule Create(priceSchedule)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceSchedules();

var priceSchedule = new OrderCloud.PriceSchedule(); // PriceSchedule | 

apiInstance.Create(priceSchedule).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceSchedule** | [**PriceSchedule**](PriceSchedule.md)|  | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(priceScheduleID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceSchedules();

var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.

apiInstance.Delete(priceScheduleID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeletePriceBreak"></a>
# **DeletePriceBreak**
> DeletePriceBreak(priceScheduleID, quantity)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceSchedules();

var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.

var quantity = 56; // Number | Quantity of the price schedule.

apiInstance.DeletePriceBreak(priceScheduleID, quantity).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 
 **quantity** | **Number**| Quantity of the price schedule. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Get"></a>
# **Get**
> PriceSchedule Get(priceScheduleID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceSchedules();

var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.

apiInstance.Get(priceScheduleID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListPriceSchedule List(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceSchedules();

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

[**ListPriceSchedule**](ListPriceSchedule.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> PriceSchedule Patch(priceScheduleID, partialPriceSchedule)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceSchedules();

var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.

var partialPriceSchedule = new OrderCloud.PriceSchedule(); // PriceSchedule | 

apiInstance.Patch(priceScheduleID, partialPriceSchedule).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 
 **partialPriceSchedule** | [**PriceSchedule**](PriceSchedule.md)|  | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SavePriceBreak"></a>
# **SavePriceBreak**
> PriceSchedule SavePriceBreak(priceScheduleID, priceBreak)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceSchedules();

var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.

var priceBreak = new OrderCloud.PriceBreak(); // PriceBreak | 

apiInstance.SavePriceBreak(priceScheduleID, priceBreak).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 
 **priceBreak** | [**PriceBreak**](PriceBreak.md)|  | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> PriceSchedule Update(priceScheduleID, priceSchedule)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PriceSchedules();

var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.

var priceSchedule = new OrderCloud.PriceSchedule(); // PriceSchedule | 

apiInstance.Update(priceScheduleID, priceSchedule).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 
 **priceSchedule** | [**PriceSchedule**](PriceSchedule.md)|  | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

