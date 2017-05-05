# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def diameterOfBinaryTree(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root:
            return 0
        self.ans = 0
        def deep(root):
            if not root:
                return 0
            l = deep(root.left)
            r = deep(root.right)
            self.ans = max(self.ans,l+r)
            return max(l,r)+1
        deep(root)
        return self.ans
