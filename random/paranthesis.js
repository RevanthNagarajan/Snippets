
const map = { 0 : " ", 1 : ".," , 2 : "abc", 3 : "def", 4 : "ghi", 5 : "jkl", 6 : "mno", 7 :"pqrs" , 8 : "tuv", 9 :"wxyz" }

const  generateCombos = (nums) => {
    let len = inp.length;
    if(!inp) return []
    let res = [];
    function bfs (str,i) {
        if(i==len) res.push(str)
        else {
            let letters = map[inp[i]];
            for(let j = 0; j< letters.length; j++ ) {
                bfs(str+letters[j],i+1)
            }
        }
    }
    bfs("",0)
    return res
}

console.log(generateCombos("238"))





const generateParentheses = (n) => {
    if(n<1) return [];
    let res = []
    function dfs (brac,l,r) {
        if(l==n && r==n) res.push(brac)
        if(l!=n) dfs(brac+"(",l+1,r);
        if(l>r) dfs(brac+")",l,r+1);
    }
    dfs("",0,0)
    return res;
}

console.log(generateParentheses(4))  