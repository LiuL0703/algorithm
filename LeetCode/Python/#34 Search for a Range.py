class Solution(object):
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        res = [-1,-1]
        cnt = nums.count(target)
        if cnt==0:
            return res
        end = nums.index(target)
        return [end,end+cnt-1]