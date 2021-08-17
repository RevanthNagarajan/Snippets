//Brute force

var longestIncreasingPath = function(matrix) {
    if(matrix.length<2 && matrix[0].length<2) return 1
    if(!matrix) return 0
    let directions = [{dx :1, dy :0}, {dx : -1, dy :0}, {dx :0, dy :1}, {dx :0, dy :-1}];
    let adjList = {}; tracker = {};
    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[0].length;j++){
            let x = 0;
            while(x<4){
                let n = matrix[i+directions[x].dx] && matrix[i+directions[x].dx][j+directions[x].dy] ? (i+directions[x].dx)+""+(j+directions[x].dy)+""+matrix[i+directions[x].dx][j+directions[x].dy] : 0;
                if(adjList[i+""+j+""+matrix[i][j]+""]){
                    adjList[i+""+j+""+matrix[i][j]+""] = n ? [...adjList[i+""+j+""+matrix[i][j]+""],n] : [...adjList[i+""+j+""+matrix[i][j]+""]];
                    tracker[i+""+j+""+matrix[i][j]+""]
                                                                                                                   } else { 
                                                                                                                       adjList[i+""+j+""+matrix[i][j]+""] = n ? [n] : [];
                 tracker[i+""+j+""+matrix[i][j]+""] = 0;
                                                                                                                   }
                x++;
            }
        }
        
    }
    let count = 0;
    //BFS
    for(let y=0; y<Object.keys(adjList).length; y++){
        let vis = new Set();
        let queue = [Object.keys(adjList)[y]];
        while(queue.length) {
            let key = queue.shift()
            if(vis.has(key)) break;
            let len = adjList[key].length;
            for(let p=0; p<len; p++) {
                let b = adjList[key][p];
                if(parseInt(b[2]) > parseInt(key[2])){
                    if(tracker[b] && vis.has(b)) { console.log(key,b,tracker[key],tracker[b]); tracker[key]+=tracker[b]; break; }
                    count++;
                    queue.push(b);
                    tracker[key]++;
                } else { vis.add(adjList[key])}
            }
        }
    }

    let b = 0;
    Object.keys(tracker).forEach(z => { if(tracker[z]) b = Math.max(b,tracker[z]) })
    return [b,count]
};

console.log(longestIncreasingPath(
    [[9,9,4],[6,6,8],[2,1,1]]))
    let count = 0;
    var longestIncreasingPath = function(M) {
        let ylen = M.length, xlen = M[0].length, ans = 0,
            memo = Array.from({length: ylen}, el => new Uint16Array(xlen))
        const dfs = (y, x) => {
            count++;
            if (memo[y][x]) return memo[y][x]
            let val = M[y][x]
            memo[y][x] = 1 + Math.max(
                y < ylen - 1 && M[y+1][x] < val ? dfs(y+1,x) : 0,
                y > 0 && M[y-1][x] < val ? dfs(y-1,x) : 0,
                x < xlen - 1 && M[y][x+1] < val ? dfs(y,x+1) : 0,
                x > 0 && M[y][x-1] < val ? dfs(y,x-1) : 0)
            return memo[y][x]
        }
        for (let i = 0; i < ylen; i++)
            for (let j = 0; j < xlen; j++)
                ans = Math.max(ans, dfs(i, j))
        return ans+" "+count
    };

    console.log(longestIncreasingPath(
        [[9,9,4],[6,6,8],[2,1,1]]))