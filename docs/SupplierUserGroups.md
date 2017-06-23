# OrderCloud.SupplierUserGroups

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](SupplierUserGroups.md#Create) | **POST** /suppliers/{supplierID}/usergroups | 
[**Delete**](SupplierUserGroups.md#Delete) | **DELETE** /suppliers/{supplierID}/usergroups/{userGroupID} | 
[**DeleteUserAssignment**](SupplierUserGroups.md#DeleteUserAssignment) | **DELETE** /suppliers/{supplierID}/usergroups/{userGroupID}/assignments/{userID} | 
[**Get**](SupplierUserGroups.md#Get) | **GET** /suppliers/{supplierID}/usergroups/{userGroupID} | 
[**List**](SupplierUserGroups.md#List) | **GET** /suppliers/{supplierID}/usergroups | 
[**ListUserAssignments**](SupplierUserGroups.md#ListUserAssignments) | **GET** /suppliers/{supplierID}/usergroups/assignments | 
[**Patch**](SupplierUserGroups.md#Patch) | **PATCH** /suppliers/{supplierID}/usergroups/{userGroupID} | 
[**SaveUserAssignment**](SupplierUserGroups.md#SaveUserAssignment) | **POST** /suppliers/{supplierID}/usergroups/assignments | 
[**Update**](SupplierUserGroups.md#Update) | **PUT** /suppliers/{supplierID}/usergroups/{userGroupID} | 


<a name="Create"></a>
# **Create**
> UserGroup Create(supplierID, group)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroups();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var group = new OrderCloud.UserGroup(); // UserGroup | 

apiInstance.Create(supplierID, group).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **group** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(supplierID, userGroupID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroups();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var userGroupID = "userGroupID_example"; // String | ID of the user group.

apiInstance.Delete(supplierID, userGroupID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroupID** | **String**| ID of the user group. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeleteUserAssignment"></a>
# **DeleteUserAssignment**
> DeleteUserAssignment(supplierID, userGroupID, userID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroups();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var userGroupID = "userGroupID_example"; // String | ID of the user group.

var userID = "userID_example"; // String | ID of the user.

apiInstance.DeleteUserAssignment(supplierID, userGroupID, userID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroupID** | **String**| ID of the user group. | 
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
> UserGroup Get(supplierID, userGroupID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroups();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var userGroupID = "userGroupID_example"; // String | ID of the user group.

apiInstance.Get(supplierID, userGroupID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroupID** | **String**| ID of the user group. | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListUserGroup List(supplierID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroups();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var opts = { 
  'search': "search_example", // String | Search of the supplier user group.
  'searchOn': ["searchOn_example"], // [String] | Search on of the supplier user group.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the supplier user group.
  'page': 56, // Number | Page of the supplier user group.
  'pageSize': 56, // Number | Page size of the supplier user group.
  'filters': {key: "filters_example"} // {String: String} | Filters of the supplier user group.
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
 **search** | **String**| Search of the supplier user group. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the supplier user group. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the supplier user group. | [optional] 
 **page** | **Number**| Page of the supplier user group. | [optional] 
 **pageSize** | **Number**| Page size of the supplier user group. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the supplier user group. | [optional] 

### Return type

[**ListUserGroup**](ListUserGroup.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListUserAssignments"></a>
# **ListUserAssignments**
> ListUserGroupAssignment ListUserAssignments(supplierID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroups();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var opts = { 
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'userID': "userID_example", // String | ID of the user.
  'page': 56, // Number | Page of the supplier user group.
  'pageSize': 56 // Number | Page size of the supplier user group.
};
apiInstance.ListUserAssignments(supplierID, opts).then(function(data) {
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
 **userID** | **String**| ID of the user. | [optional] 
 **page** | **Number**| Page of the supplier user group. | [optional] 
 **pageSize** | **Number**| Page size of the supplier user group. | [optional] 

### Return type

[**ListUserGroupAssignment**](ListUserGroupAssignment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> UserGroup Patch(supplierID, userGroupID, group)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroups();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var userGroupID = "userGroupID_example"; // String | ID of the user group.

var group = new OrderCloud.UserGroup(); // UserGroup | 

apiInstance.Patch(supplierID, userGroupID, group).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroupID** | **String**| ID of the user group. | 
 **group** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SaveUserAssignment"></a>
# **SaveUserAssignment**
> SaveUserAssignment(supplierID, userGroupAssignment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroups();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var userGroupAssignment = new OrderCloud.UserGroupAssignment(); // UserGroupAssignment | 

apiInstance.SaveUserAssignment(supplierID, userGroupAssignment).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroupAssignment** | [**UserGroupAssignment**](UserGroupAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> UserGroup Update(supplierID, userGroupID, group)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SupplierUserGroups();

var supplierID = "supplierID_example"; // String | ID of the supplier.

var userGroupID = "userGroupID_example"; // String | ID of the user group.

var group = new OrderCloud.UserGroup(); // UserGroup | 

apiInstance.Update(supplierID, userGroupID, group).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierID** | **String**| ID of the supplier. | 
 **userGroupID** | **String**| ID of the user group. | 
 **group** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

