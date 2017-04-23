class Solution(object):
    def convertToBase7(self, num):
        """
        :type num: int
        :rtype: str
        """
        if num == 0:
            return '0'
        n = abs(num)
        res = ""
        while n:
            res =str(n%7)+res
            n = n//7
        if num<0:
            return "-"+res
        return res



class Solution(object):
    def convertToBase7(self, num):
        """
        :type num: int
        :rtype: str
        """
        if num ==0:
            return 0
        if num<0:
            return "-"+self.convertToBase7(-num)
        res = ''
        while num>0:
            res = str(num%7)+res
            num /= 7
        return res