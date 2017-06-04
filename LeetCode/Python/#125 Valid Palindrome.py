import re
class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if s=="":return True
        s = re.sub(r"\W+","",s).lower()
        left = 0
        right = len(s)-1

        while left < right:
            if s[left]!=s[right]:
                return False
            left +=1
            right -=1

        return True

# an easy way
def isPalindrome(self, s):
    p = re.compile("[\W_]+")
    s = p.sub("",s.lower())
    return s == s[::-1]

import re
class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if s=="":return True
        s = re.sub(r"\W+","",s).lower()
        return s==s[::-1]