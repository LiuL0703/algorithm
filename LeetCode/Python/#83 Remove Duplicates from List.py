# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


#recursive
class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if head is None:
            return head
        if head.next is None:
            return head
        if head.val == head.next.val:
            head.next = head.next.next
            self.deleteDuplicates(head)
        else:
            self.deleteDuplicates(head.next)

        return head


# iterative
class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if head is None:
            return head
        while head.next:
            if head.val==head.next.val:
                head.next = head.next.next if head.next.next else None
            else:
                head = head.next

        return head