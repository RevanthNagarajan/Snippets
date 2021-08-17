var numIslands = function(parentGrid) {
    // start with 1st element that has land
    // if there is no one return 0
    // BFS and find all left,right and bottom nodes that are lands. if all of them ends up to have 0 at some point finish that as one count.
    // search further to find if there is any land after that and proceed the same.
    let island = 0;
    function gridTraverser (grid, vis = new Set()) {
        let s;
        let dirs = [{a:0,b:1},{a:1,b:0},{a:0,b:-1},{a:-1,b:0}];
        for(let ind=0; ind<grid.length; ind++) {
            if(grid[ind].indexOf("1")!=-1) { s = {a : ind, b : grid[ind].indexOf("1")}; break; }
        }
        if(!s) return;
        //BFS
        let q = [s];
        while(q.length) {
            for(let i=0; i<q.length; i++) {
                let src = q.shift();
                if(vis.has(src.a+","+src.b)) { break; }
                vis.add(src.a+","+src.b);
                grid[src.a][src.b] = "0";
                for(dir of dirs) {
                    let r = src.a+dir.a, c = src.b+dir.b;
                    if(r>=0 && c>=0 && r<grid.length && c<grid[0].length && grid[r][c] === "1") {
                        q.push({a:r,b:c});
                    }
                }
            }
        }
        island++;
        gridTraverser(grid,vis);
    }
    gridTraverser(parentGrid);
    return island;
};


console.log(numIslands([["1","0","1","1","1"],
                        ["1","0","1","0","1"],
                        ["1","1","1","0","1"]]))