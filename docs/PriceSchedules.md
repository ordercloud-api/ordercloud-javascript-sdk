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
  'search': "search_example", // String | Search of the price schedule.
  'searchOn': ["searchOn_example"], // [String] | Search on of the price schedule.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the price schedule.
  'page': 56, // Number | Page of the price schedule.
  'pageSize': 56, // Number | Page size of the price schedule.
  'filters': {key: "filters_example"} // {String: String} | Filters of the price schedule.
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
 **search** | **String**| Search of the price schedule. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the price schedule. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the price schedule. | [optional] 
 **page** | **Number**| Page of the price schedule. | [optional] 
 **pageSize** | **Number**| Page size of the price schedule. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the price schedule. | [optional] 

### Return type

[**ListPriceSchedule**](ListPriceSchedule.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> PriceSchedule Patch(priceScheduleID, priceSchedule)



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

apiInstance.Patch(priceScheduleID, priceSchedule).then(function(data) {
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

