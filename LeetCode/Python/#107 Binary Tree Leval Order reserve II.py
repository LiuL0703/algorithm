# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def levelOrderBottom(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        if not root:
            return []
        res = []
        stack = [root]
        while stack:
            lens = len(stack)
            tmp = []
            for i in range(lens):
                sub = stack.pop(0)
                if sub.left:
                    stack.append(sub.left)
                if sub.right:
                    stack.append(sub.right)
                tmp.append(sub.val)
            res.insert(0, tmp)
        return res

