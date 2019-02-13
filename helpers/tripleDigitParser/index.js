import parseDouble from '../doubleDigitParser';

export function removeFirstDigit() {}

// this function will be called after the first digit has been
// confirmed to be zero
export function handleLeadingZeros(strNum) {
  const last2digits = strNum.slice(1);
  return parseDouble(last2digits);
}
