def selection_sort(array):
    for i in range(len(array)):
        min = i
        temp = array[min]
        for j in range(i+1,len(array)):
            if array[j] < array[min]:
                min = j
        array[i] = array[min]
        array[min] = temp
    return array


print(selection_sort([9,8,2,1,4,6,5,3,0,17,4,2,1,6,8,9]))