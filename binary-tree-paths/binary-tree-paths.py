# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def binaryTreePaths(self, root, path_str=""):
        result = []
        if root:
            if not root.left and not root.right:
                return [path_str+str(root.val)]
            
            path_str += "{0}->".format(root.val)
            if root.left:
                result+=(self.binaryTreePaths(root.left, path_str))
            if root.right:
                result+=(self.binaryTreePaths(root.right, path_str))
            
            return result
        """
        :type root: TreeNode
        :rtype: List[str]
        """
        