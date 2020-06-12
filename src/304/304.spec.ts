import { NumberMatrix } from './304'

describe('test', () => {
  test('basic', () => {
    const obj = new NumberMatrix([
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5]
    ]);
    expect(obj.sumRegion(2, 1, 4, 3)).toBe(8);
    expect(obj.sumRegion(1, 1, 2, 2)).toBe(11);
    expect(obj.sumRegion(1, 2, 2, 4)).toBe(12);
  });

  test('null array', () => {
    new NumberMatrix([[]]);
  });

  test('-1', () => {
    const obj = new NumberMatrix([[-1]]);
    expect(obj.sumRegion(0, 0, 0, 0)).toBe(-1);
  });
})
