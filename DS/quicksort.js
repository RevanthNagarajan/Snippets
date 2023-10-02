function partition (input,left,right) {
    let p = Math.floor((left+right)/2);
    while(left<=right) {
        while(input[left]<input[p]) {
            left++;
        }
        while(input[right]>input[p]) {
            right--;
        }
        if(left<=right) {
            let temp = input[left];
            input[left] = input[right];
            input[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}

function quicksort (input,left,right) {
    if(input.length>1) {
        let pointer = partition(input,left,right)
        if(pointer-1 > left) {
            quicksort(input, left, pointer-1);
        } 
        if(pointer < right) {
            quicksort(input, pointer, right);
        }
    } else {
        return input;
    }
    return input
}

console.log(quicksort([82,21,47,83,37,19,94,32,41,76,62,8],0,11))