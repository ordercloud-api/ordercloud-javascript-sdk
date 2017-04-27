# OrderCloud.MessageSenders

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteAssignment**](MessageSenders.md#DeleteAssignment) | **DELETE** /MessageSenders/{messageSenderID}/assignments | 
[**Get**](MessageSenders.md#Get) | **GET** /MessageSenders/{messageSenderID} | 
[**List**](MessageSenders.md#List) | **GET** /MessageSenders | 
[**ListAssignments**](MessageSenders.md#ListAssignments) | **GET** /MessageSenders/assignments | 
[**ListCCListenerAssignments**](MessageSenders.md#ListCCListenerAssignments) | **GET** /MessageSenders/CCListenerAssignments | 
[**SaveAssignment**](MessageSenders.md#SaveAssignment) | **POST** /MessageSenders/assignments | 
[**SaveCCListenerAssignment**](MessageSenders.md#SaveCCListenerAssignment) | **POST** /MessageSenders/CCListenerAssignments | 


<a name="DeleteAssignment"></a>
# **DeleteAssignment**
> DeleteAssignment(messageSenderID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MessageSenders();

var messageSenderID = "messageSenderID_example"; // String | ID of the message sender.

var opts = { 
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example" // String | ID of the user group.
};
apiInstance.DeleteAssignment(messageSenderID, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageSenderID** | **String**| ID of the message sender. | 
 **buyerID** | **String**| ID of the buyer. | [optional] 
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
> MessageSender Get(messageSenderID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MessageSenders();

var messageSenderID = "messageSenderID_example"; // String | ID of the message sender.

apiInstance.Get(messageSenderID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageSenderID** | **String**| ID of the message sender. | 

### Return type

[**MessageSender**](MessageSender.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListMessageSender List(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MessageSenders();

var opts = { 
  'search': "search_example", // String | Search of the message sender.
  'searchOn': ["searchOn_example"], // [String] | Search on of the message sender.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the message sender.
  'page': 56, // Number | Page of the message sender.
  'pageSize': 56, // Number | Page size of the message sender.
  'filters': {key: "filters_example"} // {String: String} | Filters of the message sender.
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
 **search** | **String**| Search of the message sender. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the message sender. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the message sender. | [optional] 
 **page** | **Number**| Page of the message sender. | [optional] 
 **pageSize** | **Number**| Page size of the message sender. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the message sender. | [optional] 

### Return type

[**ListMessageSender**](ListMessageSender.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListAssignments"></a>
# **ListAssignments**
> ListMessageSenderAssignment ListAssignments(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MessageSenders();

var opts = { 
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'messageSenderID': "messageSenderID_example", // String | ID of the message sender.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the message sender.
  'page': 56, // Number | Page of the message sender.
  'pageSize': 56 // Number | Page size of the message sender.
};
apiInstance.ListAssignments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **messageSenderID** | **String**| ID of the message sender. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **level** | **String**| Level of the message sender. | [optional] 
 **page** | **Number**| Page of the message sender. | [optional] 
 **pageSize** | **Number**| Page size of the message sender. | [optional] 

### Return type

[**ListMessageSenderAssignment**](ListMessageSenderAssignment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListCCListenerAssignments"></a>
# **ListCCListenerAssignments**
> ListMessageCCListenerAssignment ListCCListenerAssignments(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MessageSenders();

var opts = { 
  'search': "search_example", // String | Search of the message sender.
  'searchOn': ["searchOn_example"], // [String] | Search on of the message sender.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the message sender.
  'page': 56, // Number | Page of the message sender.
  'pageSize': 56, // Number | Page size of the message sender.
  'filters': {key: "filters_example"} // {String: String} | Filters of the message sender.
};
apiInstance.ListCCListenerAssignments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Search of the message sender. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the message sender. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the message sender. | [optional] 
 **page** | **Number**| Page of the message sender. | [optional] 
 **pageSize** | **Number**| Page size of the message sender. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the message sender. | [optional] 

### Return type

[**ListMessageCCListenerAssignment**](ListMessageCCListenerAssignment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SaveAssignment"></a>
# **SaveAssignment**
> SaveAssignment(assignment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MessageSenders();

var assignment = new OrderCloud.MessageSenderAssignment(); // MessageSenderAssignment | 

apiInstance.SaveAssignment(assignment).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignment** | [**MessageSenderAssignment**](MessageSenderAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SaveCCListenerAssignment"></a>
# **SaveCCListenerAssignment**
> SaveCCListenerAssignment(assignment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.MessageSenders();

var assignment = new OrderCloud.MessageCCListenerAssignment(); // MessageCCListenerAssignment | 

apiInstance.SaveCCListenerAssignment(assignment).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignment** | [**MessageCCListenerAssignment**](MessageCCListenerAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

