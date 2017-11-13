# OrderCloud.Orders

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddPromotion**](Orders.md#AddPromotion) | **POST** /orders/{direction}/{orderID}/promotions/{promoCode} | 
[**Approve**](Orders.md#Approve) | **POST** /orders/{direction}/{orderID}/approve | 
[**Cancel**](Orders.md#Cancel) | **POST** /orders/{direction}/{orderID}/cancel | 
[**Create**](Orders.md#Create) | **POST** /orders/{direction} | 
[**Decline**](Orders.md#Decline) | **POST** /orders/{direction}/{orderID}/decline | 
[**Delete**](Orders.md#Delete) | **DELETE** /orders/{direction}/{orderID} | 
[**Get**](Orders.md#Get) | **GET** /orders/{direction}/{orderID} | 
[**List**](Orders.md#List) | **GET** /orders/{direction} | 
[**ListApprovals**](Orders.md#ListApprovals) | **GET** /orders/{direction}/{orderID}/approvals | 
[**ListEligibleApprovers**](Orders.md#ListEligibleApprovers) | **GET** /orders/{direction}/{orderID}/eligibleapprovers | 
[**ListPromotions**](Orders.md#ListPromotions) | **GET** /orders/{direction}/{orderID}/promotions | 
[**Patch**](Orders.md#Patch) | **PATCH** /orders/{direction}/{orderID} | 
[**PatchBillingAddress**](Orders.md#PatchBillingAddress) | **PATCH** /orders/{direction}/{orderID}/billto | 
[**PatchShippingAddress**](Orders.md#PatchShippingAddress) | **PATCH** /orders/{direction}/{orderID}/shipto | 
[**RemovePromotion**](Orders.md#RemovePromotion) | **DELETE** /orders/{direction}/{orderID}/promotions/{promoCode} | 
[**SetBillingAddress**](Orders.md#SetBillingAddress) | **PUT** /orders/{direction}/{orderID}/billto | 
[**SetShippingAddress**](Orders.md#SetShippingAddress) | **PUT** /orders/{direction}/{orderID}/shipto | 
[**Ship**](Orders.md#Ship) | **POST** /orders/{direction}/{orderID}/ship | 
[**Submit**](Orders.md#Submit) | **POST** /orders/{direction}/{orderID}/submit | 
[**Update**](Orders.md#Update) | **PUT** /orders/{direction}/{orderID} | 


<a name="AddPromotion"></a>
# **AddPromotion**
> Promotion AddPromotion(direction, orderID, promoCode)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var promoCode = "promoCode_example"; // String | Promo code of the order.

apiInstance.AddPromotion(direction, orderID, promoCode).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **promoCode** | **String**| Promo code of the order. | 

### Return type

[**Promotion**](Promotion.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Approve"></a>
# **Approve**
> Order Approve(direction, orderID, info)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var info = new OrderCloud.OrderApprovalInfo(); // OrderApprovalInfo | 

apiInstance.Approve(direction, orderID, info).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **info** | [**OrderApprovalInfo**](OrderApprovalInfo.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Cancel"></a>
# **Cancel**
> Order Cancel(direction, orderID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

apiInstance.Cancel(direction, orderID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Create"></a>
# **Create**
> Order Create(direction, order)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var order = new OrderCloud.Order(); // Order | 

apiInstance.Create(direction, order).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **order** | [**Order**](Order.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Decline"></a>
# **Decline**
> Order Decline(direction, orderID, info)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var info = new OrderCloud.OrderApprovalInfo(); // OrderApprovalInfo | 

apiInstance.Decline(direction, orderID, info).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **info** | [**OrderApprovalInfo**](OrderApprovalInfo.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(direction, orderID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

apiInstance.Delete(direction, orderID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Get"></a>
# **Get**
> Order Get(direction, orderID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

apiInstance.Get(direction, orderID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListOrder List(direction, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var opts = { 
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'supplierID': "supplierID_example", // String | ID of the supplier.
  'from': "from_example", // String | Lower bound of date range that the order was created.
  'to': "to_example", // String | Upper bound of date range that the order was created.
  'search': "search_example", // String | Search of the order.
  'searchOn': ["searchOn_example"], // [String] | Search on of the order.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the order.
  'page': 56, // Number | Page of the order.
  'pageSize': 56, // Number | Page size of the order.
  'filters': {key: "filters_example"} // {String: String} | Filters of the order.
};
apiInstance.List(direction, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **supplierID** | **String**| ID of the supplier. | [optional] 
 **from** | **String**| Lower bound of date range that the order was created. | [optional] 
 **to** | **String**| Upper bound of date range that the order was created. | [optional] 
 **search** | **String**| Search of the order. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the order. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the order. | [optional] 
 **page** | **Number**| Page of the order. | [optional] 
 **pageSize** | **Number**| Page size of the order. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the order. | [optional] 

### Return type

[**ListOrder**](ListOrder.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListApprovals"></a>
# **ListApprovals**
> ListOrderApproval ListApprovals(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var opts = { 
  'search': "search_example", // String | Search of the order.
  'searchOn': ["searchOn_example"], // [String] | Search on of the order.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the order.
  'page': 56, // Number | Page of the order.
  'pageSize': 56, // Number | Page size of the order.
  'filters': {key: "filters_example"} // {String: String} | Filters of the order.
};
apiInstance.ListApprovals(direction, orderID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **search** | **String**| Search of the order. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the order. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the order. | [optional] 
 **page** | **Number**| Page of the order. | [optional] 
 **pageSize** | **Number**| Page size of the order. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the order. | [optional] 

### Return type

[**ListOrderApproval**](ListOrderApproval.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListEligibleApprovers"></a>
# **ListEligibleApprovers**
> ListUser ListEligibleApprovers(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var opts = { 
  'search': "search_example", // String | Search of the order.
  'searchOn': ["searchOn_example"], // [String] | Search on of the order.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the order.
  'page': 56, // Number | Page of the order.
  'pageSize': 56, // Number | Page size of the order.
  'filters': {key: "filters_example"} // {String: String} | Filters of the order.
};
apiInstance.ListEligibleApprovers(direction, orderID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **search** | **String**| Search of the order. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the order. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the order. | [optional] 
 **page** | **Number**| Page of the order. | [optional] 
 **pageSize** | **Number**| Page size of the order. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the order. | [optional] 

### Return type

[**ListUser**](ListUser.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="ListPromotions"></a>
# **ListPromotions**
> ListOrderPromotion ListPromotions(direction, orderID, opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var opts = { 
  'search': "search_example", // String | Search of the order.
  'searchOn': ["searchOn_example"], // [String] | Search on of the order.
  'sortBy': ["sortBy_example"], // [String] | Sort by of the order.
  'page': 56, // Number | Page of the order.
  'pageSize': 56, // Number | Page size of the order.
  'filters': {key: "filters_example"} // {String: String} | Filters of the order.
};
apiInstance.ListPromotions(direction, orderID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **search** | **String**| Search of the order. | [optional] 
 **searchOn** | [**[String]**](String.md)| Search on of the order. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort by of the order. | [optional] 
 **page** | **Number**| Page of the order. | [optional] 
 **pageSize** | **Number**| Page size of the order. | [optional] 
 **filters** | [**{String: String}**](String.md)| Filters of the order. | [optional] 

### Return type

[**ListOrderPromotion**](ListOrderPromotion.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> Order Patch(direction, orderID, partialOrder)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var partialOrder = new OrderCloud.Order(); // Order | 

apiInstance.Patch(direction, orderID, partialOrder).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **partialOrder** | [**Order**](Order.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="PatchBillingAddress"></a>
# **PatchBillingAddress**
> Order PatchBillingAddress(direction, orderID, address)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var address = new OrderCloud.Address(); // Address | 

apiInstance.PatchBillingAddress(direction, orderID, address).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="PatchShippingAddress"></a>
# **PatchShippingAddress**
> Order PatchShippingAddress(direction, orderID, address)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var address = new OrderCloud.Address(); // Address | 

apiInstance.PatchShippingAddress(direction, orderID, address).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="RemovePromotion"></a>
# **RemovePromotion**
> Order RemovePromotion(direction, orderID, promoCode)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var promoCode = "promoCode_example"; // String | Promo code of the order.

apiInstance.RemovePromotion(direction, orderID, promoCode).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **promoCode** | **String**| Promo code of the order. | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SetBillingAddress"></a>
# **SetBillingAddress**
> Order SetBillingAddress(direction, orderID, address)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var address = new OrderCloud.Address(); // Address | 

apiInstance.SetBillingAddress(direction, orderID, address).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SetShippingAddress"></a>
# **SetShippingAddress**
> Order SetShippingAddress(direction, orderID, address)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var address = new OrderCloud.Address(); // Address | 

apiInstance.SetShippingAddress(direction, orderID, address).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Ship"></a>
# **Ship**
> Order Ship(direction, orderID, shipment)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var shipment = new OrderCloud.BuyerShipment(); // BuyerShipment | 

apiInstance.Ship(direction, orderID, shipment).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **shipment** | [**BuyerShipment**](BuyerShipment.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Submit"></a>
# **Submit**
> Order Submit(direction, orderID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

apiInstance.Submit(direction, orderID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> Order Update(direction, orderID, order)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.Orders();

var direction = "direction_example"; // String | Direction of the order. Possible values: Incoming, Outgoing.

var orderID = "orderID_example"; // String | ID of the order.

var order = new OrderCloud.Order(); // Order | 

apiInstance.Update(direction, orderID, order).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | **String**| Direction of the order. Possible values: Incoming, Outgoing. | 
 **orderID** | **String**| ID of the order. | 
 **order** | [**Order**](Order.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

