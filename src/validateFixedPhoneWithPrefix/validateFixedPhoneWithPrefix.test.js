import validateFixedPhoneWithPrefix from './index';

test('validateFixedPhoneWithPrefix 00352450288', () => {
    const returnedValue = validateFixedPhoneWithPrefix("00352450288");
    expect(returnedValue).toBe(true);
});

test('validateFixedPhoneWithPrefix 00352 45 02 88', () => {
    const returnedValue = validateFixedPhoneWithPrefix("00352 45 02 88");
    expect(returnedValue).toBe(true);
});
test('validateFixedPhoneWithPrefix 00352', () => {
    const returnedValue = validateFixedPhoneWithPrefix("00352");
    expect(returnedValue).toBe(false);
});

test('validateFixedPhoneWithPrefix 45028800352', () => {
    const returnedValue = validateFixedPhoneWithPrefix("45028800352");
    expect(returnedValue).toBe(false);
});

test('validateFixedPhoneWithPrefix +35244 12 34 22', () => {
    const returnedValue = validateFixedPhoneWithPrefix("+35244 12 34 22");
    expect(returnedValue).toBe(true);
});


test('validateFixedPhoneWithPrefix +352 45 02 88', () => {
    const returnedValue = validateFixedPhoneWithPrefix("+352 45 02 88");
    expect(returnedValue).toBe(true);
});

test('validateFixedPhoneWithPrefix +352450288', () => {
    const returnedValue = validateFixedPhoneWithPrefix("+352450288");
    expect(returnedValue).toBe(true);
});

test('validateFixedPhoneWithPrefix 45028811', () => {
    const returnedValue = validateFixedPhoneWithPrefix(454028811);
    expect(returnedValue).toBe(false);
});

test('validateFixedPhoneWithPrefix null', () => {
    const returnedValue = validateFixedPhoneWithPrefix(null);
    expect(returnedValue).toBe(false);
});
