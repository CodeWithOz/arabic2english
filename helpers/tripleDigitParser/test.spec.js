import { handleLeadingZeros, removeFirstDigit, getHundredName } from './';

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

  test('correctly names 0** with non-zero mid number', () => {
    expect(handleLeadingZeros('016')).toEqual('sixteen');
    expect(handleLeadingZeros('040')).toEqual('forty');
    expect(handleLeadingZeros('075')).toEqual('seventy-five');
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

describe('getHundredName', () => {
  test('is a function', () => {
    expect(typeof getHundredName).toEqual('function');
  });

  test('correctly names 100-900', () => {
    expect(getHundredName('100')).toEqual('one hundred');
    expect(getHundredName('200')).toEqual('two hundred');
    expect(getHundredName('300')).toEqual('three hundred');
    expect(getHundredName('400')).toEqual('four hundred');
    expect(getHundredName('500')).toEqual('five hundred');
    expect(getHundredName('600')).toEqual('six hundred');
    expect(getHundredName('700')).toEqual('seven hundred');
    expect(getHundredName('800')).toEqual('eight hundred');
    expect(getHundredName('900')).toEqual('nine hundred');
  });

  test('correctly names 10*-90*', () => {
    expect(getHundredName('305')).toEqual('three hundred and five');
    expect(getHundredName('802')).toEqual('eigth hundred and two');
    expect(getHundredName('908')).toEqual('nine hundred and eight');
  });
});
