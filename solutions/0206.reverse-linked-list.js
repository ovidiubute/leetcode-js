/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const stack = [];

  if (head === null) {
    return head;
  }

  let p = head;

  while (p) {
    stack.push(p);
    p = p.next;
  }

  let item = stack.pop();
  let h = item;
  while (stack.length) {
    const nextItem = stack.pop();
    item.next = nextItem;
    item = item.next;
  }

  item.next = null;

  return h;
};
