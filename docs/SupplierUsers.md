# OrderCloud.SupplierUsers

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](SupplierUsers.md#Create) | **POST** /suppliers/{supplierID}/users | 
[**Delete**](SupplierUsers.md#Delete) | **DELETE** /suppliers/{supplierID}/users/{userID} | 
[**Get**](SupplierUsers.md#Get) | **GET** /suppliers/{supplierID}/users/{userID} | 
[**GetAccessToken**](SupplierUsers.md#GetAccessToken) | **POST** /suppliers/{supplierID}/users/{userID}/accesstoken | 
[**List**](SupplierUsers.md#List) | **GET** /suppliers/{supplierID}/users | 
[**Patch**](SupplierUsers.md#Patch) | **PATCH** /suppliers/{supplierID}/users/{userID} | 
[**Update**](SupplierUsers.md#Update) | **PUT** /suppliers/{supplierID}/users/{userID} | 


<a name="Create"></a>
# **Create**
> User Create(supplierID, user)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUsers();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var user = new OrderCloud.User(); // User | 

apiInstance.Create(supplierID, user).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(supplierID, userID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUsers();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var userID = "userID_example"; // String | ID of the user.

apiInstance.Delete(supplierID, userID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userID** | **String**| ID of the user. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Get"></a>
# **Get**
> User Get(supplierID, userID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUsers();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var userID = "userID_example"; // String | ID of the user.

apiInstance.Get(supplierID, userID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userID** | **String**| ID of the user. | 

### Return type

[**User**](User.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="GetAccessToken"></a>
# **GetAccessToken**
> AccessToken GetAccessToken(supplierID, userID, tokenRequest)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUsers();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var userID = "userID_example"; // String | ID of the user.

var tokenRequest = new OrderCloud.ImpersonateTokenRequest(); // ImpersonateTokenRequest | 

apiInstance.GetAccessToken(supplierID, userID, tokenRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userID** | **String**| ID of the user. | 
 **tokenRequest** | [**ImpersonateTokenRequest**](ImpersonateTokenRequest.md)|  | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListUser List(supplierID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUsers();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var opts = { 
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'search': "search_example", // String | Search of the supplier user.
  'searchOn': ["searchOn_example"], // [String] | Search on of the supplier user.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the supplier user.
  'page': 56, // Number | Page of the supplier user.
  'pageSize': 56, // Number | Page size of the supplier user.
  'filters': {key: "filters_example"} // {String: String} | Filters of the supplier user.
};
apiInstance.List(supplierID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **search** | **String**| Search of the supplier user. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the supplier user. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the supplier user. | [optional] 
 **page** | **Number**| Page of the supplier user. | [optional] 
 **pageSize** | **Number**| Page size of the supplier user. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the supplier user. | [optional] 

### Return type

[**ListUser**](ListUser.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> User Patch(supplierID, userID, user)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUsers();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var userID = "userID_example"; // String | ID of the user.

var user = new OrderCloud.User(); // User | 

apiInstance.Patch(supplierID, userID, user).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userID** | **String**| ID of the user. | 
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> User Update(supplierID, userID, user)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUsers();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var userID = "userID_example"; // String | ID of the user.

var user = new OrderCloud.User(); // User | 

apiInstance.Update(supplierID, userID, user).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userID** | **String**| ID of the user. | 
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

