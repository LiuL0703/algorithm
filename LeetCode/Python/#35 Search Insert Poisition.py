class Solution(object):
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        for index,item in enumerate(nums):
            if target <= item:
                return index
            elif index==len(nums)-1:
                return index+1