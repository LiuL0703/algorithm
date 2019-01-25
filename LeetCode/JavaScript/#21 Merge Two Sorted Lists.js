/**
 * Merge two sorted linked lists and return it as a new list. 
 * The new list should be made by splicing together the nodes of the first two lists.
 * Example:
 *  Input: 1->2->4, 1->3->4
 *  Output: 1->1->2->3->4->4
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// recursviely
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    let res = null;
    if(l1.val < l2.val){
      res = l1;
      res.next = mergeTwoLists(l1.next, l2);
    } else{
      res = l2;
      res.next = mergeTwoLists(l1, l2.next);
    }
    return res;
};


// iteratively
var mergeTwoLists = function(l1, l2) {
  if(!l1) return l2;
  if(!l2) return l1;
  
  let res = new ListNode(null);
  let dumb = res;

  while(l1 && l2){
    if(l1.val < l2.val){
      res.next = l1;
      l1 = l1.next;
    } else{
      res.next = l2;
      l2 = l2.next;
    }
    res = res.next;
  }
  res.next = l1 || l2;
  return dumb.next;
};