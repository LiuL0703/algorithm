/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let stack = [];
  let res = 0;
  
  while(head){
    stack.push(head.val);
    head = head.next;
  }
  
  const str = stack.join('');
  res = parseInt(str,2);
  
  return res;
};

/**
 * Runtime: 52 ms, faster than 84.24% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
 * Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
 */



var getDecimalValue = function(head) {
	let res = 0;
	
	while(head){
		res = res*2+head.val
		head = head.next;
	}
	return res;
};

/**
 * Runtime: 48 ms, faster than 95.49% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
 * Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
 */