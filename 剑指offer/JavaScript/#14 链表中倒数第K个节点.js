/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 */

 /*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 *  思路： 双指针 -->快慢指针 
 *  快指针先走k步 然后同步 当快指针到头时 慢指针所在的位置即是 倒数第k个位置
 */
/**
 * 
 * @param {LinkList} head 
 * @param {Nood} k 
 */
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