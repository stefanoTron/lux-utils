import validateMobilePhoneWithPrefix from '../validateMobilePhoneWithPrefix/index'
import validateFixedPhoneWithPrefix from '../validateFixedPhoneWithPrefix/index'

/**
 * Returns `true` if the phone number with prefix is valid
 *
 * @example
 * ```
 * let isValid = LuxUtils.validatePhone(00352621123456); //true;
 * let isValid2 = LuxUtils.validatePhone("+352444444"); //true;
 * let isValid3 = LuxUtils.validatePhone("4444"); //false;
 * ```
 */
const validatePhoneWithPrefix = (phoneNumber: string | number | null) =>
  validateMobilePhoneWithPrefix(phoneNumber) || validateFixedPhoneWithPrefix(phoneNumber)

export default validatePhoneWithPrefix
