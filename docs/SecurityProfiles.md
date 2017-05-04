# OrderCloud.SecurityProfiles

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteAssignment**](SecurityProfiles.md#DeleteAssignment) | **DELETE** /securityprofiles/{securityProfileID}/assignments | 
[**Get**](SecurityProfiles.md#Get) | **GET** /securityprofiles/{securityProfileID} | 
[**List**](SecurityProfiles.md#List) | **GET** /securityprofiles | 
[**ListAssignments**](SecurityProfiles.md#ListAssignments) | **GET** /securityprofiles/assignments | 
[**SaveAssignment**](SecurityProfiles.md#SaveAssignment) | **POST** /securityprofiles/assignments | 


<a name="DeleteAssignment"></a>
# **DeleteAssignment**
> DeleteAssignment(securityProfileID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SecurityProfiles();

var securityProfileID = "securityProfileID_example"; // String | ID of the security profile.

var opts = { 
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example" // String | ID of the user group.
};
apiInstance.DeleteAssignment(securityProfileID, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityProfileID** | **String**| ID of the security profile. | 
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
> SecurityProfile Get(securityProfileID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SecurityProfiles();

var securityProfileID = "securityProfileID_example"; // String | ID of the security profile.

apiInstance.Get(securityProfileID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityProfileID** | **String**| ID of the security profile. | 

### Return type

[**SecurityProfile**](SecurityProfile.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListSecurityProfile List(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SecurityProfiles();

var opts = { 
  'search': "search_example", // String | Search of the security profile.
  'searchOn': ["searchOn_example"], // [String] | Search on of the security profile.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the security profile.
  'page': 56, // Number | Page of the security profile.
  'pageSize': 56, // Number | Page size of the security profile.
  'filters': {key: "filters_example"} // {String: String} | Filters of the security profile.
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
 **search** | **String**| Search of the security profile. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the security profile. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the security profile. | [optional] 
 **page** | **Number**| Page of the security profile. | [optional] 
 **pageSize** | **Number**| Page size of the security profile. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the security profile. | [optional] 

### Return type

[**ListSecurityProfile**](ListSecurityProfile.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListAssignments"></a>
# **ListAssignments**
> ListSecurityProfileAssignment ListAssignments(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.SecurityProfiles();

var opts = { 
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'supplierID': "supplierID_example", // String | ID of the supplier.
  'securityProfileID': "securityProfileID_example", // String | ID of the security profile.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'commerceRole': "commerceRole_example", // String | Commerce role of the security profile.
  'level': "level_example", // String | Level of the security profile.
  'page': 56, // Number | Page of the security profile.
  'pageSize': 56 // Number | Page size of the security profile.
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
 **supplierID** | **String**| ID of the supplier. | [optional] 
 **securityProfileID** | **String**| ID of the security profile. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **commerceRole** | **String**| Commerce role of the security profile. | [optional] 
 **level** | **String**| Level of the security profile. | [optional] 
 **page** | **Number**| Page of the security profile. | [optional] 
 **pageSize** | **Number**| Page size of the security profile. | [optional] 

### Return type

[**ListSecurityProfileAssignment**](ListSecurityProfileAssignment.md)

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

var apiInstance = new OrderCloud.SecurityProfiles();

var assignment = new OrderCloud.SecurityProfileAssignment(); // SecurityProfileAssignment | 

apiInstance.SaveAssignment(assignment).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignment** | [**SecurityProfileAssignment**](SecurityProfileAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

