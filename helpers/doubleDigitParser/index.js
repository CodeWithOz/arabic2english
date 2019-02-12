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

const tensMap = {
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen'
};

// this function will be called after the leading digit has
// been confirmed as one
export function handleTens(strNum) {
  return tensMap[strNum];
}

export default function parseDouble() {}
