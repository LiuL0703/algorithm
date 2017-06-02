/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// Recursive
var removeElements = function(head, val) {
	
 	if(!head) return head;
 	while(head!==null&&head.val===val){
 		head = head.next;
 	}
 	if(head!==null){
 		head.next = removeElements(head.next,val);
 	}

 	return head;
};

var removeElements = function(head, val) {
	var list = new ListNode();
	var pre,cur;
	if(!head) return head;
	list.next = head;
	pre = list;
	cur = pre.next;
	while(cur){
		if(cur.val===val){
			pre.next = cur.next;
		}else{
			pre = pre.next;
		}
		cur = cur.next;
	}
    return list.next;

}
var removeElements = function(head, val) {
	if(head===null) return head;
	while(head&&head.val===val) head = head.next;
	var list = head;
	while(head&&head.next){
		if(head.next.val===val){
			head.next = head.next.next;
		}else{
			head = head.next;
		}
	}
	return list;
}