class Solution(object):
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        k = k%len(nums)
        nums[:len(nums)-k],nums[len(nums)-k:] = nums[len(nums)-k:],nums[:len(nums)-k]

# the second way
class Solution(object):
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        nums.reverse()
        k = k%len(nums)
        nums[:k] = reversed(nums[:k])
        nums[k:] = reversed(nums[k:])
