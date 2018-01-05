import math
class Solution:
    def judgeSquareSum(self, c):
        """
        :type c: int
        :rtype: bool
        """
        mid =math.floor(math.sqrt(c/2))+1;
        for i in range(mid):
            tmp = math.sqrt(c - pow(i,2))
            if tmp == int(tmp):
                return True
        return False
                
            
