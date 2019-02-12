import parseDouble, {
  getFirstDigit,
  getSecondDigit,
  handleSecondDigit,
  handleTens,
  getPostTenName,
  handlePostTens
} from './';

describe('parseDouble', () => {
  test('is a function', () => {
    expect(typeof parseDouble).toEqual('function');
  });

  test('correctly names pre-teens', () => {
    expect(parseDouble('10')).toEqual('ten');
    expect(parseDouble('11')).toEqual('eleven');
    expect(parseDouble('12')).toEqual('twelve');
  });

  test('correctly names teens', () => {
    expect(parseDouble('17')).toEqual('seventeen');
  });

  test('correctly names post-tens', () => {
    expect(parseDouble('30')).toEqual('thirty');
    expect(parseDouble('83')).toEqual('eighty-three');
    expect(parseDouble('66')).toEqual('sixty-six');
  });
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

describe('handleSecondDigit', () => {
  test('is a function', () => {
    expect(typeof handleSecondDigit).toEqual('function');
  });

  test('returns an empty string for 00', () => {
    expect(handleSecondDigit('00')).toEqual('');
  });

  test('returns the correct name for 01-09', () => {
    expect(handleSecondDigit('01')).toEqual('one');
    expect(handleSecondDigit('02')).toEqual('two');
    expect(handleSecondDigit('03')).toEqual('three');
    expect(handleSecondDigit('04')).toEqual('four');
    expect(handleSecondDigit('05')).toEqual('five');
    expect(handleSecondDigit('06')).toEqual('six');
    expect(handleSecondDigit('07')).toEqual('seven');
    expect(handleSecondDigit('08')).toEqual('eight');
    expect(handleSecondDigit('09')).toEqual('nine');
  });
});

describe('handleTens', () => {
  test('is a function', () => {
    expect(typeof handleTens).toEqual('function');
  });

  test('correctly names 10-19', () => {
    expect(handleTens('10')).toEqual('ten');
    expect(handleTens('11')).toEqual('eleven');
    expect(handleTens('12')).toEqual('twelve');
    expect(handleTens('13')).toEqual('thirteen');
    expect(handleTens('14')).toEqual('fourteen');
    expect(handleTens('15')).toEqual('fifteen');
    expect(handleTens('16')).toEqual('sixteen');
    expect(handleTens('17')).toEqual('seventeen');
    expect(handleTens('18')).toEqual('eighteen');
    expect(handleTens('19')).toEqual('nineteen');
  });
});

describe('getPostTenName', () => {
  test('is a function', () => {
    expect(typeof getPostTenName).toEqual('function');
  });

  test('gets the correct name for 20-90', () => {
    expect(getPostTenName('20')).toEqual('twenty');
    expect(getPostTenName('30')).toEqual('thirty');
    expect(getPostTenName('40')).toEqual('forty');
    expect(getPostTenName('50')).toEqual('fifty');
    expect(getPostTenName('60')).toEqual('sixty');
    expect(getPostTenName('70')).toEqual('seventy');
    expect(getPostTenName('80')).toEqual('eighty');
    expect(getPostTenName('90')).toEqual('ninety');
  });
});

describe('handlePostTens', () => {
  test('is a function', () => {
    expect(typeof handlePostTens).toEqual('function');
  });

  test('correctly handles zero-endings', () => {
    expect(handlePostTens('40')).toEqual('forty');
  });

  test('correctly handles non-zero endings', () => {
    expect(handlePostTens('51')).toEqual('fifty-one');
    expect(handlePostTens('99')).toEqual('ninety-nine');
    expect(handlePostTens('23')).toEqual('twenty-three');
  });
});
