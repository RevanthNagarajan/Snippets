class Graph {
    constructor (count) {
        this.graph = {};
        this.acheived = false;
    }
    
    addRoute(...params) {
        this.graph[params[0]] = this.graph[params[0]] && this.graph[params[0]].length ? [...this.graph[params[0]],{ place : params[1], distance : params[2]}] : [{ place : params[1], distance : params[2]}];
        this.graph[params[1]] = this.graph[params[1]] && this.graph[params[1]].length ? [...this.graph[params[1]],{ place : params[0], distance : params[2]}] : [{ place : params[0], distance : params[2]}];
    }

    getGraph() {
        return this.graph
    }

    pathMoreThanK (src,dis) {
        this.acheived = false;
        let tracker = new Set();
        tracker.add(src);
        return this.pathUtil(src,dis,tracker,false)
    }

    pathUtil (src,dis,tracker) {
        if(dis<1) return true;
        if(!this.acheived) {
            let currentNode = this.graph[src];
            for(let i=0; i<currentNode.length; i++) {
                let tempDistance = currentNode[i].distance;
                let currentPlace = currentNode[i].place;
                if(!tracker.has(currentPlace)){
                    
                    if(tempDistance>dis) {
                        console.log("SRC",src,"currentPlace",currentPlace,"tempDistance",tempDistance,"dis",dis,"tracker",tracker)
                        this.acheived = true;
                        return [true,tempDistance-dis]
                    }else { tracker.add(currentPlace);}
                    let result = this.pathUtil(currentPlace,dis-tempDistance,tracker);
                    if(result[0]) {
                        return result
                    }
                } else {
                    continue;
                }
                tracker.delete(currentPlace) //backtrack
            }
        }
        return [false];
    }
}

let graph = new Graph(9);
graph.addRoute(0, 1, 4);
graph.addRoute(0, 7, 8);
graph.addRoute(1, 2, 8);
graph.addRoute(1, 7, 11);
graph.addRoute(2, 3, 7);
graph.addRoute(2, 8, 2);
graph.addRoute(2, 5, 4);
graph.addRoute(3, 4, 9);
graph.addRoute(3, 5, 14);
graph.addRoute(4, 5, 10);
graph.addRoute(5, 6, 2);
graph.addRoute(6, 7, 1);
graph.addRoute(6, 8, 6);
graph.addRoute(7, 8, 7);

console.log(graph.getGraph())
let res = graph.pathMoreThanK(0,58);
if(res) {
    console.log("Yes",58+res[1]);
} else {
    console.log("No")
}