/**
 * Returns `true` if the fixed phone number is valid
 *
 * @example
 * ```
 * let isValid = LuxUtils.validateFixedPhone(420288); //true;
 * let isValid2 = LuxUtils.validateFixedPhone("44 12 34 22"); //true;
 * let isValid3 = LuxUtils.validateFixedPhone("4444"); //false;
 * ```
 */
const validateFixedPhone = (fixedPhoneNumber: string | number | null) => {
  if (typeof fixedPhoneNumber === 'string') {
    // format: 440288 as a string
    const strippedFixedPhoneNumber = fixedPhoneNumber.replace(/\s/g, '').replace(/-/g, '')
    if (strippedFixedPhoneNumber.length >= 6 && strippedFixedPhoneNumber.length <= 8) {
      fixedPhoneNumber = parseInt(strippedFixedPhoneNumber, 10)
      if (isNaN(fixedPhoneNumber)) {
        return false
      }
    } else {
      return false
    }
  }

  // format: 440288
  if (typeof fixedPhoneNumber === 'number') {
    return fixedPhoneNumber > 99999 && fixedPhoneNumber <= 99999999
  }

  return false
}

export default validateFixedPhone
