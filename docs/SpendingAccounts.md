# OrderCloud.SpendingAccounts

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](SpendingAccounts.md#Create) | **POST** /buyers/{buyerID}/spendingaccounts | 
[**Delete**](SpendingAccounts.md#Delete) | **DELETE** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 
[**DeleteAssignment**](SpendingAccounts.md#DeleteAssignment) | **DELETE** /buyers/{buyerID}/spendingaccounts/{spendingAccountID}/assignments | 
[**Get**](SpendingAccounts.md#Get) | **GET** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 
[**List**](SpendingAccounts.md#List) | **GET** /buyers/{buyerID}/spendingaccounts | 
[**ListAssignments**](SpendingAccounts.md#ListAssignments) | **GET** /buyers/{buyerID}/spendingaccounts/assignments | 
[**Patch**](SpendingAccounts.md#Patch) | **PATCH** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 
[**Save**](SpendingAccounts.md#Save) | **PUT** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 
[**SaveAssignment**](SpendingAccounts.md#SaveAssignment) | **POST** /buyers/{buyerID}/spendingaccounts/assignments | 


<a name="Create"></a>
# **Create**
> SpendingAccount Create(buyerID, spendingAccount)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccounts();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var spendingAccount = new OrderCloud.SpendingAccount(); // SpendingAccount | 

apiInstance.Create(buyerID, spendingAccount).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccount** | [**SpendingAccount**](SpendingAccount.md)|  | 

### Return type

[**SpendingAccount**](SpendingAccount.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(buyerID, spendingAccountID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccounts();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var spendingAccountID = "spendingAccountID_example"; // String | ID of the spending account.

apiInstance.Delete(buyerID, spendingAccountID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccountID** | **String**| ID of the spending account. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeleteAssignment"></a>
# **DeleteAssignment**
> DeleteAssignment(buyerID, spendingAccountID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccounts();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var spendingAccountID = "spendingAccountID_example"; // String | ID of the spending account.

var opts = { 
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example" // String | ID of the user group.
};
apiInstance.DeleteAssignment(buyerID, spendingAccountID, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccountID** | **String**| ID of the spending account. | 
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
> SpendingAccount Get(buyerID, spendingAccountID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccounts();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var spendingAccountID = "spendingAccountID_example"; // String | ID of the spending account.

apiInstance.Get(buyerID, spendingAccountID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccountID** | **String**| ID of the spending account. | 

### Return type

[**SpendingAccount**](SpendingAccount.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListSpendingAccount List(buyerID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccounts();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var opts = { 
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
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
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListSpendingAccount**](ListSpendingAccount.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListAssignments"></a>
# **ListAssignments**
> ListSpendingAccountAssignment ListAssignments(buyerID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccounts();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var opts = { 
  'spendingAccountID': "spendingAccountID_example", // String | ID of the spending account.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the spending account assignment. Possible values: User, Group, Company.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56 // Number | Number of results to return per page. Default: 20, max: 100.
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
 **spendingAccountID** | **String**| ID of the spending account. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **level** | **String**| Level of the spending account assignment. Possible values: User, Group, Company. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListSpendingAccountAssignment**](ListSpendingAccountAssignment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> SpendingAccount Patch(buyerID, spendingAccountID, partialSpendingAccount)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccounts();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var spendingAccountID = "spendingAccountID_example"; // String | ID of the spending account.

var partialSpendingAccount = new OrderCloud.SpendingAccount(); // SpendingAccount | 

apiInstance.Patch(buyerID, spendingAccountID, partialSpendingAccount).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccountID** | **String**| ID of the spending account. | 
 **partialSpendingAccount** | [**SpendingAccount**](SpendingAccount.md)|  | 

### Return type

[**SpendingAccount**](SpendingAccount.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Save"></a>
# **Save**
> SpendingAccount Save(buyerID, spendingAccountID, spendingAccount)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccounts();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var spendingAccountID = "spendingAccountID_example"; // String | ID of the spending account.

var spendingAccount = new OrderCloud.SpendingAccount(); // SpendingAccount | 

apiInstance.Save(buyerID, spendingAccountID, spendingAccount).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccountID** | **String**| ID of the spending account. | 
 **spendingAccount** | [**SpendingAccount**](SpendingAccount.md)|  | 

### Return type

[**SpendingAccount**](SpendingAccount.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SaveAssignment"></a>
# **SaveAssignment**
> SaveAssignment(buyerID, spendingAccountAssignment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccounts();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var spendingAccountAssignment = new OrderCloud.SpendingAccountAssignment(); // SpendingAccountAssignment | 

apiInstance.SaveAssignment(buyerID, spendingAccountAssignment).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **spendingAccountAssignment** | [**SpendingAccountAssignment**](SpendingAccountAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

