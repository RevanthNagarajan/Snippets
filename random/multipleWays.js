function calculateWays (n,map={}) {
    if(map[n]) return map[n];
    if(n===0) return 0;
    if(n===1) return 1;
    if(n===2) return 2;
    map[n] = calculateWays(n-1,map)+calculateWays(n-2,map);
    return map[n];
}

console.log(calculateWays(4))
console.log(calculateWays(5))
console.log(calculateWays(6))

console.log(calculateWays(7))

console.log(calculateWays(8))
console.log(calculateWays(50))


function calculateWays135 (n,map={}) {
    if(map[n]) return map[n];
    if(n<=0) return 0;
    if(n===1) return 1;
    if(n===3) return 2;
    if(n===5) return 5;
    map[n] = calculateWays135(n-1,map)+calculateWays135(n-3,map)+calculateWays135(n-5,map);
    return map[n];
}

console.log(calculateWays135(4))
console.log(calculateWays135(5))
console.log(calculateWays135(6))

console.log(calculateWays135(7))

console.log(calculateWays135(8))
console.log(calculateWays135(50))