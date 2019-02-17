import validateCodePostal from './index';

test('validateCodePostal 4402', () => {
    const returnedValue = validateCodePostal(4402);
    expect(returnedValue).toBe(true);
});
test('validateCodePostal 9999', () => {
    const returnedValue = validateCodePostal(9999);
    expect(returnedValue).toBe(true);
});
test('validateCodePostal 0909', () => {
    const returnedValue = validateCodePostal("0909");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal 10000', () => {
    const returnedValue = validateCodePostal(10000);
    expect(returnedValue).toBe(false);
});
test('validateCodePostal 123', () => {
    const returnedValue = validateCodePostal(123);
    expect(returnedValue).toBe(false);
});

/*as string*/
test('validateCodePostal 4402 as string', () => {
    const returnedValue = validateCodePostal("4402");
    expect(returnedValue).toBe(true);
});
test('validateCodePostal  4402 as string with space', () => {
    const returnedValue = validateCodePostal(" 4402");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal 9999 as string', () => {
    const returnedValue = validateCodePostal("9999");
    expect(returnedValue).toBe(true);
});
test('validateCodePostal 10000 as string', () => {
    const returnedValue = validateCodePostal("10000");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal 123 as string', () => {
    const returnedValue = validateCodePostal("123");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal foo', () => {
    const returnedValue = validateCodePostal("foo");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal pork', () => {
    const returnedValue = validateCodePostal("pork");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal L4402', () => {
    const returnedValue = validateCodePostal("L4402");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal L-4402', () => {
    const returnedValue = validateCodePostal("L-4402");
    expect(returnedValue).toBe(true);
});
test('validateCodePostal L-0000', () => {
    const returnedValue = validateCodePostal("L-0000");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal L-9999', () => {
    const returnedValue = validateCodePostal("L-9999");
    expect(returnedValue).toBe(true);
});
test('validateCodePostal L-99999', () => {
    const returnedValue = validateCodePostal("L-99999");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal L-pork', () => {
    const returnedValue = validateCodePostal("L-pork");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal {}', () => {
    const returnedValue = validateCodePostal({});
    expect(returnedValue).toBe(false);
});
test('validateCodePostal LL-4444', () => {
    const returnedValue = validateCodePostal("LL-4444");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal L-', () => {
    const returnedValue = validateCodePostal("L-");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal ""', () => {
    const returnedValue = validateCodePostal("");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal " "', () => {
    const returnedValue = validateCodePostal(" ");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal " L-4444"', () => {
    const returnedValue = validateCodePostal(" L-4444");
    expect(returnedValue).toBe(false);
});
test('validateCodePostal "L-4444 "', () => {
    const returnedValue = validateCodePostal("L-4444 ");
    expect(returnedValue).toBe(false);
});
