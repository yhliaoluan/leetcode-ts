function isSum(num1: number, num2: number, numStr: string, index: number, len: number): boolean {
  if (index >= numStr.length) {
    return true;
  }
  if (index + len > numStr.length) {
    return false;
  }
  if (numStr.startsWith('0', index) && len > 1) {
    return false;
  }
  const num3 = Number.parseInt(numStr.substr(index, len));
  if (num1 + num2 === num3) {
    return isSum(num2, num3, numStr, index + len, 1);
  } else {
    return isSum(num1, num2, numStr, index, len + 1);
  }
}

function isAdditiveNumber(num: string): boolean {
  for (let i = 1; i < num.length - 1; i++) {
    if (num.startsWith('0', 0) && i > 1) {
      return false;
    }
    for (let j = 1; j < num.length - i; j++) {
      if (num.startsWith('0', i) && j > 1) {
        break;
      }
      const num1 = Number.parseInt(num.substr(0, i));
      const num2 = Number.parseInt(num.substr(i, j));
      if (isSum(num1, num2, num, i + j, 1)) {
        return true;
      }
    }
  }
  return false;
};

export const func = isAdditiveNumber;
