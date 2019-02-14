import parseDouble from '../doubleDigitParser';
import parseSingle from '../singleDigitParser';
import { getFirstDigit, removeFirstDigit } from '../';

export function nameLast2digits(strNum) {
  const last2digits = removeFirstDigit(strNum);
  return parseDouble(last2digits);
}

// this function will be called after the first digit has been
// confirmed to be zero
export function handleLeadingZeros(strNum) {
  return nameLast2digits(strNum);
}

// this function will be called after confirming that the leading
// digit is non-zero
export function getHundredName(strNum) {
  const firstDigit = getFirstDigit(strNum);
  const hundredName = `${parseSingle(firstDigit)} hundred`;
  const last2digitsName = nameLast2digits(strNum);
  return `${hundredName}${
    last2digitsName !== '' ? ` and ${last2digitsName}` : ''
  }`;
}

export default function parseTriple(strNum) {
  const firstDigit = getFirstDigit(strNum);

  if (firstDigit === '0') {
    return handleLeadingZeros(strNum);
  }

  if (/[1-9]/.test(firstDigit)) {
    return getHundredName(strNum);
  }
}
