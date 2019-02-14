import parseSingle from './';

test('parseSingle is a function', () => {
  expect(typeof parseSingle).toEqual('function');
});

describe('parseSingle returns the correct name for', () => {
  test('1', () => {
    expect(parseSingle('1')).toEqual('one');
  });

  test('2', () => {
    expect(parseSingle('2')).toEqual('two');
  });

  test('3', () => {
    expect(parseSingle('3')).toEqual('three');
  });

  test('4', () => {
    expect(parseSingle('4')).toEqual('four');
  });

  test('5', () => {
    expect(parseSingle('5')).toEqual('five');
  });

  test('6', () => {
    expect(parseSingle('6')).toEqual('six');
  });

  test('7', () => {
    expect(parseSingle('7')).toEqual('seven');
  });

  test('8', () => {
    expect(parseSingle('8')).toEqual('eight');
  });

  test('9', () => {
    expect(parseSingle('9')).toEqual('nine');
  });
});
