/**
 * @memberof LuxUtils
 * @function validateFixedPhone
 * @description Returns `true` if the fixed phone number is valid
 * @param {(string|integer)}  fixedPhoneNumber  fixed phone number to validate. Can be a `string` or a `integer`
 * @returns {boolean} `true` or `false`

 *
 * @example
 * // validate a fixed phone number
 *  let isValid = LuxUtils.validateFixedPhone(420288); //true;
 *  let isValid2 = LuxUtils.validateFixedPhone("44 12 34 22"); //true;
 *  let isValid3 = LuxUtils.validateFixedPhone("4444"); //false;
 */

export default (fixedPhoneNumber) => {
    if (typeof fixedPhoneNumber === 'string') {
        // format: 440288 as a string
        const strippedFixedPhoneNumber = fixedPhoneNumber.replace(/\s/g, '').replace(/-/g, '');
        if (strippedFixedPhoneNumber.length >= 6 && strippedFixedPhoneNumber.length <= 8) {
            fixedPhoneNumber = parseInt(strippedFixedPhoneNumber);
            if (isNaN(fixedPhoneNumber)) {
                return false;
            }
        } else {
            return false;
        }
    }

    // format: 440288
    if (Number.isInteger(fixedPhoneNumber)) {
        return fixedPhoneNumber > 99999 && fixedPhoneNumber <= 99999999;
    }

    return false;
};
