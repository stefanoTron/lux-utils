/**
 * @memberof LuxUtils
 * @function validateCodePostal
 * @description Returns `true` if the given postal code is valid
 * @param {(string|integer)}  codePostalToValidate  postal code to validate. Can be a `string` or a `integer`
 * @returns {boolean} `true` or `false`

 *
 * @example
 * // validate a postal code
 *  let isValid = LuxUtils.validateCodePostal(4402); //true;
 *  let isValid2 = LuxUtils.validateCodePostal("L-4402"); //true;
 *  let isValid3 = LuxUtils.validateCodePostal("0404"); //false;
 */

export default codePostalToValidate => {
  //format: 4402
  if (Number.isInteger(codePostalToValidate)) {
    return codePostalToValidate >= 1110 && codePostalToValidate <= 9999;
  }
  if (typeof codePostalToValidate === "string") {
    //format: L-4402 as a string
    if (codePostalToValidate.startsWith("L-")) {
      codePostalToValidate = codePostalToValidate.substr(
        2,
        codePostalToValidate.length - 2
      );
    }
    //format: 4402 as a string
    if (codePostalToValidate.length === 4) {
      let parsedCP = parseInt(codePostalToValidate, 10);
      return parsedCP >= 1110 && parsedCP <= 9999;
    }
  }
  return false;
};
