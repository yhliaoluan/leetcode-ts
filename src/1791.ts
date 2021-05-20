export function findCenter(edges: number[][]): number {
  const map = new Map<number, number>();
  for (const edge of edges) {
    map.set(edge[0], (map.get(edge[0]) ?? 0) + 1);
    map.set(edge[1], (map.get(edge[1]) ?? 0) + 1);
  }
  const n = map.size;
  for (const entry of Array.from(map.entries())) {
    if (entry[1] === n - 1) return entry[0];
  }
  return -1;
};
