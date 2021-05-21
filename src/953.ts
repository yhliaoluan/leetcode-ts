function compare(left: string, right: string, order: string): boolean {
  for (let i = 0; i < left.length && i < right.length; i++) {
    const leftIdx = order.indexOf(left.charAt(i));
    const rightIdx = order.indexOf(right.charAt(i));
    if (leftIdx < rightIdx) return true;
    else if (leftIdx > rightIdx) return false;
  }
  return left.length <= right.length;
}

export function isAlienSorted(words: string[], order: string): boolean {
  for (let i = 1; i < words.length; i++) {
    if (!compare(words[i - 1], words[i], order)) return false;
  }
  return true;
};
