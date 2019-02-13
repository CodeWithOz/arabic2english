import { handleLeadingZeros } from './';

describe('handleLeadingZeros', () => {
  test('is a function', () => {
    expect(typeof handleLeadingZeros).toEqual('function');
  });

  test('returns an empty string for 000', () => {
    expect(handleLeadingZeros('000')).toEqual('');
  });
});
