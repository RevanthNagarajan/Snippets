
const map = { 0 : " ", 1 : ".," , 2 : "abc", 3 : "def", 4 : "ghi", 5 : "jkl", 6 : "mno", 7 :"pqrs" , 8 : "tuv", 9 :"wxyz" }

const  generateCombos = (nums) => {
    const len = nums.length;
    let result = []
    if(len ===0) return result;
    
    function bfs (i,str) {
        if(i===len) { result.push(str); return; }
        else {
            let letters = map[nums[i]]
            for(let x=0; x<letters.length; x++) {
                bfs(i+1,str+letters[x])
            }
        }
    }
    
    bfs(0,"")
    return result;
}

console.log(generateCombos("238"))





const generateParentheses = (n) => {
    const result = [];
    function dfs (str, left, right) {
        if(left ===n && right ===n ) {
            result.push(str); 
            return;
        }
        if(left!==n) { dfs(str+"(",left+1,right)}
        if(left>right) { dfs(str+")",left,right+1)}
    };
    dfs("", 0, 0);
    return result;
}

console.log(generateParentheses(4))  