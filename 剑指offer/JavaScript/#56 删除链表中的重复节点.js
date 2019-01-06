/**
 * 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，
 * 返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/**
 * 
 * @param {ListNode} pHead 
 */
function deleteDuplication(pHead){
  if(!pHead || !pHead.next) return pHead;
  let head = new ListNode(0);
  head.next = pHead;
  let pre = head;
  while(pHead){
    if(pHead.val === (pHead.next && pHead.next.val)){
      while(pHead.val === (pHead.next && pHead.next.val)){
        pHead = pHead.next;
      }
      pre.next = pHead.next;
      pHead = pHead.next;
    }else{
      pre = pre.next;
      pHead = pHead.next;
    }
  }
  return head.next;
}
