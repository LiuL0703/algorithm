/**
 * Given a linked list, determine if it has a cycle in it.
 * To represent a cycle in the given linked list, 
 * we use an integer pos which represents the position (0-indexed) 
 * in the linked list where tail connects to. If pos is -1, 
 * then there is no cycle in the linked list.
 * 
 * 
 * Example 1:
 *  Input: head = [3,2,0,-4], pos = 1
 *  Output: true
 *  Explanation: There is a cycle in the linked list, where tail connects to the second node.
 * 
 * Example 2:
 *  Input: head = [1,2], pos = 0
 *  Output: true
 *  Explanation: There is a cycle in the linked list, where tail connects to the first node.
 * 
 * Example 3:
 *  Input: head = [1], pos = -1
 *  Output: false
 *  Explanation: There is no cycle in the linked list.
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
 * @return {boolean}
 */

// two pointer
var hasCycle = function(head) {
    if(!head || !head.next) return false;
    let fast = head;
    let slow = head;
    while(fast.next && fast.next.next){
      fast = fast.next.next;
      slow = slow.next;
      if(fast.val === slow.val){
        return true;
      }
    }
    return false;
};

// hash Table

var hasCycle = function(head) {
  if(!head || !head.next) return false;
  let hash = new Map();
  while(head){
    if(hash.has(head)){
      return true;
    }else{
      hash.set(head,true);
    }
    head = head.next;
  }
  return false;
};