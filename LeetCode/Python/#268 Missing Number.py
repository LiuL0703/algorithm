class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        sums = (1+len(nums))*len(nums)/2
        res = sum(nums)
        return sums-res
