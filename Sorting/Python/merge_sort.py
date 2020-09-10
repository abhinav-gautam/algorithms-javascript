def merge_sort(array):
    if len(array) == 1:
        return array

    middle = len(array) // 2
    left = array[:middle]
    right = array[middle:]

    return merge(merge_sort(left), merge_sort(right))


def merge(left, right):
    result = []
    leftIndex = 0
    rightIndex = 0
    while leftIndex < len(left) and rightIndex < len(right):
        if left[leftIndex] < right[rightIndex]:
            result.append(left[leftIndex])
            leftIndex += 1
        else:
            result.append(right[rightIndex])
            rightIndex += 1

    while leftIndex < len(left):
        result.append(left[leftIndex])
        leftIndex += 1
    while rightIndex < len(right):
        result.append(right[rightIndex])
        rightIndex += 1

    return result


print(merge_sort([9,8,2,1,4,6,5,3,0,17,4,2,1,6,8,9]))