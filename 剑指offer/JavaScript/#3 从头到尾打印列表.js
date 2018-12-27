/**
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
 */


/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head){
  let res = [];
  while(!head) {
    res.unshift(head.val);
    head = head.next;
  }
  return res;
}