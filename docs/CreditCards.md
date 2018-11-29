# OrderCloud.CreditCards

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](CreditCards.md#callDelete) | **DELETE** /buyers/{buyerID}/creditcards/{creditCardID} | 
[**create**](CreditCards.md#create) | **POST** /buyers/{buyerID}/creditcards | 
[**deleteAssignment**](CreditCards.md#deleteAssignment) | **DELETE** /buyers/{buyerID}/creditcards/{creditCardID}/assignments | 
[**get**](CreditCards.md#get) | **GET** /buyers/{buyerID}/creditcards/{creditCardID} | 
[**list**](CreditCards.md#list) | **GET** /buyers/{buyerID}/creditcards | 
[**listAssignments**](CreditCards.md#listAssignments) | **GET** /buyers/{buyerID}/creditcards/assignments | 
[**patch**](CreditCards.md#patch) | **PATCH** /buyers/{buyerID}/creditcards/{creditCardID} | 
[**save**](CreditCards.md#save) | **PUT** /buyers/{buyerID}/creditcards/{creditCardID} | 
[**saveAssignment**](CreditCards.md#saveAssignment) | **POST** /buyers/{buyerID}/creditcards/assignments | 


<a name="callDelete"></a>
# **callDelete**
> callDelete(buyerID, creditCardID)



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

apiInstance.callDelete(buyerID, creditCardID).then(function() {
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

<a name="create"></a>
# **create**
> CreditCard create(buyerID, creditCard)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCards();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var creditCard = new OrderCloud.CreditCard(); // CreditCard | 

apiInstance.create(buyerID, creditCard).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCard** | [**CreditCard**](CreditCard.md)|  | 

### Return type

[**CreditCard**](CreditCard.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="deleteAssignment"></a>
# **deleteAssignment**
> deleteAssignment(buyerID, creditCardID, opts)



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
apiInstance.deleteAssignment(buyerID, creditCardID, opts).then(function() {
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

<a name="get"></a>
# **get**
> CreditCard get(buyerID, creditCardID)



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

apiInstance.get(buyerID, creditCardID).then(function(data) {
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

<a name="list"></a>
# **list**
> ListCreditCard list(buyerID, opts)



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
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
apiInstance.list(buyerID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListCreditCard**](ListCreditCard.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="listAssignments"></a>
# **listAssignments**
> ListCreditCardAssignment listAssignments(buyerID, opts)



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
  'level': "level_example", // String | Level of the credit card assignment. Possible values: User, Group, Company.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56 // Number | Number of results to return per page. Default: 20, max: 100.
};
apiInstance.listAssignments(buyerID, opts).then(function(data) {
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
 **level** | **String**| Level of the credit card assignment. Possible values: User, Group, Company. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListCreditCardAssignment**](ListCreditCardAssignment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="patch"></a>
# **patch**
> CreditCard patch(buyerID, creditCardID, partialCreditCard)



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

var partialCreditCard = new OrderCloud.CreditCard(); // CreditCard | 

apiInstance.patch(buyerID, creditCardID, partialCreditCard).then(function(data) {
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
 **partialCreditCard** | [**CreditCard**](CreditCard.md)|  | 

### Return type

[**CreditCard**](CreditCard.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="save"></a>
# **save**
> CreditCard save(buyerID, creditCardID, creditCard)



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

var creditCard = new OrderCloud.CreditCard(); // CreditCard | 

apiInstance.save(buyerID, creditCardID, creditCard).then(function(data) {
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
 **creditCard** | [**CreditCard**](CreditCard.md)|  | 

### Return type

[**CreditCard**](CreditCard.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="saveAssignment"></a>
# **saveAssignment**
> saveAssignment(buyerID, creditCardAssignment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CreditCards();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var creditCardAssignment = new OrderCloud.CreditCardAssignment(); // CreditCardAssignment | 

apiInstance.saveAssignment(buyerID, creditCardAssignment).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **creditCardAssignment** | [**CreditCardAssignment**](CreditCardAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

