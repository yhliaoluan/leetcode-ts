import { ListNode, mergeTwoLists } from "./21";

test('null', () => {
  expect(mergeTwoLists(null, null)).toBeNull();
})

test('first is null', () => {
  const node = new ListNode(5, null);
  expect(mergeTwoLists(null, node)).toBe(node);
})

test('second is null', () => {
  const node = new ListNode(5, null);
  expect(mergeTwoLists(node, null)).toBe(node);
})

test('concat', () => {
  const first = new ListNode(5, new ListNode(6, null));
  const second = new ListNode(1, new ListNode(2, null));
  expect(mergeTwoLists(first, second)).toEqual(new ListNode(1, new ListNode(2, new ListNode(5, new ListNode(6)))));
})
