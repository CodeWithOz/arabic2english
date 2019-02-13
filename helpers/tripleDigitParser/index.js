import parseDouble, { getFirstDigit } from '../doubleDigitParser';
import parseSingle from '../singleDigitParser';

export function removeFirstDigit(strNum) {
  return strNum.slice(1);
}

// this function will be called after the first digit has been
// confirmed to be zero
export function handleLeadingZeros(strNum) {
  const last2digits = removeFirstDigit(strNum);
  return parseDouble(last2digits);
}

// this function will be called after confirming that the leading
// digit is non-zero
export function getHundredName(strNum) {
  const firstDigit = getFirstDigit(strNum);
  return `${parseSingle(firstDigit)} hundred`;
}
