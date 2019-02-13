import { getLast3chars } from './';

describe('getLast3chars', () => {
  test('is a function', () => {
    expect(typeof getLast3chars).toEqual('function');
  });

  test('gets all chars when length is 3 or less', () => {
    expect(getLast3chars('010')).toEqual('010');
    expect(getLast3chars('23')).toEqual('23');
    expect(getLast3chars('5')).toEqual('5');
  });
});
