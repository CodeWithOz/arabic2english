import { getFirstDigit, removeFirstDigit, isZero } from './';

describe('getFirstDigit', () => {
  test('is a function', () => {
    expect(typeof getFirstDigit).toEqual('function');
  });

  test('returns the correct first digit', () => {
    expect(getFirstDigit('10')).toEqual('1');
    expect(getFirstDigit('23')).toEqual('2');
    expect(getFirstDigit('57')).toEqual('5');
    expect(getFirstDigit('94')).toEqual('9');
  });
});

describe('removeFirstDigit', () => {
  test('is a function', () => {
    expect(typeof removeFirstDigit).toEqual('function');
  });

  test('returns the last 2 chars in a 3-char string', () => {
    expect(removeFirstDigit('101')).toEqual('01');
  });
});

describe('isZero', () => {
  test('is a function', () => {
    expect(typeof isZero).toEqual('function');
  });

  test('returns false if number contains a non-zero digit', () => {
    expect(isZero('0000000000001')).toBe(false);
    expect(isZero('2215')).toBe(false);
    expect(isZero('8048603')).toBe(false);
  });
});
