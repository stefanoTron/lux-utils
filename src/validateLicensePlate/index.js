/**
 * @memberof LuxUtils
 * @function validateLicensePlate
 * @description Returns `true` if the given postal code is valid
 * @param {(string|integer)}  licensePlateToValidate  postal code to validate. Can be a `string` or a `integer`
 * @returns {boolean} `true` or `false`

 *
 * @example
 * // validate a postal code
 *  let isValid = LuxUtils.validateLicensePlate(4402); //true;
 *  let isValid2 = LuxUtils.validateLicensePlate("L-4402"); //true;
 *  let isValid3 = LuxUtils.validateLicensePlate("0404"); //false;
 */

export default (licensePlateToValidate) => {
    // format: custom plate - 1111 or 11111
    if (Number.isInteger(licensePlateToValidate)) {
        return (
            licensePlateToValidate.toString().length === 4
            || licensePlateToValidate.toString().length === 5
        );
    }
    // format: LL 22
    // format: LL 1234
    if (typeof licensePlateToValidate === 'string') {
        const strippedLicensePlateToValidate = licensePlateToValidate.replace(/\s/g, '');
        const twoFirstLetters = strippedLicensePlateToValidate.substr(0, 2);

        if (isTwoLetters(twoFirstLetters)) {
            const rest = strippedLicensePlateToValidate.substr(
                2,
                strippedLicensePlateToValidate.length - 2,
            );
            console.log('test', rest);
            if (rest.length === 4 && /^\d+$/.test(rest)) {
                return true;
            }
        } else {
            // custom plate
            return (
                strippedLicensePlateToValidate.toString().length === 4
                || strippedLicensePlateToValidate.toString().length === 5
            );
        }
    }

    return false;
};

function isTwoLetters(str) {
    const regex = /^[a-z]+$/i;
    return str.length === 2 && regex.test(str);
}
