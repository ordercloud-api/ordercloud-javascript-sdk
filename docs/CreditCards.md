# OrderCloud.CreditCards

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](CreditCards.md#Create) | **POST** /buyers/{buyerID}/creditcards | 
[**Delete**](CreditCards.md#Delete) | **DELETE** /buyers/{buyerID}/creditcards/{creditCardID} | 
[**DeleteAssignment**](CreditCards.md#DeleteAssignment) | **DELETE** /buyers/{buyerID}/creditcards/{creditCardID}/assignments | 
[**Get**](CreditCards.md#Get) | **GET** /buyers/{buyerID}/creditcards/{creditCardID} | 
[**List**](CreditCards.md#List) | **GET** /buyers/{buyerID}/creditcards | 
[**ListAssignments**](CreditCards.md#ListAssignments) | **GET** /buyers/{buyerID}/creditcards/assignments | 
[**Patch**](CreditCards.md#Patch) | **PATCH** /buyers/{buyerID}/creditcards/{creditCardID} | 
[**SaveAssignment**](CreditCards.md#SaveAssignment) | **POST** /buyers/{buyerID}/creditcards/assignments | 
[**Update**](CreditCards.md#Update) | **PUT** /buyers/{buyerID}/creditcards/{creditCardID} | 


<a name="Create"></a>
# **Create**
> CreditCard Create(buyerID, card)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCards();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var card = new OrderCloud.CreditCard(); // CreditCard | 

apiInstance.Create(buyerID, card).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **card** | [**CreditCard**](CreditCard.md)|  | 

### Return type

[**CreditCard**](CreditCard.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(buyerID, creditCardID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCards();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var creditCardID = "creditCardID_example"; // String | ID of the credit card.

apiInstance.Delete(buyerID, creditCardID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCardID** | **String**| ID of the credit card. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeleteAssignment"></a>
# **DeleteAssignment**
> DeleteAssignment(buyerID, creditCardID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCards();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var creditCardID = "creditCardID_example"; // String | ID of the credit card.

var opts = { 
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example" // String | ID of the user group.
};
apiInstance.DeleteAssignment(buyerID, creditCardID, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCardID** | **String**| ID of the credit card. | 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Get"></a>
# **Get**
> CreditCard Get(buyerID, creditCardID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCards();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var creditCardID = "creditCardID_example"; // String | ID of the credit card.

apiInstance.Get(buyerID, creditCardID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCardID** | **String**| ID of the credit card. | 

### Return type

[**CreditCard**](CreditCard.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListCreditCard List(buyerID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCards();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var opts = { 
  'search': "search_example", // String | Search of the credit card.
  'searchOn': ["searchOn_example"], // [String] | Search on of the credit card.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the credit card.
  'page': 56, // Number | Page of the credit card.
  'pageSize': 56, // Number | Page size of the credit card.
  'filters': {key: "filters_example"} // {String: String} | Filters of the credit card.
};
apiInstance.List(buyerID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **search** | **String**| Search of the credit card. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the credit card. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the credit card. | [optional] 
 **page** | **Number**| Page of the credit card. | [optional] 
 **pageSize** | **Number**| Page size of the credit card. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the credit card. | [optional] 

### Return type

[**ListCreditCard**](ListCreditCard.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListAssignments"></a>
# **ListAssignments**
> ListCreditCardAssignment ListAssignments(buyerID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCards();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var opts = { 
  'creditCardID': "creditCardID_example", // String | ID of the credit card.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the credit card.
  'page': 56, // Number | Page of the credit card.
  'pageSize': 56 // Number | Page size of the credit card.
};
apiInstance.ListAssignments(buyerID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCardID** | **String**| ID of the credit card. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **level** | **String**| Level of the credit card. | [optional] 
 **page** | **Number**| Page of the credit card. | [optional] 
 **pageSize** | **Number**| Page size of the credit card. | [optional] 

### Return type

[**ListCreditCardAssignment**](ListCreditCardAssignment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> CreditCard Patch(buyerID, creditCardID, card)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCards();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var creditCardID = "creditCardID_example"; // String | ID of the credit card.

var card = new OrderCloud.CreditCard(); // CreditCard | 

apiInstance.Patch(buyerID, creditCardID, card).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCardID** | **String**| ID of the credit card. | 
 **card** | [**CreditCard**](CreditCard.md)|  | 

### Return type

[**CreditCard**](CreditCard.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SaveAssignment"></a>
# **SaveAssignment**
> SaveAssignment(buyerID, assignment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCards();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var assignment = new OrderCloud.CreditCardAssignment(); // CreditCardAssignment | 

apiInstance.SaveAssignment(buyerID, assignment).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **assignment** | [**CreditCardAssignment**](CreditCardAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> CreditCard Update(buyerID, creditCardID, card)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCards();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var creditCardID = "creditCardID_example"; // String | ID of the credit card.

var card = new OrderCloud.CreditCard(); // CreditCard | 

apiInstance.Update(buyerID, creditCardID, card).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCardID** | **String**| ID of the credit card. | 
 **card** | [**CreditCard**](CreditCard.md)|  | 

### Return type

[**CreditCard**](CreditCard.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

