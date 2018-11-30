# OrderCloud.ApprovalRules

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](ApprovalRules.md#Create) | **POST** /buyers/{buyerID}/approvalrules | 
[**Delete**](ApprovalRules.md#Delete) | **DELETE** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
[**Get**](ApprovalRules.md#Get) | **GET** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
[**List**](ApprovalRules.md#List) | **GET** /buyers/{buyerID}/approvalrules | 
[**Patch**](ApprovalRules.md#Patch) | **PATCH** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
[**Save**](ApprovalRules.md#Save) | **PUT** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 


<a name="Create"></a>
# **Create**
> ApprovalRule Create(buyerID, approvalRule)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApprovalRules();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var approvalRule = new OrderCloud.ApprovalRule(); // ApprovalRule | 

apiInstance.Create(buyerID, approvalRule).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **approvalRule** | [**ApprovalRule**](ApprovalRule.md)|  | 

### Return type

[**ApprovalRule**](ApprovalRule.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(buyerID, approvalRuleID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApprovalRules();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var approvalRuleID = "approvalRuleID_example"; // String | ID of the approval rule.

apiInstance.Delete(buyerID, approvalRuleID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **approvalRuleID** | **String**| ID of the approval rule. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Get"></a>
# **Get**
> ApprovalRule Get(buyerID, approvalRuleID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApprovalRules();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var approvalRuleID = "approvalRuleID_example"; // String | ID of the approval rule.

apiInstance.Get(buyerID, approvalRuleID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **approvalRuleID** | **String**| ID of the approval rule. | 

### Return type

[**ApprovalRule**](ApprovalRule.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListApprovalRule List(buyerID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApprovalRules();

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

[**ListApprovalRule**](ListApprovalRule.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> ApprovalRule Patch(buyerID, approvalRuleID, partialApprovalRule)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApprovalRules();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var approvalRuleID = "approvalRuleID_example"; // String | ID of the approval rule.

var partialApprovalRule = new OrderCloud.ApprovalRule(); // ApprovalRule | 

apiInstance.Patch(buyerID, approvalRuleID, partialApprovalRule).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **approvalRuleID** | **String**| ID of the approval rule. | 
 **partialApprovalRule** | [**ApprovalRule**](ApprovalRule.md)|  | 

### Return type

[**ApprovalRule**](ApprovalRule.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Save"></a>
# **Save**
> ApprovalRule Save(buyerID, approvalRuleID, approvalRule)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.Sdk.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApprovalRules();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var approvalRuleID = "approvalRuleID_example"; // String | ID of the approval rule.

var approvalRule = new OrderCloud.ApprovalRule(); // ApprovalRule | 

apiInstance.Save(buyerID, approvalRuleID, approvalRule).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **approvalRuleID** | **String**| ID of the approval rule. | 
 **approvalRule** | [**ApprovalRule**](ApprovalRule.md)|  | 

### Return type

[**ApprovalRule**](ApprovalRule.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

