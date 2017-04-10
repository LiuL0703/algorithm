class Solution(object):
    def findRelativeRanks(self, nums):
        """
        :type nums: List[int]
        :rtype: List[str]
        """
        s = {n: i for i,n in enumerate(sorted(nums,reverse=True))}

        medals = ["Gold","Silver","Bronze"]
        for n in range(len(nums)):
            if s[nums[n]]>=len(medals):
                nums[n] = str(s[nums[n]]+1)
            else:
                nums[n] = (medals[s[nums[n]]]+" Medal")

        return nums


# def findRelativeRanks(nums):
#     """
#     :type nums: List[int]
#     :rtype: List[str]
#     """
#     s = {n: i for i,n in enumerate(sorted(nums,reverse=True))}
#
#     medals = ["Gold","Silver","Bronze"]
#     for n in range(len(nums)):
#         if s[nums[n]]>=len(medals):
#             nums[n] = str(s[nums[n]]+1)
#         else:
#             nums[n] = (medals[s[nums[n]]]+" Medal")
#
#     print(nums)
#     return nums
#
# findRelativeRanks([1,2,3,4,5])
# findRelativeRanks([3,1,4,5,2])