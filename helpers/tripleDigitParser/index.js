import parseDouble from '../doubleDigitParser';

// this function will be called after the first digit has been
// confirmed to be zero
export function handleLeadingZeros(strNum) {
  return parseDouble(strNum);
}
