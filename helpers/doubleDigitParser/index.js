import parseSingle from '../singleDigitParser';

export function getFirstDigit(strNum) {
  return strNum[0];
}

export function getSecondDigit(strNum) {
  return strNum[1];
}

// this function will be called after the leading digit has
// been confirmed as zero
export function handleLeadingZeros(strNum) {
  const secondDigit = getSecondDigit(strNum);
  if (secondDigit !== '0') {
    return parseSingle(secondDigit);
  }

  // 00 alone has no name
  return '';
}

export default function parseDouble() {}
