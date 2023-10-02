let input = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// 7 4 1
// 8 5 2
// 9 6 3

let print2DArrayAsMatrix = ((inArr)=>{
    let matrix = "";
    inArr.forEach((val)=>{
        matrix = matrix+"\n"+JSON.stringify(val);
    })
    return matrix;
})


console.log("000",print2DArrayAsMatrix(input));

let rotor = ((val) => {
    let n9Tdegree = {};
    val.forEach((row,ind)=>{
        row.forEach((cell,x)=>{
            if(!n9Tdegree[x]){
                n9Tdegree[x] = [];
                n9Tdegree[x].unshift(cell);
            } else {
                n9Tdegree[x].unshift(cell);
            }
        });
    });
    return n9Tdegree;
});

let rotate90Degree = ((x)=>{
    let rotatedObj = rotor(x);
    rotatedArr = [];
    Object.keys(rotatedObj).forEach((val)=>{
        rotatedArr.push(rotatedObj[val]);
    })

    return(rotatedArr);
});


let ninety = rotate90Degree(input);
let oneeighty = rotate90Degree(ninety);
let twoseventy = rotate90Degree(oneeighty);
let threeSixty = rotate90Degree(twoseventy);

console.log("090",print2DArrayAsMatrix(ninety));
console.log("180",print2DArrayAsMatrix(oneeighty));
console.log("270",print2DArrayAsMatrix(twoseventy));
console.log("360",print2DArrayAsMatrix(threeSixty));
