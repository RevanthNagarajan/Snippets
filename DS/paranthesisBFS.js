let input = "(((a())))";

function isBalanced(x) { //wrong - use stack
    let c = 0;
    x = [...x];
    x.forEach(e => {
        if(e==='(') c++
        else if(e===')') c--
    });
    return c ===0 ? true : false;
}

function BFS(input) {
    let ans;
    let visited = {};
    let Q = [input];
    let found = false;
    while(Q.length) {
        let str = Q.shift();
        if(visited[str]) continue;
        if(isBalanced(str)) found = true;
        visited[str] = true;
        if(found) return str
        for(let i=0; i<str.length; i++) {
            if(str[i]==='(' || str[i] ===')') Q.push(str.substring(0,i-1)+str.substring(i,str.length))
        }
    }
}



console.log(BFS(input));