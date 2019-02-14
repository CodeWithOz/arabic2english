import parseTriple from '../tripleDigitParser';
import { getFirstDigit, removeFirstDigit } from '../';

export function getLast3chars(strNum) {
  return strNum.slice(-3);
}

export function removeLast3chars(strNum) {
  return strNum.slice(0, -3);
}

const setsMap = {
  1: '',
  2: 'thousand',
  3: 'million',
  4: 'billion',
  5: 'trillion',
  6: 'quadrillion'
};
export function getSetName(setIndex) {
  return setsMap[setIndex];
}

export function isHundredsEdgeCase(setIndex, last3chars, remainder) {
  if (setIndex !== 1) {
    return false;
  }

  if (getFirstDigit(last3chars) !== '0') {
    return false;
  }

  if (!/[1-9]/.test(removeFirstDigit(last3chars))) {
    // no non-zero chars after hundreds digit
    return false;
  }

  if (!/[1-9]/.test(remainder)) {
    // no non-zero chars before hundreds digit
    return false;
  }

  return true;
}

export default function parseLarge(strNum) {
  let setIndex = 0,
    name = '';

  do {
    const last3chars = getLast3chars(strNum).padStart(3, '0');
    strNum = removeLast3chars(strNum);
    setIndex++;
    let baseName = parseTriple(last3chars);
    if (baseName !== '') {
      const setName = getSetName(setIndex);
      if (setName !== '') baseName += ` ${setName}`;
      name = name !== '' ? `${baseName} ${name}` : baseName;

      // edge case: the hundreds digit is zero and there are non-zero
      // digits before and after it
      // an 'and' must precede the name of the tens and units digits
      if (isHundredsEdgeCase(setIndex, last3chars, strNum)) {
        name = `and ${name}`;
      }
    }
  } while (strNum.length > 0);

  return name;
}
