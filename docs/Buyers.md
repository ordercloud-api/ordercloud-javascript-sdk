# OrderCloud.Buyers

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](Buyers.md#Create) | **POST** /buyers | 
[**Delete**](Buyers.md#Delete) | **DELETE** /buyers/{buyerID} | 
[**Get**](Buyers.md#Get) | **GET** /buyers/{buyerID} | 
[**List**](Buyers.md#List) | **GET** /buyers | 
[**Patch**](Buyers.md#Patch) | **PATCH** /buyers/{buyerID} | 
[**Update**](Buyers.md#Update) | **PUT** /buyers/{buyerID} | 


<a name="Create"></a>
# **Create**
> Buyer Create(company)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Buyers();

var company = new OrderCloud.Buyer(); // Buyer | 

apiInstance.Create(company).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | [**Buyer**](Buyer.md)|  | 

### Return type

[**Buyer**](Buyer.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(buyerID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Buyers();

var buyerID = "buyerID_example"; // String | ID of the buyer.

apiInstance.Delete(buyerID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Get"></a>
# **Get**
> Buyer Get(buyerID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Buyers();

var buyerID = "buyerID_example"; // String | ID of the buyer.

apiInstance.Get(buyerID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 

### Return type

[**Buyer**](Buyer.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListBuyer List(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Buyers();

var opts = { 
  'search': "search_example", // String | Search of the buyer.
  'searchOn': ["searchOn_example"], // [String] | Search on of the buyer.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the buyer.
  'page': 56, // Number | Page of the buyer.
  'pageSize': 56, // Number | Page size of the buyer.
  'filters': {key: "filters_example"} // {String: String} | Filters of the buyer.
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
 **search** | **String**| Search of the buyer. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the buyer. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the buyer. | [optional] 
 **page** | **Number**| Page of the buyer. | [optional] 
 **pageSize** | **Number**| Page size of the buyer. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the buyer. | [optional] 

### Return type

[**ListBuyer**](ListBuyer.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> Buyer Patch(buyerID, company)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Buyers();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var company = new OrderCloud.Buyer(); // Buyer | 

apiInstance.Patch(buyerID, company).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **company** | [**Buyer**](Buyer.md)|  | 

### Return type

[**Buyer**](Buyer.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> Buyer Update(buyerID, company)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Buyers();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var company = new OrderCloud.Buyer(); // Buyer | 

apiInstance.Update(buyerID, company).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **company** | [**Buyer**](Buyer.md)|  | 

### Return type

[**Buyer**](Buyer.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

