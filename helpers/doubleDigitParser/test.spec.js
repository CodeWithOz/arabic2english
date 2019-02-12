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
});

describe('handleLeadingZeros', () => {
  test('is a function', () => {
    expect(typeof handleLeadingZeros).toEqual('function');
  });

  // test('returs an empty string for 00', () => {
  //   expect(handleLeadingZeros('00')).toEqual('');
  // });
});
