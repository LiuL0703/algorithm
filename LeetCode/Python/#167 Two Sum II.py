# two-pointer
class Solution(object):
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        l,r = 0,len(numbers)-1
        while l<r:
            s = numbers[l]+numbers[r]
            if s==target :
                return [l+1,r+1]
            elif s < target:
                l +=1
            elif s > target:
                r -=1

#Binary searvh
class Solution(object):
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        lens = len(numbers)
        for i in range(0,lens):
            l,r = i+1,lens-1
            tmp =target-numbers[i]
            while l<=r:
                mid = l+(r-1)//2
                if numbers[mid]==tmp:
                    return [l+1,r+1]
                elif numbers[mid]>tmp:
                    r -=1
                elif numbers[mid]<tmp:
                    l +=1
#dictionary
class Solution(object):
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        dic = {}
        for i, num in enumerate(numbers):
            if target-num in dic:
                return [dic[target-num]+1, i+1]
            dic[num] = i