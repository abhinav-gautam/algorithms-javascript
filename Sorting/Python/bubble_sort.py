def bubble_sort(array):
    for i in range(len(array)):
        for j in range(len(array)-i-1):
            if array[j] > array[j+1]:
                array[j],array[j+1] = array[j+1],array[j]
    return array


print(bubble_sort([9,8,2,1,4,6,5,3,0,17,4,2,1,6,8,9]))
