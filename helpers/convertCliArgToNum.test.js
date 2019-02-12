import cliArgToNum from './convertCliArgToNum';

test('cliArgToNum is a function', () => {
  expect(typeof cliArgToNum).toEqual('function');
});

test(`Converts strings to the correct numbers`, () => {
  let strNum = '0';
  let convertedNum = cliArgToNum(strNum);
  expect(convertedNum).toEqual(0);

  strNum = '12';
  convertedNum = cliArgToNum(strNum);
  expect(convertedNum).toEqual(12);

  strNum = '-1';
  convertedNum = cliArgToNum(strNum);
  expect(convertedNum).toEqual(-1);
});
