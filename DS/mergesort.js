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

console.log(mergeSort([82,21,47,83,37,19,94,32,41,76,62,8]))