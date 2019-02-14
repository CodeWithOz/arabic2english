import { isZero, getFirstDigit, removeFirstDigit } from './helpers';
import parseLarge from './helpers/largeNumbersParser';

export default function converter(strNum) {
  if (isZero(strNum)) return 'zero';

  let isNegative = false,
    name = '';

  if (getFirstDigit(strNum) === '-') {
    isNegative = true;
    name = 'minus ';
    strNum = removeFirstDigit(strNum);
  }

  name += parseLarge(strNum);

  return name;
}
