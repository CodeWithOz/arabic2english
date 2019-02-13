import { handleLeadingZeros } from './';

describe('handleLeadingZeros', () => {
  test('is a function', () => {
    expect(typeof handleLeadingZeros).toEqual('function');
  });

  test('returns an empty string for 000', () => {
    expect(handleLeadingZeros('000')).toEqual('');
  });

  test('correctly names 00* with non-zero endings', () => {
    expect(handleLeadingZeros('002')).toEqual('two');
    expect(handleLeadingZeros('003')).toEqual('three');
    expect(handleLeadingZeros('004')).toEqual('four');
  });
});
