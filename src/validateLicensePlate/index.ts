/**
 * Returns `true` if the given licence plate is valid
 *
 * @example
 * ```
 * let isValid = LuxUtils.validateLicensePlate(4402); //true;
 * let isValid2 = LuxUtils.validateLicensePlate("L-4402"); //true;
 * let isValid3 = LuxUtils.validateLicensePlate("0404"); //false;
 * ```
 */
const validateLicensePlate = (licensePlateToValidate: string | number | null) => {
  if (licensePlateToValidate === null) return false
  // format: custom plate - 1111 or 11111
  if (typeof licensePlateToValidate === 'number') {
    return (
      licensePlateToValidate.toString().length === 4 ||
      licensePlateToValidate.toString().length === 5
    )
  }

  // format: LL 22
  // format: LL 1234
  const strippedLicensePlateToValidate = licensePlateToValidate.replace(/\s/g, '')
  const twoFirstLetters = strippedLicensePlateToValidate.substr(0, 2)

  if (isTwoLetters(twoFirstLetters)) {
    const rest = strippedLicensePlateToValidate.substr(2, strippedLicensePlateToValidate.length - 2)
    if (rest.length === 4 && /^\d+$/.test(rest)) {
      return true
    }
  } else {
    // custom plate
    return (
      strippedLicensePlateToValidate.toString().length === 4 ||
      strippedLicensePlateToValidate.toString().length === 5
    )
  }

  return false
}

/**
 * @ignore
 */
function isTwoLetters(str: string) {
  const regex = /^[a-z]+$/i
  return str.length === 2 && regex.test(str)
}

export default validateLicensePlate
