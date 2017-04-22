class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        return sorted(s)==sorted(t)


class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        dic1,dic2 = {},{}
        for i in s:
            dic1[i] = dic1.get(i,0)+1
        for i in t:
            dic2[i] = dic2.get(i,0)+1
        return dic1==dic2

# beats 98.51%
class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if s == t:
            return True
        if len(s)!=len(t):
            return False

        for i in set(s):
            if s.count(i)!=t.count(i):
                return False

        return True
