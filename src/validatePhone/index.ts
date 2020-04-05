import validateMobilePhone from '../validateMobilePhone/index'
import validateFixedPhone from '../validateFixedPhone/index'
/**
 *  Returns `true` if the phone number is valid
 *
 * @example
 * ```
 * let isValid = LuxUtils.validatePhone(621123456); //true;
 * let isValid2 = LuxUtils.validatePhone("444444"); //true;
 * let isValid3 = LuxUtils.validatePhone("4444"); //false;
 * ```
 */
const validatePhone = (phoneNumber: string | number | null) =>
  validateMobilePhone(phoneNumber) || validateFixedPhone(phoneNumber)
export default validatePhone
