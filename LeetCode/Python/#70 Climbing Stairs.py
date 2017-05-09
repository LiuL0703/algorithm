class Solution(object):
   def climbStairs(self,n):
    """
    :type n: int
    :rtype: int
    """
    res = list(range(n+1))
    for i in range(3,n+1):
        res[i] = res[i-1] + res[i-2]
    print(res[n])
    return res[n]



