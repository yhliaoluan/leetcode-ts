import { memLeak } from "./1860";

test('basic', () => {
  expect(memLeak(2, 2)).toEqual([3, 1, 0]);
  expect(memLeak(8, 11)).toEqual([6, 0, 4]);
})
