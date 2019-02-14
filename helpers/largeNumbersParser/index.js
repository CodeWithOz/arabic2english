import parseTriple from '../tripleDigitParser';

export function isHundredsEdgeCase() {}

export function getLast3chars(strNum) {
  return strNum.slice(-3);
}

export function removeLast3chars(strNum) {
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
    let baseName = parseTriple(last3chars);
    if (baseName !== '') {
      const setName = getSetName(setIndex);
      if (setName !== '') baseName += ` ${setName}`;
      name = name !== '' ? `${baseName} ${name}` : baseName;
    }
    strNum = removeLast3chars(strNum);
  } while (strNum.length > 0);

  return name;
}
