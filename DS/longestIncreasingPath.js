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
                queue.push(b);
                tracker[key]++;
            } else { vis.add(adjList[key])}
        }
    }
    }
    
    let b = [];
    Object.keys(tracker).forEach(z => { if(tracker[z]) b.push(tracker[z]) })
    b.sort()
    return [b[b.length-1]]
};

console.log(longestIncreasingPath(
    [[9,9,4],[6,6,8],[2,1,1]]))