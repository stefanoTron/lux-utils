import validatePhone from './index'

test('validatePhone 621778877', () => {
  const returnedValue = validatePhone(621778877)
  expect(returnedValue).toBe(true)
})

test('validatePhone 621 77 88 77', () => {
  const returnedValue = validatePhone('621 77 88 77')
  expect(returnedValue).toBe(true)
})

test('validatePhone 621-77-88-77', () => {
  const returnedValue = validatePhone('621-77-88-77')
  expect(returnedValue).toBe(true)
})

test('validatePhone 621 778 877', () => {
  const returnedValue = validatePhone('621 778 877')
  expect(returnedValue).toBe(true)
})

test('validatePhone 621778877', () => {
  const returnedValue = validatePhone('621778877')
  expect(returnedValue).toBe(true)
})

test('validatePhone 4422', () => {
  const returnedValue = validatePhone(4422)
  expect(returnedValue).toBe(false)
})
test('validatePhone "62177887"', () => {
  const returnedValue = validatePhone('62177887')
  expect(returnedValue).toBe(true)
})
test('validatePhone "82177887"', () => {
  const returnedValue = validatePhone('82177887')
  expect(returnedValue).toBe(true)
})

test('validatePhone 52177887', () => {
  const returnedValue = validatePhone(52177887)
  expect(returnedValue).toBe(true)
})
test('validatePhone "450"', () => {
  const returnedValue = validatePhone('450')
  expect(returnedValue).toBe(false)
})
test('validatePhone "dsksd"', () => {
  const returnedValue = validatePhone('dsksd')
  expect(returnedValue).toBe(false)
})
test('validatePhone "azertyuio"', () => {
  const returnedValue = validatePhone('azertyuio')
  expect(returnedValue).toBe(false)
})
test('validatePhone null', () => {
  const returnedValue = validatePhone(null)
  expect(returnedValue).toBe(false)
})

test('validatePhone 450288', () => {
  const returnedValue = validatePhone(450288)
  expect(returnedValue).toBe(true)
})

test('validatePhone 45 02 88', () => {
  const returnedValue = validatePhone('45 02 88')
  expect(returnedValue).toBe(true)
})

test('validatePhone 45-02-88', () => {
  const returnedValue = validatePhone('45-02-88')
  expect(returnedValue).toBe(true)
})

test('validatePhone 45028811', () => {
  const returnedValue = validatePhone(44028811)
  expect(returnedValue).toBe(true)
})

test('validatePhone 45 02 88 11', () => {
  const returnedValue = validatePhone('45 02 88 11')
  expect(returnedValue).toBe(true)
})

test('validatePhone 45-02-88-11', () => {
  const returnedValue = validatePhone('45-02-88-11')
  expect(returnedValue).toBe(true)
})

test('validatePhone 4422', () => {
  const returnedValue = validatePhone(4422)
  expect(returnedValue).toBe(false)
})
test('validatePhone "4422"', () => {
  const returnedValue = validatePhone('4422')
  expect(returnedValue).toBe(false)
})
test('validatePhone "44 22"', () => {
  const returnedValue = validatePhone('44 22')
  expect(returnedValue).toBe(false)
})

test('validatePhone 4502883333', () => {
  const returnedValue = validatePhone(4502883333)
  expect(returnedValue).toBe(false)
})
test('validatePhone "4502883333"', () => {
  const returnedValue = validatePhone('45402883333')
  expect(returnedValue).toBe(false)
})

test('validatePhone "azertyu"', () => {
  const returnedValue = validatePhone('azertyu')
  expect(returnedValue).toBe(false)
})
test('validatePhone null', () => {
  const returnedValue = validatePhone(null)
  expect(returnedValue).toBe(false)
})
