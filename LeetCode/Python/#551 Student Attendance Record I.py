class Solution(object):
    def checkRecord(self, s):
        """
        :type s: str
        :rtype: bool
        """
        res = {"L":0}
        s = s.upper()
        if s.count("A")>=2:
            return False
        for i in s:
            if i=="L":
                res["L"] = res.get("L",1)+1
                if res["L"]>=3:
                    return False
            else:
                res["L"] = 0
        return True


class Solution(object):
    def checkRecord(self, s):
        """
        :type s: str
        :rtype: bool
        """
        return not re.search('A.*A|LLL',s)