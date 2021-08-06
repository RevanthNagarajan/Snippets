// function partition (input,left,right) {
//     let p = Math.floor((left+right)/2);
//     while(left<=right) {
//         while(input[left]<input[p]) {
//             left++;
//         }
//         while(input[right]>input[p]) {
//             right--;
//         }
//         if(left<=right) {
//             let temp = input[left];
//             input[left] = input[right];
//             input[right] = temp;
//             left++;
//             right--;
//         }
//     }
//     return left;
// }

// function quicksort (input,left,right) {
//     if(input.length>1) {
//         let pointer = partition(input,left,right)
//         if(pointer-1 > left) {
//             quicksort(input, left, pointer-1);
//         } 
//         if(pointer < right) {
//             quicksort(input, pointer, right);
//         }
//     } else {
//         return input;
//     }
//     return input
// }

function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    console.log(pivotValue,pivotIndex)
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    //console.log("x",arr[pivotIndex])
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    console.log("x",arr[pivotIndex], arr[end])
    return pivotIndex;
};

function quickSort(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
    return arr;
}

console.log(quickSort([82,21,47,83,37,19,94,32,41,76,62,8],0,11))

console.log(quickSort([2147483647,100000,1,3,2,4,5,6,7,100001],0,9))