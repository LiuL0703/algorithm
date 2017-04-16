#
class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        return all(ransomNote.count(i)<=magazine.count(i) for i in set(ransomNote))


class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        return all(ransomNote.count(i)<=magazine.count(i) for i in string.ascii_lowercase)


class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        s,i=sorted(ransomNote),0
        for ele in sorted(magazine):
            i += ele = s[i] and i<len(s)
        return i==len(s)