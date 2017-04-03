def fizzBuzz(n):
    res = []
    for i in range(1,n+1):
        res.append("Fizz"*(not i%3)+"Buzz"*(not i%5)+str(i)*((i%3)!=0 and (i%5)!=0))
    print(res)
    return res

fizzBuzz(15)

