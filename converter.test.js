import converter from './converter';

describe('converter', () => {
  test('is a function', () => {
    expect(typeof converter).toEqual('function');
  });

  test('correctly names 0', () => {
    expect(converter('0')).toEqual('zero');
    expect(converter('00000000')).toEqual('zero');
  });

  test('correctly names negative numbers', () => {
    expect(converter('-2')).toEqual('minus two');
    expect(converter('-10')).toEqual('minus ten');
    expect(converter('-305')).toEqual('minus three hundred and five');
    expect(converter('-985478')).toEqual(
      'minus nine hundred and eighty-five thousand four hundred and seventy-eight'
    );
    expect(converter('-63204019')).toEqual(
      'minus sixty-three million two hundred and four thousand and nineteen'
    );
    expect(converter('-1023024870')).toEqual(
      'minus one billion twenty-three million twenty-four thousand eight hundred and seventy'
    );
    expect(converter('-500000365201254')).toEqual(
      'minus five hundred trillion three hundred and sixty-five million two hundred and one thousand two hundred and fifty-four'
    );
    expect(converter('-66000320487965001')).toEqual(
      'minus sixty-six quadrillion three hundred and twenty billion four hundred and eighty-seven million nine hundred and sixty-five thousand and one'
    );
  });

  test('correctly names positive numbers', () => {
    expect(converter('2')).toEqual('two');
    expect(converter('10')).toEqual('ten');
    expect(converter('305')).toEqual('three hundred and five');
    expect(converter('985478')).toEqual(
      'nine hundred and eighty-five thousand four hundred and seventy-eight'
    );
    expect(converter('63204019')).toEqual(
      'sixty-three million two hundred and four thousand and nineteen'
    );
    expect(converter('1023024870')).toEqual(
      'one billion twenty-three million twenty-four thousand eight hundred and seventy'
    );
    expect(converter('500000365201254')).toEqual(
      'five hundred trillion three hundred and sixty-five million two hundred and one thousand two hundred and fifty-four'
    );
    expect(converter('66000320487965001')).toEqual(
      'sixty-six quadrillion three hundred and twenty billion four hundred and eighty-seven million nine hundred and sixty-five thousand and one'
    );
  });
});
