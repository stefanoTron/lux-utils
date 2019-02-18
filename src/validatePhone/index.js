/**
 * @memberof LuxUtils
 * @function validatePhone
 * @description Returns `true` if the phone number is valid
 * @param {(string|integer)}  phoneNumber  phone number to validate. Can be a `string`
 * or a `integer`
 * @returns {boolean} `true` or `false`

 *
 * @example
 * // validate a phone number
 *  let isValid = LuxUtils.validatePhone(621123456); //true;
 *  let isValid2 = LuxUtils.validatePhone("444444"); //true;
 *  let isValid3 = LuxUtils.validatePhone("4444"); //false;
 */

import validateMobilePhone from '../validateMobilePhone/index';
import validateFixedPhone from '../validateFixedPhone/index';

export default phoneNumber => validateMobilePhone(phoneNumber) || validateFixedPhone(phoneNumber);
