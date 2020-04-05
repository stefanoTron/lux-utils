import validateFixedPhone from './index'

test('validateFixedPhone 450288', () => {
  const returnedValue = validateFixedPhone(450288)
  expect(returnedValue).toBe(true)
})

test('validateFixedPhone 45 02 88', () => {
  const returnedValue = validateFixedPhone('45 02 88')
  expect(returnedValue).toBe(true)
})

test('validateFixedPhone 45-02-88', () => {
  const returnedValue = validateFixedPhone('45-02-88')
  expect(returnedValue).toBe(true)
})

test('validateFixedPhone 45028811', () => {
  const returnedValue = validateFixedPhone(44028811)
  expect(returnedValue).toBe(true)
})

test('validateFixedPhone 45 02 88 11', () => {
  const returnedValue = validateFixedPhone('45 02 88 11')
  expect(returnedValue).toBe(true)
})

test('validateFixedPhone 45-02-88-11', () => {
  const returnedValue = validateFixedPhone('45-02-88-11')
  expect(returnedValue).toBe(true)
})

test('validateFixedPhone 4422', () => {
  const returnedValue = validateFixedPhone(4422)
  expect(returnedValue).toBe(false)
})
test('validateFixedPhone "4422"', () => {
  const returnedValue = validateFixedPhone('4422')
  expect(returnedValue).toBe(false)
})
test('validateFixedPhone "44 22"', () => {
  const returnedValue = validateFixedPhone('44 22')
  expect(returnedValue).toBe(false)
})

test('validateFixedPhone 4502883333', () => {
  const returnedValue = validateFixedPhone(4502883333)
  expect(returnedValue).toBe(false)
})
test('validateFixedPhone "4502883333"', () => {
  const returnedValue = validateFixedPhone('45402883333')
  expect(returnedValue).toBe(false)
})

test('validateFixedPhone "azertyu"', () => {
  const returnedValue = validateFixedPhone('azertyu')
  expect(returnedValue).toBe(false)
})
test('validateFixedPhone null', () => {
  const returnedValue = validateFixedPhone(null)
  expect(returnedValue).toBe(false)
})
