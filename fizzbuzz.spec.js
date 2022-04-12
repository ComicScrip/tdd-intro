const fizzbuzz = require('./fizzbuzz');

/*
Write a program that returns:
“fizz” in the case where the number passed as a parameter is a multiple of 3.
“buzz” in the case where the number passed in parameter is a multiple of 5.
“fizzbuzz” in the case where the past number is a multiple of both 3 and 5.
The number in the case where the latter is neither a multiple of 3 nor a multiple of 5.
*/

describe('the fizzbuzz function', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function');
  });
  it('should return “fizz” in the case where the number passed as a parameter is a multiple of 3.', () => {
    expect(fizzbuzz(3)).toBe('fizz');
    expect(fizzbuzz(6)).toBe('fizz');
    expect(fizzbuzz(9)).toBe('fizz');
  });

  it('should return “buzz” in the case where the number passed in parameter is a multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz');
    expect(fizzbuzz(10)).toBe('buzz');
    expect(fizzbuzz(25)).toBe('buzz');
  });

  it('should return “fizzbuzz” in the case where the number passed in parameter is a multiple of both 5 and 3', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
    expect(fizzbuzz(30)).toBe('fizzbuzz');
    expect(fizzbuzz(75)).toBe('fizzbuzz');
  });

  it('should return the number in the case where the latter is neither a multiple of 3 nor a multiple of 5', () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(4)).toBe(4);
    expect(fizzbuzz(74)).toBe(74);
  });
});
