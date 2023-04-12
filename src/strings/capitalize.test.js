const capitalizeString = require('./capitalize');

test('Capitalize String', () => {
  expect(capitalizeString('hello world')).toEqual('Hello world')
});
