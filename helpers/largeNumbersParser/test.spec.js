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

  // this function accepts 3 arguments
  // when one argument is being tested, the others supplied
  // would normally pass their own tests
  test('returns false if first argument is not 1', () => {
    expect(isHundredsEdgeCase(2, '010', '1')).toBe(false);
    expect(isHundredsEdgeCase(4, '056', '4051')).toBe(false);
  });

  test('returns false if hundreds digit is non-zero', () => {
    expect(isHundredsEdgeCase(1, '500', '0')).toBe(false);
    expect(isHundredsEdgeCase(1, '700', '10')).toBe(false);
  });

  test('returns false if only zeros follow hundreds digit', () => {
    expect(isHundredsEdgeCase(1, '000', '3')).toBe(false);
    expect(isHundredsEdgeCase(1, '000', '02')).toBe(false);
  });

  test('returns false if only zeros precede hundreds digit', () => {
    expect(isHundredsEdgeCase(1, '080', '0')).toBe(false);
    expect(isHundredsEdgeCase(1, '006', '0000')).toBe(false);
  });

  test('returns false if nothing precedes hundreds digit', () => {
    expect(isHundredsEdgeCase(1, '090', '')).toBe(false);
    expect(isHundredsEdgeCase(1, '004', '')).toBe(false);
  });

  test('returns true if non-zero digits lead and trail zero hundreds digit', () => {
    expect(isHundredsEdgeCase(1, '098', '1432')).toBe(true);
    expect(isHundredsEdgeCase(1, '005', '2000000')).toBe(true);
    expect(isHundredsEdgeCase(1, '020', '4')).toBe(true);
  });
});
