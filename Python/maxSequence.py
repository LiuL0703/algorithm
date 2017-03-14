__author__ = 'liulei'

this_sum = 0
max_sum = 0;
def maxSequence(arr):
    global this_sum
    global max_sum
    for i in arr:
        this_sum += i
        if this_sum > max_sum:
            max_sum = this_sum
        elif this_sum < 0:
            this_sum = 0
    print(max_sum)
    return max_sum

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])