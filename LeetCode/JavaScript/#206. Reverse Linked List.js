/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Iteration
var reverseList = function(head) {
     var pre = null;
     var tmp = null;

     while(head){
     	tmp = head.next;
     	head.next = pre;
     	pre = head;
     	head = tmp;
     }
     return pre;
};

// recursion
var reverseList = function(head){
	return head?reversed(head,null):head;
}

function reversed(node,pre){
	let newList = node;

	if(node.next){
		newList = reversed(node.next,node);
	}
	node.next = pre;

	return newList;
}