# OrderCloud.SupplierUsers

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](SupplierUsers.md#callDelete) | **DELETE** /suppliers/{supplierID}/users/{userID} | 
[**create**](SupplierUsers.md#create) | **POST** /suppliers/{supplierID}/users | 
[**get**](SupplierUsers.md#get) | **GET** /suppliers/{supplierID}/users/{userID} | 
[**getAccessToken**](SupplierUsers.md#getAccessToken) | **POST** /suppliers/{supplierID}/users/{userID}/accesstoken | 
[**list**](SupplierUsers.md#list) | **GET** /suppliers/{supplierID}/users | 
[**patch**](SupplierUsers.md#patch) | **PATCH** /suppliers/{supplierID}/users/{userID} | 
[**save**](SupplierUsers.md#save) | **PUT** /suppliers/{supplierID}/users/{userID} | 


<a name="callDelete"></a>
# **callDelete**
> callDelete(supplierID, userID)



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

apiInstance.callDelete(supplierID, userID).then(function() {
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

<a name="create"></a>
# **create**
> User create(supplierID, user)



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

apiInstance.create(supplierID, user).then(function(data) {
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

<a name="get"></a>
# **get**
> User get(supplierID, userID)



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

apiInstance.get(supplierID, userID).then(function(data) {
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

<a name="getAccessToken"></a>
# **getAccessToken**
> AccessToken getAccessToken(supplierID, userID, impersonateTokenRequest)



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

var impersonateTokenRequest = new OrderCloud.ImpersonateTokenRequest(); // ImpersonateTokenRequest | 

apiInstance.getAccessToken(supplierID, userID, impersonateTokenRequest).then(function(data) {
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
 **impersonateTokenRequest** | [**ImpersonateTokenRequest**](ImpersonateTokenRequest.md)|  | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="list"></a>
# **list**
> ListUser list(supplierID, opts)



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
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
apiInstance.list(supplierID, opts).then(function(data) {
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
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListUser**](ListUser.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="patch"></a>
# **patch**
> User patch(supplierID, userID, partialUser)



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

var partialUser = new OrderCloud.User(); // User | 

apiInstance.patch(supplierID, userID, partialUser).then(function(data) {
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
 **partialUser** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="save"></a>
# **save**
> User save(supplierID, userID, user)



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

apiInstance.save(supplierID, userID, user).then(function(data) {
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

