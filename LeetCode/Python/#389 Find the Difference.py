# ����һ ����
class Solution(object):
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        return list(set(list(t))-set(list(s)))

findTheDifference("abcd","abcde") # return [u'e']
#������
class Solution(object):
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        code = 0
        for cha in s:
            code ^=ord(cha)
        for cha in t:
            code ^= ord(cha)
        return chr(code)
#������
def findTheDifference(self, s, t):
    diff = 0
    for i in range(len(s)):
        diff -= ord(s[i])
        diff += ord(t[i])
    diff += ord(t[-1])
    print(chr(diff))
    return chr(diff)
