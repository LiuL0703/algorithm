# class Solution(object):
#     def containsDuplicate(self, nums):
#         """
#         :type nums: List[int]
#         :rtype: bool
#         """
#         for i in set(nums):
#             if nums.count(i)>1:
#                 return True
#         return False
#
#


class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        return len(list(set(nums)))!=len(nums)

