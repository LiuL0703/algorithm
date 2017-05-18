class Solution(object):
    def countSegments(self, s):
        """
        :type s: str
        :rtype: int
        """
        return len(s.split())



class Solution(object):
    def countSegments(self, s):
        """
        :type s: str
        :rtype: int
        """
        res = 0
        flag = True

        for i in s:
            if i!="":
                res += flag
                flag = False
            else:
                flag = True

        return res
