/**
 * 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 */

 /*
 function ListNode(x){
    this.val = x;
    this.next = null;
 }
*/
/** 
 * 递增链表 只需要对比头结点做一次遍历 小的拿出来即可
 */
/**
 * 
 * @param {LinkList} pHead1 
 * @param {LinkList} pHead2 
 */
function Merge(pHead1, pHead2){
  let merged = null;
  if(!pHead1){
    return pHead2;
  }
  if (!pHead2){
    return pHead1;
  }
  if(pHead1.val > pHead2.val){
    merged = pHead2;
    merged.next = Merge(pHead1,pHead2.next);
  }else{
    merged = pHead1;
    merged.next = Merge(pHead1.next,pHead2);
  }
}