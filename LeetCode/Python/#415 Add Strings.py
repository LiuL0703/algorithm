class Solution(object):
    def addStrings(self,num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        flag = 48*2
        carry = 0
        tmp = abs(len(num1)-len(num2))
        res = ""
        for i in range(tmp):
            if len(num1)>len(num2):
                num2 = "0"+num2
            else:
                num1 = "0"+num1
        for i in range(len(num1)-1,-1,-1):
            tmp = ord(num1[i])+ord(num2[i]) - flag +carry
            res = str(tmp%10)+res;
            carry = tmp//10
        if not carry == 0:
            res = str(carry)+res
        return res

# addStrings("9333852702227987","85731737104263")