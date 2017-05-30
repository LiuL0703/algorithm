class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        alls = {")":"(","}":"{","]":"["}
        res = []

        for i in s:
            if i in alls.values():
                res.append(i)
            else:
                if not res or res.pop()!=alls[i]:
                    return False

        return len(res)==0


class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        lens = len(s)
        while(lens!=0 and lens%2==0):
            s = s.replace("()","")
            s = s.replace("[]","")
            s = s.replace("{}","")

            lens = len(s) if lens>len(s) else 0

        return len(s)==0
