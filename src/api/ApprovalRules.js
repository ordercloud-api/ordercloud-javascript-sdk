/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Sdk', 'model/ApprovalRule', 'model/ListApprovalRule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Sdk'), require('../model/ApprovalRule'), require('../model/ListApprovalRule'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ApprovalRules = factory(root.OrderCloud.Sdk, root.OrderCloud.ApprovalRule, root.OrderCloud.ListApprovalRule);
  }
}(this, function(Sdk, ApprovalRule, ListApprovalRule) {
  'use strict';

  /**
   * ApprovalRule service.
   * @module api/ApprovalRules
   */

  /**
   * Constructs a new ApprovalRules. 
   * @alias module:api/ApprovalRules
   * @class
   * @param {module:Sdk} sdk Optional API client implementation to use,
   * default to {@link module:Sdk#instance} if unspecified.
   */
  var exports = function(sdk) {
    this.sdk = sdk || Sdk.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/ApprovalRule} approvalRule 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApprovalRule}
     */
    this.Create = function(buyerID, approvalRule) {
      var postBody = approvalRule;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'approvalRule' is set
      if (approvalRule == undefined || approvalRule == null) {
        throw new Error("Missing the required parameter 'approvalRule' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ApprovalRule;

      return this.sdk.callApi(
        '/buyers/{buyerID}/approvalrules', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} approvalRuleID ID of the approval rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, approvalRuleID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'approvalRuleID' is set
      if (approvalRuleID == undefined || approvalRuleID == null) {
        throw new Error("Missing the required parameter 'approvalRuleID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'approvalRuleID': approvalRuleID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.sdk.callApi(
        '/buyers/{buyerID}/approvalrules/{approvalRuleID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} approvalRuleID ID of the approval rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApprovalRule}
     */
    this.Get = function(buyerID, approvalRuleID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'approvalRuleID' is set
      if (approvalRuleID == undefined || approvalRuleID == null) {
        throw new Error("Missing the required parameter 'approvalRuleID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'approvalRuleID': approvalRuleID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ApprovalRule;

      return this.sdk.callApi(
        '/buyers/{buyerID}/approvalrules/{approvalRuleID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListApprovalRule}
     */
    this.List = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling List");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListApprovalRule;

      return this.sdk.callApi(
        '/buyers/{buyerID}/approvalrules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} approvalRuleID ID of the approval rule.
     * @param {module:model/ApprovalRule} partialApprovalRule 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApprovalRule}
     */
    this.Patch = function(buyerID, approvalRuleID, partialApprovalRule) {
      var postBody = partialApprovalRule;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'approvalRuleID' is set
      if (approvalRuleID == undefined || approvalRuleID == null) {
        throw new Error("Missing the required parameter 'approvalRuleID' when calling Patch");
      }

      // verify the required parameter 'partialApprovalRule' is set
      if (partialApprovalRule == undefined || partialApprovalRule == null) {
        throw new Error("Missing the required parameter 'partialApprovalRule' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'approvalRuleID': approvalRuleID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ApprovalRule;

      return this.sdk.callApi(
        '/buyers/{buyerID}/approvalrules/{approvalRuleID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} approvalRuleID ID of the approval rule.
     * @param {module:model/ApprovalRule} approvalRule 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApprovalRule}
     */
    this.Save = function(buyerID, approvalRuleID, approvalRule) {
      var postBody = approvalRule;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Save");
      }

      // verify the required parameter 'approvalRuleID' is set
      if (approvalRuleID == undefined || approvalRuleID == null) {
        throw new Error("Missing the required parameter 'approvalRuleID' when calling Save");
      }

      // verify the required parameter 'approvalRule' is set
      if (approvalRule == undefined || approvalRule == null) {
        throw new Error("Missing the required parameter 'approvalRule' when calling Save");
      }


      var pathParams = {
        'buyerID': buyerID,
        'approvalRuleID': approvalRuleID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ApprovalRule;

      return this.sdk.callApi(
        '/buyers/{buyerID}/approvalrules/{approvalRuleID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
