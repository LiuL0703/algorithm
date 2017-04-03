def findNum(arr):
    res = set(arr)
    ret = {}
    for i in res:
        ret[str(i)]=arr.count(i)

    print(ret)
    return ret
findNum([1,2,2,4,5,3,2])