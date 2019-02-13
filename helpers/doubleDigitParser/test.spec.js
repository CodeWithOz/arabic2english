import parseDouble, {
  getSecondDigit,
  nameSecondDigit,
  nameTens,
  getPostTenName,
  namePostTens,
  handleLeadingZeros
} from './';

describe('parseDouble', () => {
  test('is a function', () => {
    expect(typeof parseDouble).toEqual('function');
  });

  test('does not name 00', () => {
    expect(parseDouble('00')).toEqual('');
  });

  test('correctly names 01-09', () => {
    expect(parseDouble('01')).toEqual('one');
    expect(parseDouble('05')).toEqual('five');
    expect(parseDouble('07')).toEqual('seven');
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

describe('nameSecondDigit', () => {
  test('is a function', () => {
    expect(typeof nameSecondDigit).toEqual('function');
  });

  test('returns an empty string for 00', () => {
    expect(nameSecondDigit('00')).toEqual('');
  });

  test('returns the correct name for 01-09', () => {
    expect(nameSecondDigit('01')).toEqual('one');
    expect(nameSecondDigit('02')).toEqual('two');
    expect(nameSecondDigit('03')).toEqual('three');
    expect(nameSecondDigit('04')).toEqual('four');
    expect(nameSecondDigit('05')).toEqual('five');
    expect(nameSecondDigit('06')).toEqual('six');
    expect(nameSecondDigit('07')).toEqual('seven');
    expect(nameSecondDigit('08')).toEqual('eight');
    expect(nameSecondDigit('09')).toEqual('nine');
  });
});

describe('nameTens', () => {
  test('is a function', () => {
    expect(typeof nameTens).toEqual('function');
  });

  test('correctly names 10-19', () => {
    expect(nameTens('10')).toEqual('ten');
    expect(nameTens('11')).toEqual('eleven');
    expect(nameTens('12')).toEqual('twelve');
    expect(nameTens('13')).toEqual('thirteen');
    expect(nameTens('14')).toEqual('fourteen');
    expect(nameTens('15')).toEqual('fifteen');
    expect(nameTens('16')).toEqual('sixteen');
    expect(nameTens('17')).toEqual('seventeen');
    expect(nameTens('18')).toEqual('eighteen');
    expect(nameTens('19')).toEqual('nineteen');
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

describe('namePostTens', () => {
  test('is a function', () => {
    expect(typeof namePostTens).toEqual('function');
  });

  test('correctly handles zero-endings', () => {
    expect(namePostTens('40')).toEqual('forty');
  });

  test('correctly handles non-zero endings', () => {
    expect(namePostTens('51')).toEqual('fifty-one');
    expect(namePostTens('99')).toEqual('ninety-nine');
    expect(namePostTens('23')).toEqual('twenty-three');
  });
});

describe('handleLeadingZeros', () => {
  test('is a function', () => {
    expect(typeof handleLeadingZeros).toEqual('function');
  });

  test(`doesn't name 00`, () => {
    expect(handleLeadingZeros('00')).toEqual('');
  });

  test('correctly names 01-09', () => {
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
