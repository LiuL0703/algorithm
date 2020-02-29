/**
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
 * 
 * Example 1:
 * Given 1->2->3->4, reorder it to 1->4->2->3.
 * 
 * Example 2:
 * Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */

// stack & two pointer
var reorderList = function(head) {
  let stack = [];
  
  while(head){
      stack.push(head);
      head = head.next;
  }
  
  let left = 0;
  let right = stack.length-1;
  
  while(left < right){
      stack[left].next = stack[right];
      left++;
      stack[right].next = stack[left];
      right--;
  }
  if(stack[left]){
      stack[left].next = null;
  }
};

/**
 * Runtime: 84 ms, faster than 82.40% of JavaScript online submissions for Reorder List.
 * Memory Usage: 42 MB, less than 50.00% of JavaScript online submissions for Reorder List.
 */