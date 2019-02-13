import parseSingle from '../singleDigitParser';

export function getFirstDigit(strNum) {
  return strNum[0];
}

export function getSecondDigit(strNum) {
  return strNum[1];
}

export function nameSecondDigit(strNum) {
  const secondDigit = getSecondDigit(strNum);
  if (secondDigit !== '0') {
    // zero is not named in non-single digit numbers
    return parseSingle(secondDigit);
  }

  return '';
}

const postTensMap = {
  '2': 'twenty',
  '3': 'thirty',
  '4': 'forty',
  '5': 'fifty',
  '6': 'sixty',
  '7': 'seventy',
  '8': 'eighty',
  '9': 'ninety'
};

export function getPostTenName(strNum) {
  const firstDigit = getFirstDigit(strNum);
  return postTensMap[firstDigit];
}

export function namePostTens(strNum) {
  const postTenName = getPostTenName(strNum);
  const secondDigit = nameSecondDigit(strNum);
  return secondDigit ? `${postTenName}-${secondDigit}` : postTenName;
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
export function nameTens(strNum) {
  return tensMap[strNum];
}

// this function will be called after the leading digit has
// been confirmed as zero
// NOTE: this function doesn't handle '00' alone
// it is only used when there is a leading non-zero digit (eg 300)
export function handleLeadingZeros(strNum) {
  return nameSecondDigit(strNum);
}

export default function parseDouble(strNum) {
  const firstDigit = getFirstDigit(strNum);
  if (firstDigit === '0') {
    return handleLeadingZeros(strNum);
  }

  if (firstDigit === '1') {
    return nameTens(strNum);
  }

  if (/[2-9]/.test(firstDigit)) {
    return namePostTens(strNum);
  }
}
