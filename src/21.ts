/**
 * Definition for singly-linked list.
 *
 */
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 !== null && l2 !== null) {
    let head: ListNode = new ListNode(-1, null);
    let l3 = head;
    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        l3.next = l1;
        l3 = l3.next;
        l1 = l1.next;
      } else {
        l3.next = l2;
        l3 = l3.next;
        l2 = l2.next;
      }
    }
    if (l1 !== null) {
      l3.next = l1;
    } else if (l2 !== null) {
      l3.next = l2;
    }
    return head.next;
  } else if (l1 === null) {
    return l2;
  } else {
    return l1;
  }
}
