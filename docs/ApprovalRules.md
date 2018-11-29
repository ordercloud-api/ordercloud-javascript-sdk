# OrderCloud.ApprovalRules

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](ApprovalRules.md#callDelete) | **DELETE** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
[**create**](ApprovalRules.md#create) | **POST** /buyers/{buyerID}/approvalrules | 
[**get**](ApprovalRules.md#get) | **GET** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
[**list**](ApprovalRules.md#list) | **GET** /buyers/{buyerID}/approvalrules | 
[**patch**](ApprovalRules.md#patch) | **PATCH** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
[**save**](ApprovalRules.md#save) | **PUT** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 


<a name="callDelete"></a>
# **callDelete**
> callDelete(buyerID, approvalRuleID)



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

apiInstance.callDelete(buyerID, approvalRuleID).then(function() {
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

<a name="create"></a>
# **create**
> ApprovalRule create(buyerID, approvalRule)



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

apiInstance.create(buyerID, approvalRule).then(function(data) {
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

<a name="get"></a>
# **get**
> ApprovalRule get(buyerID, approvalRuleID)



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

apiInstance.get(buyerID, approvalRuleID).then(function(data) {
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

<a name="list"></a>
# **list**
> ListApprovalRule list(buyerID, opts)



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
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
apiInstance.list(buyerID, opts).then(function(data) {
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

<a name="patch"></a>
# **patch**
> ApprovalRule patch(buyerID, approvalRuleID, partialApprovalRule)



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

apiInstance.patch(buyerID, approvalRuleID, partialApprovalRule).then(function(data) {
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

<a name="save"></a>
# **save**
> ApprovalRule save(buyerID, approvalRuleID, approvalRule)



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

apiInstance.save(buyerID, approvalRuleID, approvalRule).then(function(data) {
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

