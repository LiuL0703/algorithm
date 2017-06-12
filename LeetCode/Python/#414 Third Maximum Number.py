class Solution(object):
    def thirdMax(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums = list(set(nums))
        if len(nums)<=2:
            return max(nums)
        if len(nums)==3:
            return min(nums)
        count = 0
        while count<2:
            nums.remove(max(nums))
            count+=1

        return max(nums)