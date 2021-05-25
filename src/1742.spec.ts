import { countBalls } from "./1742";

test('basic', () => {
  expect(countBalls(1, 10)).toBe(2);
  expect(countBalls(5, 15)).toBe(2);
  expect(countBalls(19, 28)).toBe(2);
  expect(countBalls(6745, 28696)).toBe(1499);
})
