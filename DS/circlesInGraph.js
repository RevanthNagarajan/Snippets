function findCircleNum2(M) {
    let visited = M.map(x=>false);
    let count = 0;
    for (let i = 0; i < M.length; i++) {
        let stack = [M[i][0]];
        while(stack.length){
            let x = stack.pop();
            if (visited[x] == false) {
                for (let j = 0; j < M.length; j++) {
                    if (M[i][j] == 1 && visited[j] == false) {
                        visited[j] = true;
                        stack.push(M[i[j]])
                        count++;
                    }
                }
                
            }
        }
    }
    return count;
}

console.log(findCircleNum2([[1,1,0],[1,1,0],[0,0,1]]))