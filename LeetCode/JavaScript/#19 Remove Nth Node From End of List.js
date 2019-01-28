/**
 * Given a linked list, remove the n-th node from the end of list and return its head.
 * 
 *  Example:
 *  Given linked list: 1->2->3->4->5, and n = 2.
 *  After removing the second node from the end, the linked list becomes 1->2->3->5.
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
 * @param {number} n
 * @return {ListNode}
 */
/**
 * two pointer and find the previous node let pre.next = pre.next.next
 */
var removeNthFromEnd = function(head, n) {
    if(!head || n < 0) return head;
    let slow = head;
    let fast = head;
    // find the previous node
    let len = n + 1;
    while(--len){
      if(!fast) return head;
      fast = fast.next;
    }
    if(!fast){
      return head.next;
    }
    while(fast.next){
      slow = slow.next;
      fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
};

                 