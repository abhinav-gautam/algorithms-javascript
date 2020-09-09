def insertion_sort(array):
    for i in range(1, len(array)):
        temp = array[i]
        j = i - 1
        while j >= 0 and temp < array[j]:
            array[j + 1] = array[j]
            j -= 1
        array[j + 1] = temp
    return array


print(insertion_sort([9,8,2,1,4,6,5,3,0,17,4,2,1,6,8,9]))