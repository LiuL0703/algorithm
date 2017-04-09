class Solution(object):
    def reverseWords(self,s):
        """
        :type s: str
        :rtype: str
        """
        s = s.split(" ")
        lens = len(s)

        for i in range(0,lens):
            s[i] = s[i][::-1]
        return  " ".join(s)