class Solution(object):
    def findMaxConsecutiveOnes(self,nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        this_val = 0
        max_val = 0

        for i in nums:
            if i==1:
                this_val+=1
            else:
                this_val = 0
            max_val = max(this_val,max_val)
        return max_val
