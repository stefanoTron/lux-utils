import validateMobilePhoneWithPrefix from './index'

test('validateMobilePhoneWithPrefix 00352621667766', () => {
  const returnedValue = validateMobilePhoneWithPrefix('00352621667766')
  expect(returnedValue).toBe(true)
})

test('validateMobilePhoneWithPrefix 00352 621667766', () => {
  const returnedValue = validateMobilePhoneWithPrefix('00352 621667766')
  expect(returnedValue).toBe(true)
})
test('validateMobilePhoneWithPrefix 00352', () => {
  const returnedValue = validateMobilePhoneWithPrefix('00352')
  expect(returnedValue).toBe(false)
})

test('validateMobilePhoneWithPrefix 62166776600352', () => {
  const returnedValue = validateMobilePhoneWithPrefix('62166776600352')
  expect(returnedValue).toBe(false)
})

test('validateMobilePhoneWithPrefix +352 621 77 88 88', () => {
  const returnedValue = validateMobilePhoneWithPrefix('+352 621 77 88 88')
  expect(returnedValue).toBe(true)
})

test('validateMobilePhoneWithPrefix 00352 6214502 88', () => {
  const returnedValue = validateMobilePhoneWithPrefix('00352 6214502 88')
  expect(returnedValue).toBe(true)
})

test('validateMobilePhoneWithPrefix 621777788', () => {
  const returnedValue = validateMobilePhoneWithPrefix('621777788')
  expect(returnedValue).toBe(false)
})

test('validateMobilePhoneWithPrefix null', () => {
  const returnedValue = validateMobilePhoneWithPrefix(null)
  expect(returnedValue).toBe(false)
})
