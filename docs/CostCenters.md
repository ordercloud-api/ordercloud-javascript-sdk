# OrderCloud.CostCenters

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](CostCenters.md#Create) | **POST** /buyers/{buyerID}/costcenters | 
[**Delete**](CostCenters.md#Delete) | **DELETE** /buyers/{buyerID}/costcenters/{costCenterID} | 
[**DeleteAssignment**](CostCenters.md#DeleteAssignment) | **DELETE** /buyers/{buyerID}/costcenters/{costCenterID}/assignments | 
[**Get**](CostCenters.md#Get) | **GET** /buyers/{buyerID}/costcenters/{costCenterID} | 
[**List**](CostCenters.md#List) | **GET** /buyers/{buyerID}/costcenters | 
[**ListAssignments**](CostCenters.md#ListAssignments) | **GET** /buyers/{buyerID}/costcenters/assignments | 
[**Patch**](CostCenters.md#Patch) | **PATCH** /buyers/{buyerID}/costcenters/{costCenterID} | 
[**SaveAssignment**](CostCenters.md#SaveAssignment) | **POST** /buyers/{buyerID}/costcenters/assignments | 
[**Update**](CostCenters.md#Update) | **PUT** /buyers/{buyerID}/costcenters/{costCenterID} | 


<a name="Create"></a>
# **Create**
> CostCenter Create(buyerID, costCenter)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenters();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var costCenter = new OrderCloud.CostCenter(); // CostCenter | 

apiInstance.Create(buyerID, costCenter).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **costCenter** | [**CostCenter**](CostCenter.md)|  | 

### Return type

[**CostCenter**](CostCenter.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(buyerID, costCenterID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenters();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var costCenterID = "costCenterID_example"; // String | ID of the cost center.

apiInstance.Delete(buyerID, costCenterID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **costCenterID** | **String**| ID of the cost center. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="DeleteAssignment"></a>
# **DeleteAssignment**
> DeleteAssignment(buyerID, costCenterID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenters();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var costCenterID = "costCenterID_example"; // String | ID of the cost center.

var opts = { 
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example" // String | ID of the user group.
};
apiInstance.DeleteAssignment(buyerID, costCenterID, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **costCenterID** | **String**| ID of the cost center. | 
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
> CostCenter Get(buyerID, costCenterID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenters();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var costCenterID = "costCenterID_example"; // String | ID of the cost center.

apiInstance.Get(buyerID, costCenterID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **costCenterID** | **String**| ID of the cost center. | 

### Return type

[**CostCenter**](CostCenter.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListCostCenter List(buyerID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenters();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var opts = { 
  'search': "search_example", // String | Search of the cost center.
  'searchOn': ["searchOn_example"], // [String] | Search on of the cost center.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the cost center.
  'page': 56, // Number | Page of the cost center.
  'pageSize': 56, // Number | Page size of the cost center.
  'filters': {key: "filters_example"} // {String: String} | Filters of the cost center.
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
 **search** | **String**| Search of the cost center. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the cost center. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the cost center. | [optional] 
 **page** | **Number**| Page of the cost center. | [optional] 
 **pageSize** | **Number**| Page size of the cost center. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the cost center. | [optional] 

### Return type

[**ListCostCenter**](ListCostCenter.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListAssignments"></a>
# **ListAssignments**
> ListCostCenterAssignment ListAssignments(buyerID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenters();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var opts = { 
  'costCenterID': "costCenterID_example", // String | ID of the cost center.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the cost center.
  'page': 56, // Number | Page of the cost center.
  'pageSize': 56 // Number | Page size of the cost center.
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
 **costCenterID** | **String**| ID of the cost center. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **level** | **String**| Level of the cost center. | [optional] 
 **page** | **Number**| Page of the cost center. | [optional] 
 **pageSize** | **Number**| Page size of the cost center. | [optional] 

### Return type

[**ListCostCenterAssignment**](ListCostCenterAssignment.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> CostCenter Patch(buyerID, costCenterID, costCenter)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenters();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var costCenterID = "costCenterID_example"; // String | ID of the cost center.

var costCenter = new OrderCloud.CostCenter(); // CostCenter | 

apiInstance.Patch(buyerID, costCenterID, costCenter).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **costCenterID** | **String**| ID of the cost center. | 
 **costCenter** | [**CostCenter**](CostCenter.md)|  | 

### Return type

[**CostCenter**](CostCenter.md)

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

var apiInstance = new OrderCloud.CostCenters();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var assignment = new OrderCloud.CostCenterAssignment(); // CostCenterAssignment | 

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
 **assignment** | [**CostCenterAssignment**](CostCenterAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> CostCenter Update(buyerID, costCenterID, costCenter)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.CostCenters();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var costCenterID = "costCenterID_example"; // String | ID of the cost center.

var costCenter = new OrderCloud.CostCenter(); // CostCenter | 

apiInstance.Update(buyerID, costCenterID, costCenter).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **costCenterID** | **String**| ID of the cost center. | 
 **costCenter** | [**CostCenter**](CostCenter.md)|  | 

### Return type

[**CostCenter**](CostCenter.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

