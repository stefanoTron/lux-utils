/**
 * @memberof LuxUtils
 * @function validateFixedPhoneWithPrefix
 * @description Returns `true` if the fixed phone number with prefix is valid
 * @param {(string)}  fixedPhoneNumberWithPrefix  fixed phone number with prefix to validate. Can be a `string`
 * @returns {boolean} `true` or `false`

 *
 * @example
 * // validate a fixed phone number
 *  let isValid = LuxUtils.validateFixedPhoneWithPrefix(00352420288); //true;
 *  let isValid2 = LuxUtils.validateFixedPhoneWithPrefix("+35244 12 34 22"); //true;
 *  let isValid3 = LuxUtils.validateFixedPhoneWithPrefix("4444"); //false;
 */

import validateFixedPhone from '../validateFixedPhone/index';

export default (fixedPhoneNumberWithPrefix) => {
    if (typeof fixedPhoneNumberWithPrefix === 'string') {
        if (fixedPhoneNumberWithPrefix.indexOf('+352') === 0) {
            return validateFixedPhone(
                fixedPhoneNumberWithPrefix.substring(4, fixedPhoneNumberWithPrefix.length),
            );
        }
        if (fixedPhoneNumberWithPrefix.indexOf('00352') === 0) {
            return validateFixedPhone(
                fixedPhoneNumberWithPrefix.substring(5, fixedPhoneNumberWithPrefix.length),
            );
        }
    }
    return false;
};
