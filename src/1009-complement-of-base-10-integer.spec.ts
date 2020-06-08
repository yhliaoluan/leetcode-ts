import { bitwiseComplement } from './1009-complement-of-base-10-integer'

test('basic', () => {
  expect(bitwiseComplement(0)).toBe(1);
  expect(bitwiseComplement(5)).toBe(2);
  expect(bitwiseComplement(7)).toBe(0);
  expect(bitwiseComplement(10)).toBe(5);
})
