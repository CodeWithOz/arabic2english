import parseTriple from '../tripleDigitParser';

export function getLast3chars(strNum) {
  return strNum.slice(-3);
}

export function removeLast3chars(strNum) {
  if (strNum.length < 4) {
    return strNum;
  }

  return strNum.slice(0, -3);
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

export default function parseLarge(strNum) {
  let setIndex = 0,
    name = '';

  do {
    const last3chars = getLast3chars(strNum).padStart(3, '0');
    setIndex++;
    name = parseTriple(last3chars);
    if (name !== '') {
      const setName = getSetName(setIndex);
      if (setName !== '') name += ` ${setName}`;
    }
    strNum = removeLast3chars(strNum);
  } while (strNum.length > 3);

  return name;
}
