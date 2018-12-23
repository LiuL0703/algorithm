/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 */

 /*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k){
    if (!head || k <= 0){
      return null;
    }
    let slow = head;
    let fast = head;
    while(--k){
      if (fast.next){
        fast = fast.next;
      } else {
        return null;
      }
    }
    while(fast.next){
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
}