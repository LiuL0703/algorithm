/**
 * Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 * Example:
 *  Input: head = 1->4->3->2->5->2, x = 3
 *  Output: 1->2->2->4->3->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if(!head) return head;
  let dumb = low = new ListNode(null);
  let dumbHigh = high = new ListNode(null);

  while(head){
    if(head.val < x){
      low.next = head;
      low = low.next;
    } else{
      high.next = head;
      high = high.next;
    }
    head = head.next;
  }
  high.next = null;
  low.next = dumbHigh.next;

  return dumb.next;
};