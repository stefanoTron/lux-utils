import validateFixedPhone from '../validateFixedPhone/index'
/**
 * Returns `true` if the fixed phone number with prefix is valid
 *
 * @example
 * ```
 * let isValid = LuxUtils.validateFixedPhoneWithPrefix(00352420288); //true;
 * let isValid2 = LuxUtils.validateFixedPhoneWithPrefix("+35244 12 34 22"); //true;
 * let isValid3 = LuxUtils.validateFixedPhoneWithPrefix("4444"); //false;
 * ```
 */
const validateFixedPhoneWithPrefix = (fixedPhoneNumberWithPrefix: string | number | null) => {
  if (typeof fixedPhoneNumberWithPrefix === 'string') {
    if (fixedPhoneNumberWithPrefix.indexOf('+352') === 0) {
      return validateFixedPhone(
        fixedPhoneNumberWithPrefix.substring(4, fixedPhoneNumberWithPrefix.length)
      )
    }
    if (fixedPhoneNumberWithPrefix.indexOf('00352') === 0) {
      return validateFixedPhone(
        fixedPhoneNumberWithPrefix.substring(5, fixedPhoneNumberWithPrefix.length)
      )
    }
  }
  return false
}
export default validateFixedPhoneWithPrefix
