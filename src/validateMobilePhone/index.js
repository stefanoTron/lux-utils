/**
 * @memberof LuxUtils
 * @function validateMobilePhone
 * @description Returns `true` if the mobile phone number is valid
 * @param {(string|integer)}  mobilePhoneNumber  mobile phone number to validate. Can be a `string`
 * or a `integer`
 * @returns {boolean} `true` or `false`

 *
 * @example
 * // validate a postal code
 *  let isValid = LuxUtils.validateMobilePhone(621123456); //true;
 *  let isValid2 = LuxUtils.validateMobilePhone("621 12 34 56"); //true;
 *  let isValid3 = LuxUtils.validateMobilePhone("4444"); //false;
 */

export default (mobilePhoneNumber) => {
    if (typeof mobilePhoneNumber === 'string') {
        // format: 621123456 as a string
        const strippedmobilePhoneNumber = mobilePhoneNumber.replace(/\s/g, '').replace(/-/g, '');
        if (strippedmobilePhoneNumber.length === 9) {
            mobilePhoneNumber = parseInt(strippedmobilePhoneNumber, 10);
            if (Number.isNaN(mobilePhoneNumber)) {
                return false;
            }
        } else {
            return false;
        }
    }

    // format: 621123456
    if (Number.isInteger(mobilePhoneNumber)) {
        return mobilePhoneNumber > 600000000 && mobilePhoneNumber <= 699999999;
    }

    return false;
};
