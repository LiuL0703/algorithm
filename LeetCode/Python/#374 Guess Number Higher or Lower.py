# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num):

class Solution(object):
    def guessNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        l = 1
        h = n

        while l<=h:
            mid = (l+h)//2
            if guess(mid) == 1:
                l = mid + 1
            if guess(mid) == -1:
                h = mid
            if guess(mid) == 0:
                return mid

        return -1