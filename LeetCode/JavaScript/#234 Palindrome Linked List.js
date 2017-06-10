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
var isPalindrome = function(head) {
    if(head===null) return true;
    var res=[];
    var temp = head;
    while(head){
        res.push(head.val);
        head = head.next;
    }
    while(temp){
      if(temp.val!==res.pop()){
        return false;
      }
      temp = temp.next;
    }
    return true;
};