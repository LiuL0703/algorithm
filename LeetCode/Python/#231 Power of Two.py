class Solution(object):
    def isPowerOfTwo(self, n):
        """
        :type n: int
        :rtype: bool
        """
        counts = 0
        while n>0:
            if n&1:
                counts+=1
            n >>=1
        return True if counts==1 else False

