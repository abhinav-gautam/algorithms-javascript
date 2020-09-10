function mergeSort(array) {
    if(array.length === 1){
        return array
    }
    // Splitting the list into half
    const middle = Math.floor(array.length/2)
    const left = array.slice(0,middle)
    const right = array.slice(middle)

    // console.log("Merge Sort Left:",left)
    // console.log("Merge Sort Right:",right)

    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    const result = []
    let leftIndex = 0
    let rightIndex = 0
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }else{
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    // console.log("Merge Left:",left)
    // console.log("Merge Right:",right)
    return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)))

}
const array = [9,8,2,1,4,6,5,3,0,17,4,2,1,6,8,9]
const result = mergeSort(array)
console.log(result)