const stringLength = require('./index');

test('length of string', () => {
  expect(stringLength('hello')).toBe(5);
});

test('throw error for empty string', () => {
  expect(() => {
    stringLength('');
  }).toThrow('String must be at least 1 character long.');
});

test('throw error for string longer than 10 characters', () => {
  expect(() => stringLength('Hello world, how are you?')).toThrow('String must be no more than 10 character long.');
});
