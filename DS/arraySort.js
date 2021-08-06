/****************** QUICK SORT *****************/

function partition(arr,l,r) {
    let pivot = arr[r];
    let pivotIndex = l;
    for(let i=l; i<r;i++){
        if(arr[i]<pivot) {
           [arr[i],arr[pivotIndex]] = [arr[pivotIndex],arr[i]];
           pivotIndex++;
        }
    }
    [arr[pivotIndex],arr[r]] = [arr[r],arr[pivotIndex]];
    return pivotIndex;
}

function quickSort(arr,l,r) {
    if (l >= r) {return}
    let pointer = partition(arr,l,r);
    quickSort(arr,l,pointer-1);
    quickSort(arr,pointer+1,r);
    return arr;
}


console.log(quickSort([82,21,47,83,37,19,94,32,41,76,62,8],0,11))
console.log(quickSort([2147483647,100000,1,3,2,4,5,6,7,100001],0,9))

/***************** INSERTION SORT *****************/

function insertionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = inputArr[i];
        // The last element of our sorted subarray
        let j = i-1;
        console.log(j,inputArr[j],current,i,inputArr.toString())
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j+1] = inputArr[j];
            j--;
        }
        inputArr[j+1] = current;
    }
    return inputArr;
}
console.log(insertionSort([82,21,47,83,37,19,94,32,41,76,62,8],0,11))
console.log(insertionSort([2147483647,100000,1,3,2,4,5,6,7,100001],0,9))

/****************** MERGE SORT *****************/

const merge = (left,right) => {
    let merged = [];
    while(left.length && right.length) {
        merged.push(left[0] < right[0] ? left.shift() : right.shift())
    }
    while(left.length) {
        merged.push(left.shift())
    }
    while(right.length) {
        merged.push(right.shift())
    }
    return merged
}

const mergeSort = (input) => {
    if(input.length<2) return input
    const half = Math.floor(input.length/2);
    const left = mergeSort(input.slice(0,half));
    const right = mergeSort(input.slice(half,input.length));
    return merge(left,right);
}

console.log(mergeSort([82,21,47,83,37,19,94,32,41,76,62,8],0,11))
console.log(mergeSort([2147483647,100000,1,3,2,4,5,6,7,100001],0,9))