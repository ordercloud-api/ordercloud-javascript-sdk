# OrderCloud.PasswordResets

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resetPasswordByVerificationCode**](PasswordResets.md#resetPasswordByVerificationCode) | **PUT** /password/reset/{verificationCode} | 
[**sendVerificationCode**](PasswordResets.md#sendVerificationCode) | **POST** /password/reset | 


<a name="resetPasswordByVerificationCode"></a>
# **resetPasswordByVerificationCode**
> resetPasswordByVerificationCode(verificationCode, passwordReset)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PasswordResets();

var verificationCode = "verificationCode_example"; // String | Verification code of the password reset.

var passwordReset = new OrderCloud.PasswordReset(); // PasswordReset | 

apiInstance.resetPasswordByVerificationCode(verificationCode, passwordReset).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verificationCode** | **String**| Verification code of the password reset. | 
 **passwordReset** | [**PasswordReset**](PasswordReset.md)|  | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="sendVerificationCode"></a>
# **sendVerificationCode**
> sendVerificationCode(passwordResetRequest)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PasswordResets();

var passwordResetRequest = new OrderCloud.PasswordResetRequest(); // PasswordResetRequest | 

apiInstance.sendVerificationCode(passwordResetRequest).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordResetRequest** | [**PasswordResetRequest**](PasswordResetRequest.md)|  | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

