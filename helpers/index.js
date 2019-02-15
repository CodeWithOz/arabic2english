export function getFirstDigit(strNum) {
  return strNum[0];
}

export function removeFirstDigit(strNum) {
  return strNum.slice(1);
}

export function isZero(strNum) {
  return /^0+$/.test(strNum);
}

export function stripLeadingZeros(strNum) {
  return strNum.replace(/^0+/, '');
}
