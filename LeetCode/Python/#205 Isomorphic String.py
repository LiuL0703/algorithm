class Solution(object):
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if s==t:return True
        if len(s)!=len(t):
            return False
        i = 1
        while i<len(s):
            if s.index(s[i])==t.index(t[i]):
                i+=1
            else:
                break

        return i==len(s)