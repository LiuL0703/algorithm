# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

#Iteration
class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        pre = None

        while head:
            tmp = head.next
            head.next = pre
            pre = head
            head = tmp

        return pre

# Recursion
class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        return self.reverse(head)

    def reverse(self,node,pre=None):
        if not node:
            return pre
        n = node.next
        node.next = pre
        return self.reverse(n,node)




