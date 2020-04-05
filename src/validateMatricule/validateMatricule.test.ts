import validateMatricule from './index'

test('validateMatricule 1893120105732', () => {
  const returnedValue = validateMatricule(1893120105732)
  expect(returnedValue).toBe(true)
})

test('validateMatricule 1893120105733', () => {
  const returnedValue = validateMatricule(1893120105733)
  expect(returnedValue).toBe(false)
})

test('validateMatricule 123', () => {
  const returnedValue = validateMatricule(123)
  expect(returnedValue).toBe(false)
})
test('validateMatricule "1893120105732"', () => {
  const returnedValue = validateMatricule('1893120105732')
  expect(returnedValue).toBe(false)
})

test('validateMatricule notanInt', () => {
  const returnedValue = validateMatricule('notanInt')
  expect(returnedValue).toBe(false)
})
test('validateMatricule null', () => {
  const returnedValue = validateMatricule(null)
  expect(returnedValue).toBe(false)
})
test('validateMatricule 1893120105702', () => {
  const returnedValue = validateMatricule(1893120105702)
  expect(returnedValue).toBe(false)
})
