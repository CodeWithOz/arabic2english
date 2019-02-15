import {
  isZero,
  getFirstDigit,
  removeFirstDigit,
  stripLeadingZeros
} from './helpers';
import parseLarge from './helpers/largeNumbersParser';

export default function converter(strNum) {
  let isNegative = false,
    name = '';

  if (getFirstDigit(strNum) === '-') {
    isNegative = true;
    name = 'minus ';
    strNum = removeFirstDigit(strNum);
  }

  if (isZero(strNum)) return 'zero';

  strNum = stripLeadingZeros(strNum);

  name += parseLarge(strNum);

  return name;
}

const [, , strNum] = process.argv;
console.log(converter(strNum));
