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
[**SaveAssignment**](SpendingAccounts.md#SaveAssignment) | **POST** /buyers/{buyerID}/spendingaccounts/assignments | 
[**Update**](SpendingAccounts.md#Update) | **PUT** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 


<a name="Create"></a>
# **Create**
> SpendingAccount Create(buyerID, spendingAccount)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

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
var defaultClient = OrderCloud.ApiClient.default;

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
var defaultClient = OrderCloud.ApiClient.default;

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
var defaultClient = OrderCloud.ApiClient.default;

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
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccounts();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var opts = { 
  'search': "search_example", // String | Search of the spending account.
  'searchOn': ["searchOn_example"], // [String] | Search on of the spending account.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the spending account.
  'page': 56, // Number | Page of the spending account.
  'pageSize': 56, // Number | Page size of the spending account.
  'filters': {key: "filters_example"} // {String: String} | Filters of the spending account.
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
 **search** | **String**| Search of the spending account. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the spending account. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the spending account. | [optional] 
 **page** | **Number**| Page of the spending account. | [optional] 
 **pageSize** | **Number**| Page size of the spending account. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the spending account. | [optional] 

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
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccounts();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var opts = { 
  'spendingAccountID': "spendingAccountID_example", // String | ID of the spending account.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the spending account.
  'page': 56, // Number | Page of the spending account.
  'pageSize': 56 // Number | Page size of the spending account.
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
 **level** | **String**| Level of the spending account. | [optional] 
 **page** | **Number**| Page of the spending account. | [optional] 
 **pageSize** | **Number**| Page size of the spending account. | [optional] 

### Return type

[**ListSpendingAccountAssignment**](ListSpendingAccountAssignment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> SpendingAccount Patch(buyerID, spendingAccountID, spendingAccount)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccounts();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var spendingAccountID = "spendingAccountID_example"; // String | ID of the spending account.

var spendingAccount = new OrderCloud.SpendingAccount(); // SpendingAccount | 

apiInstance.Patch(buyerID, spendingAccountID, spendingAccount).then(function(data) {
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
> SaveAssignment(buyerID, assignment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccounts();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var assignment = new OrderCloud.SpendingAccountAssignment(); // SpendingAccountAssignment | 

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
 **assignment** | [**SpendingAccountAssignment**](SpendingAccountAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> SpendingAccount Update(buyerID, spendingAccountID, spendingAccount)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SpendingAccounts();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var spendingAccountID = "spendingAccountID_example"; // String | ID of the spending account.

var spendingAccount = new OrderCloud.SpendingAccount(); // SpendingAccount | 

apiInstance.Update(buyerID, spendingAccountID, spendingAccount).then(function(data) {
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

