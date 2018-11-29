# OrderCloud.Payments

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](Payments.md#callDelete) | **DELETE** /orders/{direction}/{orderID}/payments/{paymentID} | 
[**create**](Payments.md#create) | **POST** /orders/{direction}/{orderID}/payments | 
[**createTransaction**](Payments.md#createTransaction) | **POST** /orders/{direction}/{orderID}/payments/{paymentID}/transactions | 
[**deleteTransaction**](Payments.md#deleteTransaction) | **DELETE** /orders/{direction}/{orderID}/payments/{paymentID}/transactions/{transactionID} | 
[**get**](Payments.md#get) | **GET** /orders/{direction}/{orderID}/payments/{paymentID} | 
[**list**](Payments.md#list) | **GET** /orders/{direction}/{orderID}/payments | 
[**patch**](Payments.md#patch) | **PATCH** /orders/{direction}/{orderID}/payments/{paymentID} | 


<a name="callDelete"></a>
# **callDelete**
> callDelete(direction, orderID, paymentID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Payments();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

apiInstance.callDelete(direction, orderID, paymentID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="create"></a>
# **create**
> Payment create(direction, orderID, payment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Payments();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var payment = new OrderCloud.Payment(); // Payment | 

apiInstance.create(direction, orderID, payment).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **payment** | [**Payment**](Payment.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="createTransaction"></a>
# **createTransaction**
> Payment createTransaction(direction, orderID, paymentID, paymentTransaction)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Payments();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

var paymentTransaction = new OrderCloud.PaymentTransaction(); // PaymentTransaction | 

apiInstance.createTransaction(direction, orderID, paymentID, paymentTransaction).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 
 **paymentTransaction** | [**PaymentTransaction**](PaymentTransaction.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="deleteTransaction"></a>
# **deleteTransaction**
> deleteTransaction(direction, orderID, paymentID, transactionID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Payments();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

var transactionID = "transactionID_example"; // String | ID of the transaction.

apiInstance.deleteTransaction(direction, orderID, paymentID, transactionID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 
 **transactionID** | **String**| ID of the transaction. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="get"></a>
# **get**
> Payment get(direction, orderID, paymentID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Payments();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

apiInstance.get(direction, orderID, paymentID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 

### Return type

[**Payment**](Payment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="list"></a>
# **list**
> ListPayment list(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Payments();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var opts = { 
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
apiInstance.list(direction, orderID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListPayment**](ListPayment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="patch"></a>
# **patch**
> Payment patch(direction, orderID, paymentID, partialPayment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Payments();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

var partialPayment = new OrderCloud.Payment(); // Payment | 

apiInstance.patch(direction, orderID, paymentID, partialPayment).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 
 **partialPayment** | [**Payment**](Payment.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

