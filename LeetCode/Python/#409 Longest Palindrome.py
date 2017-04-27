class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: int
        """
        flag = True
        res = 0
        for i in set(s):
            temp =s.count(i)
            if temp%2==0:
                res += temp
            else:
                res += temp-1
                flag = False
        if not flag:
            return res+1
        else:
            return res


class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: int
        """
        lens = 0
        for i in set(s):
            if s.count(i)%2==0:
                lens +=s.count(i)
            else:
                lens +=s.count(i)-1

        if len(s)!=lens:
            lens +=1
        return lens