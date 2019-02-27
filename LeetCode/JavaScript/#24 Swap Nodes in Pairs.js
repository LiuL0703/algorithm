/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
 * Example:
 *  Given 1->2->3->4, you should return the list as 2->1->4->3.
 * 
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
 * @return {ListNode}
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if(!head||!head.next) return head;
  let dummy = new ListNode(null)
  let pre= new ListNode(null);
  let next = new ListNode(null);
  let tmp = new ListNode(null);
  
  dummy = head.next;
  while(head&&head.next){
    pre = head.next;
    next = head.next.next;
    tmp.next = pre;
    pre.next = head;
    head.next = next;
    tmp = head;
    head = head.next;
  }
  return dummy;
};