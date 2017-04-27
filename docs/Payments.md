# OrderCloud.Payments

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](Payments.md#Create) | **POST** /orders/{direction}/{orderID}/payments | 
[**CreateTransaction**](Payments.md#CreateTransaction) | **POST** /orders/{direction}/{orderID}/payments/{paymentID}/transactions | 
[**Delete**](Payments.md#Delete) | **DELETE** /orders/{direction}/{orderID}/payments/{paymentID} | 
[**DeleteTransaction**](Payments.md#DeleteTransaction) | **DELETE** /orders/{direction}/{orderID}/payments/{paymentID}/transactions/{transactionID} | 
[**Get**](Payments.md#Get) | **GET** /orders/{direction}/{orderID}/payments/{paymentID} | 
[**List**](Payments.md#List) | **GET** /orders/{direction}/{orderID}/payments | 
[**Patch**](Payments.md#Patch) | **PATCH** /orders/{direction}/{orderID}/payments/{paymentID} | 


<a name="Create"></a>
# **Create**
> Payment Create(direction, orderID, payment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Payments();

var direction = "direction_example"; // String | Direction of the payment. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var payment = new OrderCloud.Payment(); // Payment | 

apiInstance.Create(direction, orderID, payment).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the payment. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **payment** | [**Payment**](Payment.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="CreateTransaction"></a>
# **CreateTransaction**
> Payment CreateTransaction(direction, orderID, paymentID, transaction)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Payments();

var direction = "direction_example"; // String | Direction of the payment. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

var transaction = new OrderCloud.PaymentTransaction(); // PaymentTransaction | 

apiInstance.CreateTransaction(direction, orderID, paymentID, transaction).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the payment. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 
 **transaction** | [**PaymentTransaction**](PaymentTransaction.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(direction, orderID, paymentID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Payments();

var direction = "direction_example"; // String | Direction of the payment. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

apiInstance.Delete(direction, orderID, paymentID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the payment. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeleteTransaction"></a>
# **DeleteTransaction**
> DeleteTransaction(direction, orderID, paymentID, transactionID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Payments();

var direction = "direction_example"; // String | Direction of the payment. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

var transactionID = "transactionID_example"; // String | ID of the transaction.

apiInstance.DeleteTransaction(direction, orderID, paymentID, transactionID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the payment. Possible values: Incoming, Outgoing. | 
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

<a name="Get"></a>
# **Get**
> Payment Get(direction, orderID, paymentID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Payments();

var direction = "direction_example"; // String | Direction of the payment. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

apiInstance.Get(direction, orderID, paymentID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the payment. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 

### Return type

[**Payment**](Payment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListPayment List(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Payments();

var direction = "direction_example"; // String | Direction of the payment. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var opts = { 
  'search': "search_example", // String | Search of the payment.
  'searchOn': ["searchOn_example"], // [String] | Search on of the payment.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the payment.
  'page': 56, // Number | Page of the payment.
  'pageSize': 56, // Number | Page size of the payment.
  'filters': {key: "filters_example"} // {String: String} | Filters of the payment.
};
apiInstance.List(direction, orderID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the payment. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **search** | **String**| Search of the payment. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the payment. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the payment. | [optional] 
 **page** | **Number**| Page of the payment. | [optional] 
 **pageSize** | **Number**| Page size of the payment. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the payment. | [optional] 

### Return type

[**ListPayment**](ListPayment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> Payment Patch(direction, orderID, paymentID, partialPayment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Payments();

var direction = "direction_example"; // String | Direction of the payment. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

var partialPayment = new OrderCloud.Payment(); // Payment | 

apiInstance.Patch(direction, orderID, paymentID, partialPayment).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the payment. Possible values: Incoming, Outgoing. | 
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

