let routeFinder = (m,n,memo={}) => {
    let key = m+','+n;
    if(memo[key]) return memo[key];
    if(m===1 && n ===1) return 1;
    if(m===0 || n ===0) return 0;
    memo[key] = routeFinder(m,n-1,memo)+routeFinder(m-1,n,memo)
    return memo[key]
}

console.log(routeFinder(3,2))
console.log(routeFinder(5,5))
console.log(routeFinder(13,8))
console.log(routeFinder(6,16))