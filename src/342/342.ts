function isPowerOfFour(num: number): boolean {
  return num > 0 && (num & (num-1)) === 0 && (num & 0x55555555) !== 0;
}

export const func = isPowerOfFour;
