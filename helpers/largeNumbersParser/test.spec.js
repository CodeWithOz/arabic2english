import parseLarge, {
  getLast3chars,
  getSetName,
  removeLast3chars,
  isHundredsEdgeCase
} from './';

describe('getLast3chars', () => {
  test('is a function', () => {
    expect(typeof getLast3chars).toEqual('function');
  });

  test('gets all chars when length is 3 or less', () => {
    expect(getLast3chars('010')).toEqual('010');
    expect(getLast3chars('23')).toEqual('23');
    expect(getLast3chars('5')).toEqual('5');
  });

  test('gets last 3 chars when length is greater than 3', () => {
    expect(getLast3chars('9843')).toEqual('843');
    expect(getLast3chars('23098')).toEqual('098');
  });
});

describe('removeLast3chars', () => {
  test('is a function', () => {
    expect(typeof removeLast3chars).toEqual('function');
  });

  test('returns an empty string when length is less than 4', () => {
    expect(removeLast3chars('323')).toEqual('');
    expect(removeLast3chars('8')).toEqual('');
  });

  test('removes the last 3 chars when length is > 3', () => {
    expect(removeLast3chars('1234')).toMatch(/^1$/);
    expect(removeLast3chars('23435')).toMatch(/^23$/);
    expect(removeLast3chars('84375483')).toMatch(/^84375$/);
  });
});

describe('getSetName', () => {
  test('is a function', () => {
    expect(typeof getSetName).toEqual('function');
  });

  test('returns empty string for set with index of 1', () => {
    expect(getSetName(1)).toEqual('');
  });

  test('returns correct names of sets 2-6', () => {
    expect(getSetName(2)).toEqual('thousand');
    expect(getSetName(3)).toEqual('million');
    expect(getSetName(4)).toEqual('billion');
    expect(getSetName(5)).toEqual('trillion');
    expect(getSetName(6)).toEqual('quadrillion');
  });
});

describe('parseLarge', () => {
  test('is a function', () => {
    expect(typeof parseLarge).toEqual('function');
  });

  test('correctly names < 4-digit numbers', () => {
    expect(parseLarge('01')).toEqual('one');
    expect(parseLarge('444')).toEqual('four hundred and forty-four');
    expect(parseLarge('81')).toEqual('eighty-one');
  });

  describe('correctly names > 3-digit numbers', () => {
    test('that contain no zeros', () => {
      expect(parseLarge('1234')).toEqual(
        'one thousand two hundred and thirty-four'
      );
      expect(parseLarge('98765')).toEqual(
        'ninety-eight thousand seven hundred and sixty-five'
      );
    });

    test('that only have a leading zero', () => {
      expect(parseLarge('0434879')).toEqual(
        'four hundred and thirty-four thousand eight hundred and seventy-nine'
      );

      expect(parseLarge('09434879')).toEqual(
        'nine million four hundred and thirty-four thousand eight hundred and seventy-nine'
      );
    });

    test('where the hundreds digit is zero', () => {
      expect(parseLarge('801990014')).toEqual(
        'eight hundred and one million nine hundred and ninety thousand and fourteen'
      );
      expect(parseLarge('60000000001')).toEqual('sixty billion and one');
      expect(parseLarge('700012000000055')).toEqual(
        'seven hundred trillion twelve billion and fifty-five'
      );
    });

    test('other large numbers', () => {
      expect(parseLarge('2000000')).toEqual('two million');
    });
  });
});

describe('isHundredsEdgeCase', () => {
  test('is a function', () => {
    expect(typeof isHundredsEdgeCase).toEqual('function');
  });
});
