function bestSum(arr,target,memo={}) {
    if(memo[target]) return memo[target];
    if(target===0) return [];
    if(target<0) return null;
    let shortestCombo = null;
    for(let num of arr) {
        const rem = target-num;
        const remWays = bestSum(arr,rem,memo);
        if(remWays!=null) {
            const combo = [...remWays,num];
            if(shortestCombo==null||shortestCombo.length>combo.length) shortestCombo = combo;
            memo[target] = combo;
            //return memo[target];
        }
    }
    //memo[target] = null;
    return shortestCombo;
}




console.log(bestSum([1, 3, 10, 11, 14],17))

console.log(bestSum([5,3,4,7],7))
console.log(bestSum([1,2,5,25],100))