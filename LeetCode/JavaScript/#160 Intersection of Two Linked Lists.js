/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 * a1 → a2
            ↘
               c1 → c2 → c3
              ↗            
  b1 → b2 → b3
 * Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
 * Output: Reference of the node with value = 8
 * Input Explanation: The intersected node's value is 8 (note that this must 
 *    not be 0 if the two lists intersect). From the head of A, 
 *    it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. 
 *    There are 2 nodes before the intersected node in A; 
 *    There are 3 nodes before the intersected node in B.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/**
 * mind：use hashMap to store the keys and compare with another one 
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    let hash = new Set();
    while(headA){
      hash.add(headA);
      headA = headA.next;
    }
    while(headB){
      if(hash.has(headB)){
        return headB;
      }
      headB = headB.next;
    }
    return null;
};


/**
 * To traverse the linked list, when the one reach the end to jump to other head to continue,
 * until they are same. one case is stopped at the intersection node otherwise in their end.
 * 
 */
var getIntersectionNode = function(headA, headB) {
  let line1 = headA;
  let line2 = headB;
  
  while(line1 !== line2){
    line1 = line1 ? line1.next : headB;
    line2 = line2 ? line2.next : headA;
  }
  return line1;
};