function bitAdd(num: number): number {
  let sum: number = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

export function countBalls(lowLimit: number, highLimit: number): number {
  const ballCount: number[] = new Array(46).fill(0);
  while (lowLimit <= highLimit) {
    const sum = bitAdd(lowLimit++);
    ballCount[sum] += 1;
  }
  let max: number = 0;
  ballCount.forEach(b => {
    max = Math.max(max, b);
  })
  return max;
};
