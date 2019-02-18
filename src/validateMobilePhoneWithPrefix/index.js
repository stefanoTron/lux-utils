/**
 * @memberof LuxUtils
 * @function validateMobilePhoneWithPrefix
 * @description Returns `true` if the mobile phone number with prefix is valid
 * @param {(string)}  MobilePhoneNumberWithPrefix  mobile phone number with prefix to validate. Can be a `string`
 * @returns {boolean} `true` or `false`

 *
 * @example
 * // validate a Mobile phone number
 *  let isValid = LuxUtils.validateMobilePhoneWithPrefix(00352621123456); //true;
 *  let isValid2 = LuxUtils.validateMobilePhoneWithPrefix("+352 621 77 77 77"); //true;
 *  let isValid3 = LuxUtils.validateMobilePhoneWithPrefix("4444"); //false;
 */

import validateMobilePhone from '../validateMobilePhone/index';

export default (MobilePhoneNumberWithPrefix) => {
    if (typeof MobilePhoneNumberWithPrefix === 'string') {
        if (MobilePhoneNumberWithPrefix.indexOf('+352') === 0) {
            return validateMobilePhone(
                MobilePhoneNumberWithPrefix.substring(4, MobilePhoneNumberWithPrefix.length),
            );
        }
        if (MobilePhoneNumberWithPrefix.indexOf('00352') === 0) {
            return validateMobilePhone(
                MobilePhoneNumberWithPrefix.substring(5, MobilePhoneNumberWithPrefix.length),
            );
        }
    }
    return false;
};
