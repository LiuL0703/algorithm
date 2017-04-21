# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

#recursive
class Solution(object):
    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """
        if p and q:
            return p.val==p.val&&self.isSameTree(p.left,q.left)&&self.isSameTree(p.right,q.right)
        else:
            return p==q




# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """
        s = [(p,q)]
        while s:
            n1,n2=s.pop()
            if not n1 and not n2 and n1.val==n2.val:
                s.append((n1.left,n2.left))
                s.append((n1.right,n2.right))
            elif not n1 and not n2:
                continue
            else:
                return False
        return True


