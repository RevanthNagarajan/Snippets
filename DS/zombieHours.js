
let zombieHours = (mat) => {
    let dir = [[0,1],[1,0],[0,-1],[-1,0]];
    let q = [];
    for(let i=0; i<mat.length; i++) {
        for(let j=0; j<mat[0].length; j++) {
            if(mat[i][j]===1) {
                q.push({a:i,b:j})
            }
        }
    }
    let count = -1;
    while(q.length) {
        for(let i=0; i<=q.length; i++) {
            let cur = q.shift();
            dir.forEach(x=>{
                let r = cur.a+x[0];
                let c = cur.b+x[1];
                if(r>=0 && c>=0 && mat[r,c]==0 && r<mat.length && c<mat[0].length) {
                    mat[r][c] = 1;
                    q.push[{a:r,b:c}];
                } 
            })
        }
        count++;
    }
    console.log(count)
}



zombieHours([   [0, 1, 1, 0, 1],
                [0, 1, 0, 1, 0],
                [0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0]]);