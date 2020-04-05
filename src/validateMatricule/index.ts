/**
 * Returns `true` if the matricule is valid
 *
 * @example
 * ```
 * let isValid = LuxUtils.validateMatricule(1893120105732); //true;
 * ```
 */
const validateMatricule = (matriculeToValidate: number | string | null) => {
  if (typeof matriculeToValidate === 'string') return false
  if (matriculeToValidate === null) return false

  const matriculeToValidateString: string = matriculeToValidate.toString()
  if (matriculeToValidateString.length !== 13) return false

  const strippedMatricule: number = parseInt(matriculeToValidateString.substr(0, 11), 10)

  const luhn = parseInt(matriculeToValidateString.substr(11, 1), 10)
  if (!validateLuhn(strippedMatricule, luhn)) return false
  const verhoeff = parseInt(matriculeToValidateString.substr(12, 1), 10)
  if (!validateVerhoeff(strippedMatricule, verhoeff)) return false

  return true
}

/**
 * @ignore
 */
function validateVerhoeff(strippedMatricule: number, verhoeff: number) {
  return generate(strippedMatricule) === verhoeff
}
/**
 * @ignore
 */
function validateLuhn(strippedMatricule: number, luhn: number) {
  return calculateLuhn(strippedMatricule.toString()) === luhn
}
/**
 * @ignore
 */
const d = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
  [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
  [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
  [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
  [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
  [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
  [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
  [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
]

/**
 * @ignore
 */
const p = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
  [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
  [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
]
/**
 * @ignore
 */
const computed = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
/**
 * @ignore
 */
const inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9]
/**
 * @ignore
 */
function sumLuhn(digits: string, even: Boolean) {
  let sum = 0,
    digit = 0,
    i = digits.length

  while (i--) {
    digit = Number(digits[i])
    sum += (even = !even) ? computed[digit] : digit
  }

  return sum
}
/**
 * @ignore
 */
function calculateLuhn(digits: string) {
  const sum = sumLuhn(digits, false)
  return (sum * 9) % 10
}

/**
 * @ignore
 * converts string or number to an array and inverts it
 */
function invArray(array: number) {
  /*if (Object.prototype.toString.call(array) === '[object String]') {
    array = array.split('').map(Number)
  }*/
  const intArr = `${array}`.split('').map(x => Number(x))

  return intArr.reverse()
}

/**
 * @ignore
 * generates checksum
 */
function generate(array: number) {
  let c = 0
  const invertedArray = invArray(array)

  for (let i = 0; i < invertedArray.length; i++) {
    c = d[c][p[(i + 1) % 8][invertedArray[i]]]
  }

  return inv[c]
}

export default validateMatricule
