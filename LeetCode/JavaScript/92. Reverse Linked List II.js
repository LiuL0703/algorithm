/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(!head) return;
    const res = head;
    let reverseHead = null;
    let count = 1;
    while(count < m){
        reverseHead = head;
        head = head.next;
        count++;
    }
    
    let reverseTail = head;

    let rHead = head;
    let tmp = null;
    let pre = null;
    
    while(count <= n && rHead){
        tmp = rHead.next;
        rHead.next = pre;
        pre = rHead;  
        rHead = tmp;
        count++;
    }

    reverseTail.next = tmp;

    
    if(reverseHead){
        reverseHead.next = pre;
        return res;
    }else{
        return pre;
    }
};


/**
 *  2020/02/20
 * Runtime: 48 ms, faster than 94.70% of JavaScript online submissions for Reverse Linked List II.
 * 
 * Memory Usage: 33.7 MB, less than 57.14% of JavaScript online submissions for Reverse Linked List II.
 */