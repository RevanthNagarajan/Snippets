let input = [9, 4, 30, 21, 2, 93, 11, 42, 3];

//  +++++++++++++++++++++++++++++++++    Merge Sort  ++++++++++++++++++++++++++++++++++++ 

const merger = (left, right) => {
    let merged = [];
    let i = 0,j = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            merged.push(left[i]);
            i++; 
        }else {
            merged.push(right[j]);
            j++;
        }
    }
    return merged.concat(left.slice(i)).concat(right.slice(j));
}

const mergeSort = (input) => {
    if(input.length<2){
        return input;
    }
    const mid = Math.floor(input.length/2);
    const left = input.slice(0,mid);
    const right = input.slice(mid);
    return merger(mergeSort(left), mergeSort(right));
};

// The algorithm takes O(n/2 log n) comparisons to sort n items. In the worst case, it makes O(n log n) comparisons, though this behavior is rare.
// [ 9 ] [ 4 ]
// [ 30 ] [ 21 ]
// [ 4, 9 ] [ 21, 30 ]
// [ 2 ] [ 93 ]
// [ 42 ] [ 3 ]
// [ 11 ] [ 3, 42 ]
// [ 2, 93 ] [ 3, 11, 42 ]
// [ 4, 9, 21, 30 ] [ 2, 3, 11, 42, 93 ]



//  +++++++++++++++++++++++++++++++++    Quick Sort  ++++++++++++++++++++++++++++++++++++ 

const quickSort = (input) => {
    if(input.length<2) {
        return input;
    }
    let pivot = input[0];
    let left = [], right = [];
    input.forEach(el => {
        if(el<pivot){
            left.push(el);
        }
        if(el>pivot){
            right.push(el);
        }
    });
    return quickSort(left).concat(pivot,quickSort(right));
}
//  The algorithm takes O(n log n) comparisons to sort n items. In the worst case, it makes O(n2) comparisons, though this behavior is rare.
//  [ 9, 4, 30, 21, 2, 93, 11, 42, 3 ]
//  [ 4, 2, 3 ]
//  [ 2, 3 ]
//  [ 3 ]
//  [ 30, 21, 93, 11, 42 ]
//  [ 21, 11 ]
//  [ 11 ]
//  [ 93, 42 ]
//  [ 42 ]

//  +++++++++++++++++++++++++++++++++     Invoke     ++++++++++++++++++++++++++++++++++++ 

console.log("Merge Sort",mergeSort(input));
console.log("Quick Sort",quickSort(input));