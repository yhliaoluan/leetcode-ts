import { isAlienSorted } from "./953";

test('basic', () => {
  expect(isAlienSorted(["hello","leetcode"], 'hlabcdefgijkmnopqrstuvwxyz')).toBeTruthy();
  expect(isAlienSorted(["word","world","row"], 'worldabcefghijkmnpqstuvxyz')).toBeFalsy();
  expect(isAlienSorted(["apple","app"], 'abcdefghijklmnopqrstuvwxyz')).toBeFalsy();
  expect(isAlienSorted(["app","apple"], 'abcdefghijklmnopqrstuvwxyz')).toBeTruthy();
  expect(isAlienSorted(["app","app"], 'abcdefghijklmnopqrstuvwxyz')).toBeTruthy();
  expect(isAlienSorted(["app"], 'abcdefghijklmnopqrstuvwxyz')).toBeTruthy();
})
