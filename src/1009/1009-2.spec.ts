import { func } from './1009-2'

test('basic', () => {
  expect(func(0)).toBe(1);
  expect(func(5)).toBe(2);
  expect(func(7)).toBe(0);
  expect(func(10)).toBe(5);
})
