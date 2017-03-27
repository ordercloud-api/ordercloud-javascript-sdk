# OrderCloud.PasswordResets

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ResetPasswordByVerificationCode**](PasswordResets.md#ResetPasswordByVerificationCode) | **PUT** /password/reset/{verificationCode} | 
[**SendVerificationCode**](PasswordResets.md#SendVerificationCode) | **POST** /password/reset | 


<a name="ResetPasswordByVerificationCode"></a>
# **ResetPasswordByVerificationCode**
> ResetPasswordByVerificationCode(verificationCode, passwordReset)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PasswordResets();

var verificationCode = "verificationCode_example"; // String | Verification code of the forgotten password.

var passwordReset = new OrderCloud.PasswordReset(); // PasswordReset | 

apiInstance.ResetPasswordByVerificationCode(verificationCode, passwordReset).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verificationCode** | **String**| Verification code of the forgotten password. | 
 **passwordReset** | [**PasswordReset**](PasswordReset.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="SendVerificationCode"></a>
# **SendVerificationCode**
> SendVerificationCode(passwordResetRequest)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PasswordResets();

var passwordResetRequest = new OrderCloud.PasswordResetRequest(); // PasswordResetRequest | 

apiInstance.SendVerificationCode(passwordResetRequest).then(function() {
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

