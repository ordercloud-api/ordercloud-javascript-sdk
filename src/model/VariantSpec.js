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
    define(['Sdk'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Sdk'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.VariantSpec = factory(root.OrderCloud.Sdk);
  }
}(this, function(Sdk) {
  'use strict';




  /**
   * The VariantSpec model module.
   * @module model/VariantSpec
   */

  /**
   * Constructs a new <code>VariantSpec</code>.
   * @alias module:model/VariantSpec
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>VariantSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariantSpec} obj Optional instance to populate.
   * @return {module:model/VariantSpec} The populated <code>VariantSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SpecID')) {
        obj['SpecID'] = Sdk.convertToType(data['SpecID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = Sdk.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('OptionID')) {
        obj['OptionID'] = Sdk.convertToType(data['OptionID'], 'String');
      }
      if (data.hasOwnProperty('Value')) {
        obj['Value'] = Sdk.convertToType(data['Value'], 'String');
      }
      if (data.hasOwnProperty('PriceMarkupType')) {
        obj['PriceMarkupType'] = Sdk.convertToType(data['PriceMarkupType'], 'String');
      }
      if (data.hasOwnProperty('PriceMarkup')) {
        obj['PriceMarkup'] = Sdk.convertToType(data['PriceMarkup'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} SpecID
   */
  exports.prototype['SpecID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} OptionID
   */
  exports.prototype['OptionID'] = undefined;
  /**
   * @member {String} Value
   */
  exports.prototype['Value'] = undefined;
  /**
   * @member {String} PriceMarkupType
   */
  exports.prototype['PriceMarkupType'] = undefined;
  /**
   * @member {Number} PriceMarkup
   */
  exports.prototype['PriceMarkup'] = undefined;



  return exports;
}));


