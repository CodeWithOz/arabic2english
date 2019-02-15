import { getFirstDigit, removeFirstDigit, isZero, stripLeadingZeros } from './';

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

  test('returns true if number contains only zero(s)', () => {
    expect(isZero('000000000000')).toBe(true);
    expect(isZero('0')).toBe(true);
  });
});

describe('stripLeadingZeros', () => {
  test('is a function', () => {
    expect(typeof stripLeadingZeros).toEqual('function');
  });

  test('removes all leading zeros from a string', () => {
    expect(stripLeadingZeros('0120')).toEqual('120');
    expect(stripLeadingZeros('00000000584')).toEqual('584');
  });

  test('returns the same string if there are no leading zeros', () => {
    expect(stripLeadingZeros('345')).toEqual('345');
    expect(stripLeadingZeros('8590')).toEqual('8590');
    expect(stripLeadingZeros('205000')).toEqual('205000');
  });
});
