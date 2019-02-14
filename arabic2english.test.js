import converter from './arabic2english';

describe('converter', () => {
  test('is a function', () => {
    expect(typeof converter).toEqual('function');
  });

  test('correctly names 0', () => {
    expect(converter('0')).toEqual('zero');
    expect(converter('00000000')).toEqual('zero');
  });
});
