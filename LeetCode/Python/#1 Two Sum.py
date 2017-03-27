def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    arr = {}
    for i in range(0,len(nums)):
        if nums[i] in arr:

            return [arr[nums[i]],i]
        else:
            arr[target - nums[i]] = i

twoSum([0,5,5,10],10)