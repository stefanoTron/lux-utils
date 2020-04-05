/**
 * @class LuxUtils
 * @description JS library to validate and format common Luxembourgish administrative data.
 */

import validateMatricule from './validateMatricule'
import validateLicensePlate from './validateLicensePlate'
import validateCodePostal from './validateCodePostal'
import validateFixedPhone from './validateFixedPhone'
import validateFixedPhoneWithPrefix from './validateFixedPhoneWithPrefix'
import validateMobilePhone from './validateMobilePhone'
import validateMobilePhoneWithPrefix from './validateMobilePhoneWithPrefix'
import validatePhone from './validatePhone'
import validatePhoneWithPrefix from './validatePhoneWithPrefix'

export {
  validateMatricule,
  validateLicensePlate,
  validateCodePostal,
  validateFixedPhone,
  validateFixedPhoneWithPrefix,
  validateMobilePhone,
  validateMobilePhoneWithPrefix,
  validatePhone,
  validatePhoneWithPrefix
}
