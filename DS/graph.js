const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

let airports = new Set();
let graph = new Map();

routes.flat(1).forEach(city => airports.add(city));
airports.forEach(node => graph.set(node,[]))
routes.forEach(con=>{
    graph.get(con[0]).push(con[1]);
    graph.get(con[1]).push(con[0]);
})

let bfsFound = false;
//BFS to find if theres a route to destination from src
const BFS = (src,des) => {
    if(!dfsFound) {
        let tracker = new Set();
        let queue = [src];
        while(queue.length){
            for(const dest of graph.get(queue.shift())){
                console.log(!tracker.has(dest) ? dest : "" )
                if(dest === des) {
                    console.log("Found by BFS")
                } else {
                    if(!tracker.has(dest)){
                        tracker.add(dest);
                        queue.push(dest);
                    }
                }
            }
        }
    } else {
        return;
    }
}

let dfsFound = false;
//DFS to find if theres a route to destination from src
const DFS = (src,des, tracker = new Set()) => {
    if(!dfsFound) {
        tracker.add(src);
        for(const dest of graph.get(src)) {
            console.log(!tracker.has(dest) ? dest : "")
            if(dest === des){
                console.log("Found by DFS");
                dfsFound = true;
            } else {
                if(!tracker.has(dest)){
                    DFS(dest,des,tracker);
                }
            }
        }
    } else {
        return
    }
}

const BFS2 = (src,des) => {
    let tracker = new Set();
    let queue = [src];
    while(queue.length) {
        src = queue.shift();
        for(const dest of graph.get(src)) {
            if(dest === des){
                console.log("Found by BFS2");
            }
            if(!tracker.has(dest)) {
                tracker.add(dest)
                queue.unshift(dest)
            }
        }
    }
}

const DFS2 = (src,des) => {
    let tracker = new Set();
    let stack = [src];
    while(stack.length) {
        src = stack.pop();
        if(!tracker.has(src)) {
            tracker.add(src);
            for(const dest of graph.get(src)) {
                if(dest === des){
                    console.log("Found by DFS2");
                } else {
                    stack.push(dest);
                }
            }
        }
    }
}
DFS('PHX','BKK')
console.log("---------")
BFS2('PHX','BKK')
console.log("---------")
DFS('PHX','BKK')
console.log("---------")
DFS2('PHX','BKK')

//https://codeburst.io/implementing-dfs-and-bfs-using-javascript-5034f3cee9a1