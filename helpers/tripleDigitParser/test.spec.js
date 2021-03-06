import parseTriple, {
  handleLeadingZeros,
  getHundredName,
  nameLast2digits
} from './';

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
    expect(getHundredName('802')).toEqual('eight hundred and two');
    expect(getHundredName('908')).toEqual('nine hundred and eight');
  });
});

describe('nameLast2digits', () => {
  test('is a function', () => {
    expect(typeof nameLast2digits).toEqual('function');
  });

  test('correctly names the last 2 digits', () => {
    expect(nameLast2digits('203')).toEqual('three');
    expect(nameLast2digits('485')).toEqual('eighty-five');
    expect(nameLast2digits('111')).toEqual('eleven');
  });
});

describe('parseTriple', () => {
  test('is a function', () => {
    expect(typeof parseTriple).toEqual('function');
  });

  test(`doesn't name 000`, () => {
    expect(parseTriple('000')).toEqual('');
  });

  test('correctly names 01*-09*', () => {
    expect(parseTriple('010')).toEqual('ten');
    expect(parseTriple('012')).toEqual('twelve');
    expect(parseTriple('036')).toEqual('thirty-six');
  });

  test('correctly names 1**-9**', () => {
    expect(parseTriple('204')).toEqual('two hundred and four');
    expect(parseTriple('815')).toEqual('eight hundred and fifteen');
    expect(parseTriple('777')).toEqual('seven hundred and seventy-seven');
  });
});
