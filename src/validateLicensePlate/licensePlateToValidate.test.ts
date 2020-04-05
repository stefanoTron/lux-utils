import licensePlateToValidate from './index'

test('licensePlateToValidate 1111', () => {
  const returnedValue = licensePlateToValidate(1111)
  expect(returnedValue).toBe(true)
})

test('licensePlateToValidate LL0000', () => {
  const returnedValue = licensePlateToValidate('LL0000')
  expect(returnedValue).toBe(true)
})
test('licensePlateToValidate LL 0000', () => {
  const returnedValue = licensePlateToValidate('LL 0000')
  expect(returnedValue).toBe(true)
})

test('licensePlateToValidate LL 1234', () => {
  const returnedValue = licensePlateToValidate('LL 1234')
  expect(returnedValue).toBe(true)
})

test('licensePlateToValidate LL 0001', () => {
  const returnedValue = licensePlateToValidate('LL 0001')
  expect(returnedValue).toBe(true)
})

test('licensePlateToValidate LL0001', () => {
  const returnedValue = licensePlateToValidate('LL0001')
  expect(returnedValue).toBe(true)
})
test('licensePlateToValidate LL0L01', () => {
  const returnedValue = licensePlateToValidate('LL0L01')
  expect(returnedValue).toBe(false)
})
test('licensePlateToValidate LL 0L01', () => {
  const returnedValue = licensePlateToValidate('LL 0L01')
  expect(returnedValue).toBe(false)
})

test('licensePlateToValidate 123', () => {
  const returnedValue = licensePlateToValidate(123)
  expect(returnedValue).toBe(false)
})

test('licensePlateToValidate 12345', () => {
  const returnedValue = licensePlateToValidate(12345)
  expect(returnedValue).toBe(true)
})

test('licensePlateToValidate 02045', () => {
  const returnedValue = licensePlateToValidate('02045')
  expect(returnedValue).toBe(true)
})

test('licensePlateToValidate 0000', () => {
  const returnedValue = licensePlateToValidate('0000')
  expect(returnedValue).toBe(true)
})
test('licensePlateToValidate null', () => {
  const returnedValue = licensePlateToValidate(null)
  expect(returnedValue).toBe(false)
})
