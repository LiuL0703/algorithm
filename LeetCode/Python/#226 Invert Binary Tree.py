# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


# recursion
class Solution(object):
    def invertTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        if root == None:
            return None
        (root.left,root.right) = (self.invertTree(root.right),self.invertTree(root.left))
        return root


# iteration
class Solution(object):
    def invertTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        if root == None:
            return None
        s = [root]
        while(s):
            tmp = s.pop()
            if tmp:
                tmp.left,tmp.right = tmp.right,tmp.left
                s.append(tmp.left)
                s.append(tmp.right)
        return root

