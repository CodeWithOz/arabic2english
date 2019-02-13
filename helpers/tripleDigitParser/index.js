import parseDouble, { getFirstDigit } from '../doubleDigitParser';
import parseSingle from '../singleDigitParser';

export function removeFirstDigit(strNum) {
  return strNum.slice(1);
}

// this function will be called after the first digit has been
// confirmed to be zero
export function handleLeadingZeros(strNum) {
  // refactor these two steps into a separate function
  const last2digits = removeFirstDigit(strNum);
  return parseDouble(last2digits);
}

// this function will be called after confirming that the leading
// digit is non-zero
export function getHundredName(strNum) {
  const firstDigit = getFirstDigit(strNum);
  const last2digits = removeFirstDigit(strNum);
  const last2digitsName = parseDouble(last2digits);
  const hundredName = `${parseSingle(firstDigit)} hundred`;
  return `${hundredName}${
    last2digitsName !== '' ? ` and ${last2digitsName}` : ''
  }`;
}
