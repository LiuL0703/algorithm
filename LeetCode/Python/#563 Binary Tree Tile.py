# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def findTilt(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        self.res = 0
        def sums(roots):
            if not roots:
                return 0
            left,right = sums(roots.left),sums(roots.right)
            self.res+=abs(left-right)
            return roots.val+left+right
        sums(root)
        return self.res