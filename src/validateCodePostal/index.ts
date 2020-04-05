/**
 * Returns `true` if the given postal code is valid
 *
 * @example
 * ```
 * let isValid = LuxUtils.validateCodePostal(4402); //true;
 * let isValid2 = LuxUtils.validateCodePostal("L-4402"); //true;
 * let isValid3 = LuxUtils.validateCodePostal("0404"); //false;
 * ```
 */
const validateCodePostal = (codePostalToValidate: string | number | null) => {
  if (codePostalToValidate === null) return false
  // format: 4402
  if (typeof codePostalToValidate === 'number') {
    return codePostalToValidate >= 1110 && codePostalToValidate <= 9999
  }
  // format: L-4402 as a string
  if (codePostalToValidate.startsWith('L-')) {
    codePostalToValidate = codePostalToValidate.substr(2, codePostalToValidate.length - 2)
  }
  // format: 4402 as a string
  if (codePostalToValidate.length === 4) {
    let parsedCP = parseInt(codePostalToValidate, 10)
    return parsedCP >= 1110 && parsedCP <= 9999
  }

  return false
}

export default validateCodePostal
