import math
class Solution(object):
    def isPerfectSquare(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num == 1:
            return True
        h = math.ceil(num/2)
        l = 2
        while l <= h:
            m = math.ceil((l+h)/2)
            if m*m < num:
                l = m + 1
            elif m*m>num:
                h = m - 1
            else:
                break

        return m*m == num
