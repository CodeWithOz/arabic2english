import parseSingle from '../singleDigitParser';

export function getFirstDigit(strNum) {
  return strNum[0];
}

export function getSecondDigit(strNum) {
  return strNum[1];
}

export function handleSecondDigit(strNum) {
  const secondDigit = getSecondDigit(strNum);
  if (secondDigit !== '0') {
    // zero is not named in non-single digit numbers
    return parseSingle(secondDigit);
  }

  return '';
}

export function getPostTenName() {}

export function handlePostTens() {}

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
