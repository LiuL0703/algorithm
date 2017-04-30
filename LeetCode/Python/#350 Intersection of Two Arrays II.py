class Solution(object):
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        res = []
        ans = list(set(nums1)&set(nums2))
        for i in ans:
            tmp = min(nums1.count(i),nums2.count(i))
            for j in range(tmp):
                res.append(i)

        return res


class Solution(object):
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        nums = {}
        res = []

        for i in nums1:
            nums[i] = nums.get(ele,0)+1
        for i in nums2:
            nums[i] = nums.get(ele,0)-1
            if nums[i]>=0:
                res.append(i)
        return res

