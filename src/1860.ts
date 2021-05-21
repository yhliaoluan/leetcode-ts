export function memLeak(memory1: number, memory2: number): number[] {
  let time = 1;
  while (time <= memory1 || time <= memory2) {
    if (memory2 > memory1) {
      memory2 -= time;
    } else {
      memory1 -= time;
    }
    time++;
  }
  return [time, memory1, memory2];
};
