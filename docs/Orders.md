# OrderCloud.Orders

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPromotion**](Orders.md#addPromotion) | **POST** /orders/{direction}/{orderID}/promotions/{promoCode} | 
[**approve**](Orders.md#approve) | **POST** /orders/{direction}/{orderID}/approve | 
[**callDelete**](Orders.md#callDelete) | **DELETE** /orders/{direction}/{orderID} | 
[**cancel**](Orders.md#cancel) | **POST** /orders/{direction}/{orderID}/cancel | 
[**create**](Orders.md#create) | **POST** /orders/{direction} | 
[**decline**](Orders.md#decline) | **POST** /orders/{direction}/{orderID}/decline | 
[**get**](Orders.md#get) | **GET** /orders/{direction}/{orderID} | 
[**list**](Orders.md#list) | **GET** /orders/{direction} | 
[**listApprovals**](Orders.md#listApprovals) | **GET** /orders/{direction}/{orderID}/approvals | 
[**listEligibleApprovers**](Orders.md#listEligibleApprovers) | **GET** /orders/{direction}/{orderID}/eligibleapprovers | 
[**listPromotions**](Orders.md#listPromotions) | **GET** /orders/{direction}/{orderID}/promotions | 
[**patch**](Orders.md#patch) | **PATCH** /orders/{direction}/{orderID} | 
[**patchBillingAddress**](Orders.md#patchBillingAddress) | **PATCH** /orders/{direction}/{orderID}/billto | 
[**patchFromUser**](Orders.md#patchFromUser) | **PATCH** /orders/{direction}/{orderID}/fromuser | 
[**patchShippingAddress**](Orders.md#patchShippingAddress) | **PATCH** /orders/{direction}/{orderID}/shipto | 
[**removePromotion**](Orders.md#removePromotion) | **DELETE** /orders/{direction}/{orderID}/promotions/{promoCode} | 
[**save**](Orders.md#save) | **PUT** /orders/{direction}/{orderID} | 
[**setBillingAddress**](Orders.md#setBillingAddress) | **PUT** /orders/{direction}/{orderID}/billto | 
[**setShippingAddress**](Orders.md#setShippingAddress) | **PUT** /orders/{direction}/{orderID}/shipto | 
[**ship**](Orders.md#ship) | **POST** /orders/{direction}/{orderID}/ship | 
[**submit**](Orders.md#submit) | **POST** /orders/{direction}/{orderID}/submit | 


<a name="addPromotion"></a>
# **addPromotion**
> OrderPromotion addPromotion(direction, orderID, promoCode)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var promoCode = "promoCode_example"; // String | Promo code of the order promotion.

apiInstance.addPromotion(direction, orderID, promoCode).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **promoCode** | **String**| Promo code of the order promotion. | 

### Return type

[**OrderPromotion**](OrderPromotion.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="approve"></a>
# **approve**
> Order approve(direction, orderID, orderApprovalInfo)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var orderApprovalInfo = new OrderCloud.OrderApprovalInfo(); // OrderApprovalInfo | 

apiInstance.approve(direction, orderID, orderApprovalInfo).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **orderApprovalInfo** | [**OrderApprovalInfo**](OrderApprovalInfo.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="callDelete"></a>
# **callDelete**
> callDelete(direction, orderID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

apiInstance.callDelete(direction, orderID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="cancel"></a>
# **cancel**
> Order cancel(direction, orderID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

apiInstance.cancel(direction, orderID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="create"></a>
# **create**
> Order create(direction, order)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var order = new OrderCloud.Order(); // Order | 

apiInstance.create(direction, order).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **order** | [**Order**](Order.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="decline"></a>
# **decline**
> Order decline(direction, orderID, orderApprovalInfo)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var orderApprovalInfo = new OrderCloud.OrderApprovalInfo(); // OrderApprovalInfo | 

apiInstance.decline(direction, orderID, orderApprovalInfo).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **orderApprovalInfo** | [**OrderApprovalInfo**](OrderApprovalInfo.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="get"></a>
# **get**
> Order get(direction, orderID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

apiInstance.get(direction, orderID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="list"></a>
# **list**
> ListOrder list(direction, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var opts = { 
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'supplierID': "supplierID_example", // String | ID of the supplier.
  'from': "from_example", // String | Lower bound of date range that the order was created.
  'to': "to_example", // String | Upper bound of date range that the order was created.
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
apiInstance.list(direction, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **supplierID** | **String**| ID of the supplier. | [optional] 
 **from** | **String**| Lower bound of date range that the order was created. | [optional] 
 **to** | **String**| Upper bound of date range that the order was created. | [optional] 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListOrder**](ListOrder.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="listApprovals"></a>
# **listApprovals**
> ListOrderApproval listApprovals(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var opts = { 
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
apiInstance.listApprovals(direction, orderID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListOrderApproval**](ListOrderApproval.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="listEligibleApprovers"></a>
# **listEligibleApprovers**
> ListUser listEligibleApprovers(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var opts = { 
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
apiInstance.listEligibleApprovers(direction, orderID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
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

<a name="listPromotions"></a>
# **listPromotions**
> ListOrderPromotion listPromotions(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var opts = { 
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
apiInstance.listPromotions(direction, orderID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListOrderPromotion**](ListOrderPromotion.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="patch"></a>
# **patch**
> Order patch(direction, orderID, partialOrder)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var partialOrder = new OrderCloud.Order(); // Order | 

apiInstance.patch(direction, orderID, partialOrder).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **partialOrder** | [**Order**](Order.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="patchBillingAddress"></a>
# **patchBillingAddress**
> Order patchBillingAddress(direction, orderID, partialAddress)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var partialAddress = new OrderCloud.Address(); // Address | 

apiInstance.patchBillingAddress(direction, orderID, partialAddress).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **partialAddress** | [**Address**](Address.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="patchFromUser"></a>
# **patchFromUser**
> Order patchFromUser(direction, orderID, partialUser)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var partialUser = new OrderCloud.User(); // User | 

apiInstance.patchFromUser(direction, orderID, partialUser).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **partialUser** | [**User**](User.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="patchShippingAddress"></a>
# **patchShippingAddress**
> Order patchShippingAddress(direction, orderID, partialAddress)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var partialAddress = new OrderCloud.Address(); // Address | 

apiInstance.patchShippingAddress(direction, orderID, partialAddress).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **partialAddress** | [**Address**](Address.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="removePromotion"></a>
# **removePromotion**
> Order removePromotion(direction, orderID, promoCode)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var promoCode = "promoCode_example"; // String | Promo code of the order.

apiInstance.removePromotion(direction, orderID, promoCode).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **promoCode** | **String**| Promo code of the order. | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="save"></a>
# **save**
> Order save(direction, orderID, order)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var order = new OrderCloud.Order(); // Order | 

apiInstance.save(direction, orderID, order).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **order** | [**Order**](Order.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="setBillingAddress"></a>
# **setBillingAddress**
> Order setBillingAddress(direction, orderID, address)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var address = new OrderCloud.Address(); // Address | 

apiInstance.setBillingAddress(direction, orderID, address).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="setShippingAddress"></a>
# **setShippingAddress**
> Order setShippingAddress(direction, orderID, address)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var address = new OrderCloud.Address(); // Address | 

apiInstance.setShippingAddress(direction, orderID, address).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ship"></a>
# **ship**
> Order ship(direction, orderID, shipment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var shipment = new OrderCloud.Shipment(); // Shipment | 

apiInstance.ship(direction, orderID, shipment).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **shipment** | [**Shipment**](Shipment.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="submit"></a>
# **submit**
> Order submit(direction, orderID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.

var orderID = "orderID_example"; // String | ID of the order.

apiInstance.submit(direction, orderID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing. | 
 **orderID** | **String**| ID of the order. | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

