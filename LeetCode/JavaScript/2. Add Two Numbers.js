/*
* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example:

  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
  Explanation: 342 + 465 = 807.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let curry = 0;
    let sum = 0;
    let head = dumb = new ListNode(null);
    while(l1 || l2){
      let l1Val = l1 && l1.val || 0;
      let l2Val = l2 && l2.val || 0
      sum = l1Val + l2Val + curry;
      curry = ~~ (sum / 10);
      let tmp = new ListNode(sum%10);
      dumb.next = tmp;
      dumb = dumb.next;
      if(l1){
        l1 = l1.next;
      }
      if(l2){
        l2 = l2.next;
      }
    }
    
    if(curry !== 0){
      dumb.next = new ListNode(curry);
    }

    return head.next;
};

/*
* 
* Runtime: 104 ms, faster than 95.23% of JavaScript online submissions for Add Two Numbers.
* Memory Usage: 38.3 MB, less than 75.00% of JavaScript online submissions for Add Two Numbers.
*
*/





// another way
var addTwoNumbers = function(l1, l2) {
    let l1Str = '';
    let l2Str = '';
    let res = 0;
    
    while(l1){
        l1Str = l1.val + l1Str;
        l1 = l1.next;
    }
    while(l2){
        l2Str = l2.val + l2Str;
        l2 = l2.next;
    }
    res = ""+ (BigInt(l1Str) + BigInt(l2Str));
    
    const stack = res.split('');
    let head = dumb = new ListNode(null);
    let lens = stack.length;

    while(lens--){
        let tmp = new ListNode(stack[lens])
        dumb.next = tmp;
        dumb = dumb.next;
    }
    
    return head.next
};




