class Solution(object):
    def checkPerfectNumber(self, num):
        """
        :type num: int
        :rtype: bool
        """
        res = 0
        base = 1
        if num <=0: return False
        if num%10==6 or num%10==8:
            if num == 6:
                return True
            while(res < num):
                res = res + pow(base,3)
                base = base + 2

        return res == num