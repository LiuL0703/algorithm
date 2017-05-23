class Solution(object):
    def isPowerOfFour(self, num):
        """
        :type num: int
        :rtype: bool
        """
        num = ""+bin(num)[2:]
        lens = len(num)-1
        if num[0] == "1" and (lens)%2 == 0 and num.count("0")== lens:
            return True
        return False