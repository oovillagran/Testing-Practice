const reverseString = require('./reverse');

test ('reverse string', () => {
  expect(reverseString('Oscar')).toBe('racsO');
});