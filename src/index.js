/**
 * @class LuxUtils
 * @description JS library to validate and format common Luxembourgish administrative data.
 */
import validateMatricule from "./validateMatricule";
import validateCodePostal from "./validateCodePostal";
import validateFixedPhone from "./validateFixedPhone";
import validateLicensePlate from "./validateLicensePlate";

export default {
  /**
     * @see modules/validateMatricule
     */
  validateMatricule,
  /**
     * @see modules/validateCodePostal
     */
  validateCodePostal,
  /**
     * @see modules/validateFixedPhone
     */
  validateFixedPhone,
  /**
     * @see modules/validateLicensePlate
     */
  validateLicensePlate
};
