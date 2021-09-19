const getTimezoneOffsetHours = require('./getTimezoneOffsetHours');
test('Success return -9', () => {
  expect(getTimezoneOffsetHours()).toBe(-9);
});