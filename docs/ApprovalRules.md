# OrderCloud.ApprovalRules

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](ApprovalRules.md#Create) | **POST** /buyers/{buyerID}/approvalrules | 
[**Delete**](ApprovalRules.md#Delete) | **DELETE** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
[**Get**](ApprovalRules.md#Get) | **GET** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
[**List**](ApprovalRules.md#List) | **GET** /buyers/{buyerID}/approvalrules | 
[**Patch**](ApprovalRules.md#Patch) | **PATCH** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
[**Update**](ApprovalRules.md#Update) | **PUT** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 


<a name="Create"></a>
# **Create**
> ApprovalRule Create(buyerID, approvalRule)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

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
var defaultClient = OrderCloud.ApiClient.default;

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
var defaultClient = OrderCloud.ApiClient.default;

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
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApprovalRules();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var opts = { 
  'search': "search_example", // String | Search of the approval rule.
  'searchOn': ["searchOn_example"], // [String] | Search on of the approval rule.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the approval rule.
  'page': 56, // Number | Page of the approval rule.
  'pageSize': 56, // Number | Page size of the approval rule.
  'filters': {key: "filters_example"} // {String: String} | Filters of the approval rule.
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
 **search** | **String**| Search of the approval rule. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the approval rule. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the approval rule. | [optional] 
 **page** | **Number**| Page of the approval rule. | [optional] 
 **pageSize** | **Number**| Page size of the approval rule. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the approval rule. | [optional] 

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
var defaultClient = OrderCloud.ApiClient.default;

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

<a name="Update"></a>
# **Update**
> ApprovalRule Update(buyerID, approvalRuleID, approvalRule)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ApprovalRules();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var approvalRuleID = "approvalRuleID_example"; // String | ID of the approval rule.

var approvalRule = new OrderCloud.ApprovalRule(); // ApprovalRule | 

apiInstance.Update(buyerID, approvalRuleID, approvalRule).then(function(data) {
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

