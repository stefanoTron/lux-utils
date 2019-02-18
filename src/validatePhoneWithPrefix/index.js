/**
 * @memberof LuxUtils
 * @function validatePhoneWithPrefix
 * @description Returns `true` if the phone number with prefix is valid
 * @param {(string)}  phoneNumber  phone number with prefix to validate. Can be a `string`
 *
 * @returns {boolean} `true` or `false`

 *
 * @example
 * // validate a phone number
 *  let isValid = LuxUtils.validatePhone(00352621123456); //true;
 *  let isValid2 = LuxUtils.validatePhone("+352444444"); //true;
 *  let isValid3 = LuxUtils.validatePhone("4444"); //false;
 */

import validateMobilePhoneWithPrefix from '../validateMobilePhoneWithPrefix/index';
import validateFixedPhoneWithPrefix from '../validateFixedPhoneWithPrefix/index';

export default phoneNumber => validateMobilePhoneWithPrefix(phoneNumber) || validateFixedPhoneWithPrefix(phoneNumber);
