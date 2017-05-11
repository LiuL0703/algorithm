class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums)==1:return nums[0]

        this_sum = max_sum = nums[0]
        for i in nums[1:]:
            this_sum = max(i,this_sum+i)
            max_sum = max(max_sum,this_sum)

        return max_sum