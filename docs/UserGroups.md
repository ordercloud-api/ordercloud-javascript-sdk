# OrderCloud.UserGroups

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](UserGroups.md#Create) | **POST** /buyers/{buyerID}/usergroups | 
[**Delete**](UserGroups.md#Delete) | **DELETE** /buyers/{buyerID}/usergroups/{userGroupID} | 
[**DeleteUserAssignment**](UserGroups.md#DeleteUserAssignment) | **DELETE** /buyers/{buyerID}/usergroups/{userGroupID}/assignments/{userID} | 
[**Get**](UserGroups.md#Get) | **GET** /buyers/{buyerID}/usergroups/{userGroupID} | 
[**List**](UserGroups.md#List) | **GET** /buyers/{buyerID}/usergroups | 
[**ListUserAssignments**](UserGroups.md#ListUserAssignments) | **GET** /buyers/{buyerID}/usergroups/assignments | 
[**Patch**](UserGroups.md#Patch) | **PATCH** /buyers/{buyerID}/usergroups/{userGroupID} | 
[**SaveUserAssignment**](UserGroups.md#SaveUserAssignment) | **POST** /buyers/{buyerID}/usergroups/assignments | 
[**Update**](UserGroups.md#Update) | **PUT** /buyers/{buyerID}/usergroups/{userGroupID} | 


<a name="Create"></a>
# **Create**
> UserGroup Create(buyerID, group)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroups();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var group = new OrderCloud.UserGroup(); // UserGroup | 

apiInstance.Create(buyerID, group).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
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
> Delete(buyerID, userGroupID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroups();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var userGroupID = "userGroupID_example"; // String | ID of the user group.

apiInstance.Delete(buyerID, userGroupID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
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
> DeleteUserAssignment(buyerID, userGroupID, userID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroups();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var userGroupID = "userGroupID_example"; // String | ID of the user group.

var userID = "userID_example"; // String | ID of the user.

apiInstance.DeleteUserAssignment(buyerID, userGroupID, userID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
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
> UserGroup Get(buyerID, userGroupID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroups();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var userGroupID = "userGroupID_example"; // String | ID of the user group.

apiInstance.Get(buyerID, userGroupID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
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
> ListUserGroup List(buyerID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroups();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var opts = { 
  'search': "search_example", // String | Search of the user group.
  'searchOn': ["searchOn_example"], // [String] | Search on of the user group.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the user group.
  'page': 56, // Number | Page of the user group.
  'pageSize': 56, // Number | Page size of the user group.
  'filters': {key: "filters_example"} // {String: String} | Filters of the user group.
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
 **search** | **String**| Search of the user group. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the user group. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the user group. | [optional] 
 **page** | **Number**| Page of the user group. | [optional] 
 **pageSize** | **Number**| Page size of the user group. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the user group. | [optional] 

### Return type

[**ListUserGroup**](ListUserGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListUserAssignments"></a>
# **ListUserAssignments**
> ListUserGroupAssignment ListUserAssignments(buyerID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroups();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var opts = { 
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'userID': "userID_example", // String | ID of the user.
  'page': 56, // Number | Page of the user group.
  'pageSize': 56 // Number | Page size of the user group.
};
apiInstance.ListUserAssignments(buyerID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **page** | **Number**| Page of the user group. | [optional] 
 **pageSize** | **Number**| Page size of the user group. | [optional] 

### Return type

[**ListUserGroupAssignment**](ListUserGroupAssignment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> UserGroup Patch(buyerID, userGroupID, group)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroups();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var userGroupID = "userGroupID_example"; // String | ID of the user group.

var group = new OrderCloud.UserGroup(); // UserGroup | 

apiInstance.Patch(buyerID, userGroupID, group).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
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
> SaveUserAssignment(buyerID, userGroupAssignment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroups();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var userGroupAssignment = new OrderCloud.UserGroupAssignment(); // UserGroupAssignment | 

apiInstance.SaveUserAssignment(buyerID, userGroupAssignment).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
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
> UserGroup Update(buyerID, userGroupID, group)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroups();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var userGroupID = "userGroupID_example"; // String | ID of the user group.

var group = new OrderCloud.UserGroup(); // UserGroup | 

apiInstance.Update(buyerID, userGroupID, group).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userGroupID** | **String**| ID of the user group. | 
 **group** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

