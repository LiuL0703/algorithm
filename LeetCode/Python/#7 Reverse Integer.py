class Solution(object):
  def reverse(self, x):
    """
    :type x: int
    :rtype: int
    """
    flag = True
    if x<0:
        x = abs(x)
        flag = False
    x =int(str(x)[::-1])
    if not flag:
        x = x*-1

    if x>=2147483647 or x<=-2147483648:
        return 0
    return x
