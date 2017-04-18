# class Solution(object):
#     def firstUniqChar(self, s):
#         """
#         :type s: str
#         :rtype: int
#         """
#         for i in range(0,len(s)):
#             if s.count(s[i])==1:
#                 return i
#
#         return -1

class Solution(object):
    def firstUniqChar(self,s):
        """
        :type s: str
        :rtype: int
        """
        res = {}

        for i in s:
            if i in res.keys():
                res[i]+=1
            else:
                res[i] =1

        for i in range(len(s)):
            c = s[i]
            if res[c]==1:
                return i

        return -1