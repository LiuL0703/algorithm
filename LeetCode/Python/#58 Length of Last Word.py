class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        s = s.strip().split()
        if len(s)!=0:
            return len(s[len(s)-1])
        return 0
