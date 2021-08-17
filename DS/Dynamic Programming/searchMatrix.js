/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let vis = new Set();
    let q = [{a:0,b:0}];
    let gdir = [{a : 0, b : 1},{ a : 1, b : 0 },{ a : 1, b : 1 }];
    let ldir = [{a : 0, b : -1},{ a : -1, b : 0 }];
    let found = false;
    let src = q[0];
    while(q.length) {
        src = q.shift();
        if(src.b>=0 && src.a>=0 && src.b<matrix[0].length && src.a<matrix.length) {
            if(vis.has(src)) continue;
            vis.add(src)
            if(target === matrix[src.a][src.b]) {
                found = true;
                q = [];
            }
            if(target>matrix[src.a][src.b]) {
                gdir.forEach(x=>{
                    q.push({a : src.a+x.a, b : src.b+x.b})
                })
            }
            if(target<matrix[src.a][src.b]) {
                ldir.forEach(x=>{
                    q.push({a : src.a+x.a, b : src.b+x.b})
                })
            }
        } else {
            vis.add(src);
        }
    }
    return found;
};

console.log(searchMatrix([[1,1]],2));
function searchMatrix2 (matrix,target) {
    let f = false;
    vis = new Set();
    let ms = matrix.length-1, ns = matrix[0].length-1;
    function dpSearch (m, n, vis = new Set()) {
        console.log(m,n,vis)
        if(!f && !vis.has(m+','+n)) {
            if( m<0 || n<0 || m>ms || n>ns) { vis.add(m+','+n); return }
            if(matrix[m][n]!==target) { vis.add(m+','+n); (dpSearch(m-1,n,vis),dpSearch(m,n-1,vis),dpSearch(m-1,n-1,vis)); return;} 
            else { f = true; return;}
        }
    }
    dpSearch(ms,ns,vis);
    return f;
}
console.log(searchMatrix2([[1,1,2,4]],2));

var searchMatrixpart2 = function(matrix, target) {
    let f = false;
    let ms = matrix.length-1, ns = matrix[0].length-1;
    let count = 0;
    function dpSearch (m,n, memo = {}) {
        console.log(matrix[m] ? matrix[m][n] : '')
        if(!f) {
            if(((m+','+n) in memo)) return;
            if(matrix[m][n]===target) { f=true; return }
            else { 
                memo[m+','+n] = false; 
                count++;
                if(matrix[m][n]>target) {
                    if(matrix[m-1] && matrix[m-1][n] && matrix[m-1][n]>=target) dpSearch(m-1,n,memo)
                    if(matrix[m] && matrix[m][n-1] && matrix[m][n-1]>=target) dpSearch(m,n-1,memo);
                }
            }
        }
    }
    dpSearch(ms,ns);
    console.log(count)
    return f;    
};

console.log(searchMatrixpart2([[4,7,12,17],[4,9,17,21],[4,12,17,21]],5))