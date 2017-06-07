class Solution(object):
    def firstMissingPositive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums)==0:
            return 1
        bgn = 1
        while bgn in nums:
            bgn+=1
        return bgn
