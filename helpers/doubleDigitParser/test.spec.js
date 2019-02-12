import parseDouble, {
  getFirstDigit,
  getSecondDigit,
  handleLeadingZeros
} from './';

test('parseDouble is a function', () => {
  expect(typeof parseDouble).toEqual('function');
});

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

describe('getSecondDigit', () => {
  test('is a function', () => {
    expect(typeof getSecondDigit).toEqual('function');
  });

  test('returns the correct second digit', () => {
    expect(getSecondDigit('10')).toEqual('0');
    expect(getSecondDigit('23')).toEqual('3');
    expect(getSecondDigit('57')).toEqual('7');
    expect(getSecondDigit('94')).toEqual('4');
  });
});

describe('handleLeadingZeros', () => {
  test('is a function', () => {
    expect(typeof handleLeadingZeros).toEqual('function');
  });

  test('returs an empty string for 00', () => {
    expect(handleLeadingZeros('00')).toEqual('');
  });

  test('returs the correct name for 01-09', () => {
    expect(handleLeadingZeros('01')).toEqual('one');
    expect(handleLeadingZeros('02')).toEqual('two');
    expect(handleLeadingZeros('03')).toEqual('three');
    expect(handleLeadingZeros('04')).toEqual('four');
    expect(handleLeadingZeros('05')).toEqual('five');
    expect(handleLeadingZeros('06')).toEqual('six');
    expect(handleLeadingZeros('07')).toEqual('seven');
    expect(handleLeadingZeros('08')).toEqual('eight');
    expect(handleLeadingZeros('09')).toEqual('nine');
  });
});
