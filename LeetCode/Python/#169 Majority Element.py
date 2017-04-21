class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        limit = len(nums)/2.0
        for i in list(set(nums)):
            if nums.count(i)>limit:
                return i
