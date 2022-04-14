function toArabic(romanNumber) {
  if (typeof romanNumber !== 'string' || romanNumber.length === 0) return null;

  let res = 0;

  const romanToArabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < romanNumber.length; i += 1) {
    const currentRomanDigit = romanNumber[i];
    const nextRomanDigit = romanNumber[i + 1];
    const currentValue = romanToArabic[currentRomanDigit];
    const nextValue = romanToArabic[nextRomanDigit];

    if (nextValue > currentValue) {
      res += nextValue - currentValue;
      i += 1;
    } else {
      res += currentValue;
    }
  }
  return isNaN(res) ? null : res;
}

module.exports = toArabic;
