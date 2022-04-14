const toArabic = require('./toArabic');

// see http://www.novaroma.org/via_romana/numbers.html

describe('toArabic', () => {
  it('should work with I', () => {
    expect(toArabic('I')).toBe(1);
    expect(toArabic('II')).toBe(2);
    expect(toArabic('III')).toBe(3);
  });

  it('should work with V', () => {
    expect(toArabic('V')).toBe(5);
    expect(toArabic('VI')).toBe(6);
    expect(toArabic('VII')).toBe(7);
    expect(toArabic('VIII')).toBe(8);
  });

  it('should work with X', () => {
    expect(toArabic('X')).toBe(10);
    expect(toArabic('XX')).toBe(20);
    expect(toArabic('XV')).toBe(15);
    expect(toArabic('XI')).toBe(11);
    expect(toArabic('XII')).toBe(12);
  });

  it('should work with L', () => {
    expect(toArabic('L')).toBe(50);
    expect(toArabic('LI')).toBe(51);
    expect(toArabic('LV')).toBe(55);
    expect(toArabic('LX')).toBe(60);
  });

  it('should work with C', () => {
    expect(toArabic('C')).toBe(100);
    expect(toArabic('CII')).toBe(102);
    expect(toArabic('CVI')).toBe(106);
    expect(toArabic('CL')).toBe(150);
    expect(toArabic('CLVIII')).toBe(158);
  });

  it('should work with D', () => {
    expect(toArabic('D')).toBe(500);
    expect(toArabic('DII')).toBe(502);
    expect(toArabic('DLVIII')).toBe(558);
  });

  it('should work with M', () => {
    expect(toArabic('M')).toBe(1000);
    expect(toArabic('MXII')).toBe(1012);
    expect(toArabic('MDXXIII')).toBe(1523);
  });

  it('should work with numebrs that require substraction', () => {
    expect(toArabic('IV')).toBe(4);
    expect(toArabic('IX')).toBe(9);
    expect(toArabic('XL')).toBe(40);
    expect(toArabic('XD')).toBe(490);
    expect(toArabic('LM')).toBe(950);
  });

  it('should return null if conversion is impossible', () => {
    expect(toArabic()).toBe(null);
    expect(toArabic([])).toBe(null);
    expect(toArabic({})).toBe(null);
    expect(toArabic('')).toBe(null);
    expect(toArabic(true)).toBe(null);
    expect(toArabic('toto')).toBe(null);
  });
});
