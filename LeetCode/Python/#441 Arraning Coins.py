class Solution(object):
    def arrangeCoins(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n == 1:
            return 1
        res = 0
        tmp = 1
        n = n - tmp
        while n>=0:
            res += 1
            tmp += 1
            n -= tmp

        return res

