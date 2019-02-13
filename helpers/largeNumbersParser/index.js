export function getLast3chars(strNum) {
  return strNum.slice(-3);
}

export function removeLast3chars(strNum) {
  if (strNum.length < 4) {
    return strNum;
  }
}

const setsMap = {
  1: '',
  2: 'thousand',
  3: 'million',
  4: 'billion',
  5: 'trillion',
  6: 'quadrillion'
};
export function getSetName(setIndex) {
  return setsMap[setIndex];
}
