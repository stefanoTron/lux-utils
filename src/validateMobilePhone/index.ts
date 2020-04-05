/**
 * Returns `true` if the mobile phone number is valid
 *
 * @example
 * ```
 * let isValid = LuxUtils.validateMobilePhone(621123456); //true;
 * let isValid2 = LuxUtils.validateMobilePhone("621 12 34 56"); //true;
 * let isValid3 = LuxUtils.validateMobilePhone("4444"); //false;
 * ```
 */
const validateMobilePhone = (mobilePhoneNumber: string | number | null) => {
  if (typeof mobilePhoneNumber === 'string') {
    // format: 621123456 as a string
    const strippedmobilePhoneNumber = mobilePhoneNumber.replace(/\s/g, '').replace(/-/g, '')
    if (strippedmobilePhoneNumber.length === 9) {
      mobilePhoneNumber = parseInt(strippedmobilePhoneNumber, 10)
      if (Number.isNaN(mobilePhoneNumber)) {
        return false
      }
    } else {
      return false
    }
  }

  // format: 621123456
  if (typeof mobilePhoneNumber === 'number') {
    return mobilePhoneNumber > 600000000 && mobilePhoneNumber <= 699999999
  }

  return false
}
export default validateMobilePhone
