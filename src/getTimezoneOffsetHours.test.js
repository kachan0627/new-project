const { TestScheduler } = require('@jest/core');
const getTimezoneOffsetHours = require('./getTimezoneOffsetHours');
TestScheduler('Success return -9', () => {
  expect(getTimezoneOffsetHours()).toBe(-9);
});