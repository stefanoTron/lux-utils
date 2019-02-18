import validatePhoneWithPrefix from './index';

test('validatePhoneWithPrefix 00352621667766', () => {
    const returnedValue = validatePhoneWithPrefix("00352621667766");
    expect(returnedValue).toBe(true);
});

test('validatePhoneWithPrefix 00352 621667766', () => {
    const returnedValue = validatePhoneWithPrefix("00352 621667766");
    expect(returnedValue).toBe(true);
});
test('validatePhoneWithPrefix 00352', () => {
    const returnedValue = validatePhoneWithPrefix("00352");
    expect(returnedValue).toBe(false);
});

test('validatePhoneWithPrefix 62166776600352', () => {
    const returnedValue = validatePhoneWithPrefix("62166776600352");
    expect(returnedValue).toBe(false);
});

test('validatePhoneWithPrefix +352 621 77 88 88', () => {
    const returnedValue = validatePhoneWithPrefix("+352 621 77 88 88");
    expect(returnedValue).toBe(true);
});


test('validatePhoneWithPrefix 00352 6214502 88', () => {
    const returnedValue = validatePhoneWithPrefix("00352 6214502 88");
    expect(returnedValue).toBe(true);
});


test('validatePhoneWithPrefix 621777788', () => {
    const returnedValue = validatePhoneWithPrefix("621777788");
    expect(returnedValue).toBe(false);
});

test('validatePhoneWithPrefix null', () => {
    const returnedValue = validatePhoneWithPrefix(null);
    expect(returnedValue).toBe(false);
});

test('validatePhoneWithPrefix 00352450288', () => {
    const returnedValue = validatePhoneWithPrefix("00352450288");
    expect(returnedValue).toBe(true);
});

test('validatePhoneWithPrefix 00352 45 02 88', () => {
    const returnedValue = validatePhoneWithPrefix("00352 45 02 88");
    expect(returnedValue).toBe(true);
});
test('validatePhoneWithPrefix 00352', () => {
    const returnedValue = validatePhoneWithPrefix("00352");
    expect(returnedValue).toBe(false);
});

test('validatePhoneWithPrefix 45028800352', () => {
    const returnedValue = validatePhoneWithPrefix("45028800352");
    expect(returnedValue).toBe(false);
});

test('validatePhoneWithPrefix +35244 12 34 22', () => {
    const returnedValue = validatePhoneWithPrefix("+35244 12 34 22");
    expect(returnedValue).toBe(true);
});


test('validatePhoneWithPrefix +352 45 02 88', () => {
    const returnedValue = validatePhoneWithPrefix("+352 45 02 88");
    expect(returnedValue).toBe(true);
});

test('validatePhoneWithPrefix +352450288', () => {
    const returnedValue = validatePhoneWithPrefix("+352450288");
    expect(returnedValue).toBe(true);
});

test('validatePhoneWithPrefix 45028811', () => {
    const returnedValue = validatePhoneWithPrefix(454028811);
    expect(returnedValue).toBe(false);
});

test('validatePhoneWithPrefix null', () => {
    const returnedValue = validatePhoneWithPrefix(null);
    expect(returnedValue).toBe(false);
});
