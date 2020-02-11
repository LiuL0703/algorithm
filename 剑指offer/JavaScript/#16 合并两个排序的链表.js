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
  return merged;
}

// 循环遍历
function Merge(pHead1, pHead2) {
    if(!pHead1) return pHead2;
    if(!pHead2) return pHead1;
    
    let dumb = new ListNode(null);
    let res = dumb;
    while(pHead1 && pHead2){
        if(pHead1.val > pHead2.val){
            dumb.next = pHead2;
            pHead2 = pHead2.next;
        }else{
            dumb.next = pHead1;
            pHead1 = pHead1.next;
        }
        dumb = dumb.next;
    }
    if(pHead1){
        dumb.next = pHead1;
    }
    if(pHead2){
        dumb.next = pHead2;
    }
    return res.next;
}