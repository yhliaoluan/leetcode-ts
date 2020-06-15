import { func } from './306'

describe('test', () => {
  test('basic', () => {
    expect(func('123')).toBeTruthy();
    expect(func('112358')).toBeTruthy();
    expect(func('1023')).toBeFalsy();
    expect(func('000')).toBeTruthy();
    expect(func('0123')).toBeFalsy();
    expect(func('1203')).toBeFalsy();
  });

  test('edge case', () => {
    expect(func('')).toBeFalsy();
    expect(func('1')).toBeFalsy();
    expect(func('11')).toBeFalsy();
  })
})
