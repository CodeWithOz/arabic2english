import parseDouble from '../doubleDigitParser';

export function removeFirstDigit(strNum) {
  return strNum.slice(1);
}

// this function will be called after the first digit has been
// confirmed to be zero
export function handleLeadingZeros(strNum) {
  const last2digits = removeFirstDigit(strNum);
  return parseDouble(last2digits);
}

export function getHundredName() {}
