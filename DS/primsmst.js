class Graph {
    constructor (count) {
        this.graph = {};
        this.acheived = false;
    }

    get () {
        return this.graph
    }
    
    addRoute(...params) {
        this.graph[params[0]] = this.graph[params[0]] && this.graph[params[0]].length ? [...this.graph[params[0]],{ place : params[1], distance : params[2]}] : [{ place : params[1], distance : params[2]}];
        //this.graph[params[1]] = this.graph[params[1]] && this.graph[params[1]].length ? [...this.graph[params[1]],{ place : params[0], distance : params[2]}] : [{ place : params[0], distance : params[2]}];
    }

    findClosest(disFromOrigin,visited) {
        let min = 999;
        let minIndex = -1;
        for( let i =0; i< Object.keys(this.graph).length; i++ ) {
            if(!visited[i] && disFromOrigin[i]<=min && disFromOrigin[i]!=999) {
                min = disFromOrigin[i];
                minIndex = i;
            }
        }
        return {min,minIndex};
    }

    mst() {
        let len = Object.keys(this.graph).length;
        let disFromOrigin =  [];
        let visited = []
        for(let x =0; x<len; x++) {
            disFromOrigin.push(999);
            visited.push(false);
        }
        let final = [];
        let mstree = [];
        disFromOrigin[0] = 0;
        let j=0;
        while(visited.includes(false) && j<len) {
            let currentNodes = []
            visited.forEach((x,ind)=> {if(x) currentNodes.push(ind)})
            let closest = this.findClosest(disFromOrigin,visited);
            visited[closest.minIndex] = true;
            final.push(closest) //djikstras shortest path from first index
            for(let i=0; i<len; i++) {
                let val = i==closest.minIndex ? 0 : this.graph[closest.minIndex][this.graph[closest.minIndex].findIndex(item => item.place === i)];
                val = val ? val.distance : undefined;
                if(!visited[i] && disFromOrigin[closest.minIndex]!=999  && (disFromOrigin[closest.minIndex] + val < disFromOrigin[i]) && val){
                    disFromOrigin[i] = disFromOrigin[closest.minIndex] + val;
                    mstree.push({from : closest.minIndex,to : i, distance : val });
                }
            }
            j++;
        }
        return (mstree);
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

console.log((graph.get()))
console.log(graph.mst());