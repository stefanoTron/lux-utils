import validateMobilePhone from '../validateMobilePhone/index'

/**
 * Returns `true` if the mobile phone number with prefix is valid
 *
 * @example
 * ```
 * let isValid = LuxUtils.validateMobilePhoneWithPrefix(00352621123456); //true;
 * let isValid2 = LuxUtils.validateMobilePhoneWithPrefix("+352 621 77 77 77"); //true;
 * let isValid3 = LuxUtils.validateMobilePhoneWithPrefix("4444"); //false;
 * ```
 */
const validateMobilePhoneWithPrefix = (MobilePhoneNumberWithPrefix: string | number | null) => {
  if (typeof MobilePhoneNumberWithPrefix === 'string') {
    if (MobilePhoneNumberWithPrefix.indexOf('+352') === 0) {
      return validateMobilePhone(
        MobilePhoneNumberWithPrefix.substring(4, MobilePhoneNumberWithPrefix.length)
      )
    }
    if (MobilePhoneNumberWithPrefix.indexOf('00352') === 0) {
      return validateMobilePhone(
        MobilePhoneNumberWithPrefix.substring(5, MobilePhoneNumberWithPrefix.length)
      )
    }
  }
  return false
}

export default validateMobilePhoneWithPrefix
