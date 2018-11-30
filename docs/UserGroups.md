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
[**Save**](UserGroups.md#Save) | **PUT** /buyers/{buyerID}/usergroups/{userGroupID} | 
[**SaveUserAssignment**](UserGroups.md#SaveUserAssignment) | **POST** /buyers/{buyerID}/usergroups/assignments | 


<a name="Create"></a>
# **Create**
> UserGroup Create(buyerID, userGroup)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroups();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var userGroup = new OrderCloud.UserGroup(); // UserGroup | 

apiInstance.Create(buyerID, userGroup).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **userGroup** | [**UserGroup**](UserGroup.md)|  | 

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
var defaultClient = OrderCloud.Sdk.default;

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
var defaultClient = OrderCloud.Sdk.default;

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
var defaultClient = OrderCloud.Sdk.default;

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
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroups();

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
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroups();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var opts = { 
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'userID': "userID_example", // String | ID of the user.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56 // Number | Number of results to return per page. Default: 20, max: 100.
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
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListUserGroupAssignment**](ListUserGroupAssignment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> UserGroup Patch(buyerID, userGroupID, partialUserGroup)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroups();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var userGroupID = "userGroupID_example"; // String | ID of the user group.

var partialUserGroup = new OrderCloud.UserGroup(); // UserGroup | 

apiInstance.Patch(buyerID, userGroupID, partialUserGroup).then(function(data) {
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
 **partialUserGroup** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Save"></a>
# **Save**
> UserGroup Save(buyerID, userGroupID, userGroup)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.UserGroups();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var userGroupID = "userGroupID_example"; // String | ID of the user group.

var userGroup = new OrderCloud.UserGroup(); // UserGroup | 

apiInstance.Save(buyerID, userGroupID, userGroup).then(function(data) {
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
 **userGroup** | [**UserGroup**](UserGroup.md)|  | 

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
var defaultClient = OrderCloud.Sdk.default;

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

