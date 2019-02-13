import { getLast3chars, getSetName } from './';

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

describe('getSetName', () => {
  test('is a function', () => {
    expect(typeof getSetName).toEqual('function');
  });
});
