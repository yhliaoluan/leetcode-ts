/**
 * convert a base 10 number to base 2
 */
function toBaseTwo(N: number): string {
  return (N >>> 0).toString(2);
}

/**
 * complement a bitwise string. E.g. '100' to '001'
 */
function stringComplement(str: string): string {
  let result: string = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] === '0' ? '1' : '0';
  }
  return result;
}

/**
 * bitwise string to base 10 number.
 */
function toBaseTen(baseTwo: string): number {
  return parseInt(baseTwo, 2);
}

function bitwiseComplement(N: number): number {
  return toBaseTen(stringComplement(toBaseTwo(N)))
};

export const func = bitwiseComplement;
