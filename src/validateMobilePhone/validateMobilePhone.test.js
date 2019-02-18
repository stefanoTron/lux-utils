import validateMobilePhone from './index';

test('validateMobilePhone 621778877', () => {
    const returnedValue = validateMobilePhone(621778877);
    expect(returnedValue).toBe(true);
});

test('validateMobilePhone 621 77 88 77', () => {
    const returnedValue = validateMobilePhone("621 77 88 77");
    expect(returnedValue).toBe(true);
});

test('validateMobilePhone 621-77-88-77', () => {
    const returnedValue = validateMobilePhone("621-77-88-77");
    expect(returnedValue).toBe(true);
});

test('validateMobilePhone 621 778 877', () => {
    const returnedValue = validateMobilePhone("621 778 877");
    expect(returnedValue).toBe(true);
});

test('validateMobilePhone 621778877', () => {
    const returnedValue = validateMobilePhone("621778877");
    expect(returnedValue).toBe(true);
});



test('validateMobilePhone 4422', () => {
    const returnedValue = validateMobilePhone(4422);
    expect(returnedValue).toBe(false);
});
test('validateMobilePhone "62177887"', () => {
    const returnedValue = validateMobilePhone('62177887');
    expect(returnedValue).toBe(false);
});
test('validateMobilePhone "82177887"', () => {
    const returnedValue = validateMobilePhone('82177887');
    expect(returnedValue).toBe(false);
});

test('validateMobilePhone 52177887', () => {
    const returnedValue = validateMobilePhone(52177887);
    expect(returnedValue).toBe(false);
});
test('validateMobilePhone "450"', () => {
    const returnedValue = validateMobilePhone("450");
    expect(returnedValue).toBe(false);
});
test('validateMobilePhone "dsksd"', () => {
    const returnedValue = validateMobilePhone("dsksd");
    expect(returnedValue).toBe(false);
});
test('validateMobilePhone "azertyuio"', () => {
    const returnedValue = validateMobilePhone("azertyuio");
    expect(returnedValue).toBe(false);
});
test('validateMobilePhone null', () => {
    const returnedValue = validateMobilePhone(null);
    expect(returnedValue).toBe(false);
});
