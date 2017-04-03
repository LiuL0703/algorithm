def lengthOfLongestSubstring(s):
    """
    :type s: str
    :rtype: int
    """
    res = 0
    temp = []

    for i in s:
        if i in temp:
            if len(i)>res:
                res = len(temp)
            temp = temp[temp.index(i)+1:]
            temp.append(i)
        else:
            temp.append(i)
    return max(res,len(temp))
