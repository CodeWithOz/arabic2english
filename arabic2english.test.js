import converter from './arabic2english';
import cliArgToNum from './helpers/convertCliArgToNum';

test('converter is a function', () => {
  expect(typeof converter).toEqual('function');
});
