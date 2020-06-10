import { func } from './342'

test('basic', () => {
  expect(func(0)).toBeFalsy();
  expect(func(1)).toBeTruthy();
  expect(func(5)).toBeFalsy();
  expect(func(16)).toBeTruthy();
  expect(func(32)).toBeFalsy();
});
