class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        j = 0
        lens = len(nums)
        for i in range(0,lens):
            if(nums[i]!= 0):
                nums[j] = nums[i]
                j+=1

        for k in range(j,lens):
            nums[k] = 0