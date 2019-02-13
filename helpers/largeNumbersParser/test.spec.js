import { getLast3chars, getSetName, removeLast3chars } from './';

describe('getLast3chars', () => {
  test('is a function', () => {
    expect(typeof getLast3chars).toEqual('function');
  });

  test('gets all chars when length is 3 or less', () => {
    expect(getLast3chars('010')).toEqual('010');
    expect(getLast3chars('23')).toEqual('23');
    expect(getLast3chars('5')).toEqual('5');
  });

  test('gets last 3 chars when length is greater than 3', () => {
    expect(getLast3chars('9843')).toEqual('843');
    expect(getLast3chars('23098')).toEqual('098');
  });
});

describe('removeLast3chars', () => {
  test('is a function', () => {
    expect(typeof removeLast3chars).toEqual('function');
  });

  test('returns the same string when length is less than 4', () => {
    expect(removeLast3chars('323')).toEqual('323');
    expect(removeLast3chars('8')).toEqual('8');
  });

  test('removes the last 3 chars when length is > 3', () => {
    expect(removeLast3chars('1234')).toMatch(/^1$/);
    expect(removeLast3chars('23435')).toMatch(/^23$/);
    expect(removeLast3chars('84375483')).toMatch(/^84375$/);
  });
});

describe('getSetName', () => {
  test('is a function', () => {
    expect(typeof getSetName).toEqual('function');
  });

  test('returns empty string for set with index of 1', () => {
    expect(getSetName(1)).toEqual('');
  });

  test('returns correct names of sets 2-6', () => {
    expect(getSetName(2)).toEqual('thousand');
    expect(getSetName(3)).toEqual('million');
    expect(getSetName(4)).toEqual('billion');
    expect(getSetName(5)).toEqual('trillion');
    expect(getSetName(6)).toEqual('quadrillion');
  });
});
