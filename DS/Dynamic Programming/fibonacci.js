//wodp

function fibwodp (n){
    if(n<=2) return 1;
    return fibwodp(n-1) + fibwodp(n-2);
}

console.log(fibwodp(5))
console.log(fibwodp(6))
console.log(fibwodp(7))
//console.log(fibwodp(50))

function fibwdp (n, memo = {}){
    if(memo[n]) return memo[n];
    if(n<=2) return 1;
    memo[n] = fibwdp(n-1,memo) + fibwdp(n-2,memo);
    return memo[n];
}

console.log(fibwdp(5))
console.log(fibwdp(6))
console.log(fibwdp(7))
console.log(fibwdp(50))