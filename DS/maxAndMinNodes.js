let a = [[1, 6],[2, 7], [3, 8], [4,9], [2, 6]];

function dfs (input) {
    let master = {};
    let connections = {};
    for(let i=0; i<input.length; i++) {
        connections[input[i][0]] = 0; connections[input[i][1]] = 0;
        master[input[i][0]] = master[input[i][0]] ? [...master[input[i][0]],(input[i][1])] : [input[i][1]];
        master[input[i][1]] = master[input[i][1]] ? [...master[input[i][1]],(input[i][0])] : [input[i][0]];
    }
    //console.log(master,connections)
    
    for(let k=0; k<Object.keys(master).length;k++) {
        let vis = new Set();
        let stack = [parseInt(Object.keys(master)[k])]
        while(stack.length) {
            let src = stack.pop();
            if(vis.has(src)) continue;
            vis.add(src)
            master[src].forEach(e => {
                if(!vis.has(e) ) {
                    stack.push(e)
                }
            });
        }
        connections[k+1]+=vis.size;
    }
    let b = [];
    Object.keys(connections).forEach(z => { if(connections[z]) b.push(connections[z]) })
    b.sort()
    return [b[0],b[b.length-1]]
}

console.log(dfs(a))