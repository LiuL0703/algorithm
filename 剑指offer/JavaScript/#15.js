/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 */

 /*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * 
 * @param {LinkList} pHead 
 */
function ReverseList(pHead){
  let tmp = null;
  let pre = null;

  while(pHead){
    tmp = pHead.next;
    pHead.next = pre;
    pre = pHead;
    pHead = tmp;
  }
  return pre;
}