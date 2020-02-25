/**
 * Given a singly linked list, group all odd nodes together followed by the even nodes. 
 * Please note here we are talking about the node number and not the value in the nodes.
 * You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
 * 
 * 
 * Example 1:
 *  Input: 1->2->3->4->5->NULL
 *  Output: 1->3->5->2->4->NULL
 * Example 2:
 *  Input: 2->1->3->5->6->4->7->NULL
 *  Output: 2->3->6->7->1->5->4->NULL
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
var oddEvenList = function(head) {
  if(!head||!head.next) return head;
  let dumb = head
  let slow = head;
  let fast = even = head.next;
  
  while(fast&&fast.next){
      slow.next = fast.next;
      fast.next = fast.next.next;
      fast = fast.next;
      slow = slow.next
  }
  slow.next = even;

  return dumb;
};

/**
 * Runtime: 60 ms, faster than 94.23% of JavaScript online submissions for Odd Even Linked List.
 * Memory Usage: 36.5 MB, less than 100.00% of JavaScript online submissions for Odd Even Linked List.
 */