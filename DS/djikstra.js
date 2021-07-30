let V = 9;
function minDistance(dist,sptSet)
{
     
    // Initialize min value
    let min = Number.MAX_VALUE;
    let min_index = -1;
     
    for(let v = 0; v < V; v++)
    {
        if (sptSet[v] == false && dist[v] <= min)
        {
            min = dist[v];
            min_index = v;
        }
    }
    console.log("0spt",sptSet.toString(), "minindex ",min_index, "dist ",dist.toString())
    return min_index;
}
function printSolution(dist)
{
    console.log("Vertex \t\t Distance from Source<br>");
    for(let i = 0; i < V; i++)
    {
        console.log(i + " \t\t " +
                 dist[i]);
    }
}
function dijkstra(graph, src)
{
    let dist = new Array(V);
    let sptSet = new Array(V);
    for(let i = 0; i < V; i++)
    {
        dist[i] = Number.MAX_VALUE;
        sptSet[i] = false;
    }
    dist[src] = 0;
    for(let count = 0; count < V - 1; count++)
    {
        let u = minDistance(dist, sptSet);
        sptSet[u] = true;
        for(let v = 0; v < V; v++)
        {   
            if (!sptSet[v] && graph[u][v] != 0 &&
                   dist[u] != Number.MAX_VALUE &&
                   dist[u] + graph[u][v] < dist[v])
            {
                dist[v] = dist[u] + graph[u][v];
                console.log(dist[u]," ",v," ",dist[v]," ", graph[u].toString())
            }
        }
    }
     
    // Print the constructed distance array
    printSolution(dist);
}
 
// Driver code
let graph = [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
              [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
              [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
              [ 0, 0, 7, 0, 9, 14, 0, 0, 0],
              [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
              [ 0, 0, 4, 14, 10, 0, 2, 0, 0],
              [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
              [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
              [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ] ]
dijkstra(graph, 0);

const findClosest = (distanceSet,consideredSet,len) => {
    let min = Number.MAX_VALUE;
    let minIndex = -1;

    for(let i=0;i<len;i++) {
        if(consideredSet[i]==false &&  distanceSet[i]<= min) {
            min = distanceSet[i];
            minIndex = i;
        }
    }
    console.log("1spt",consideredSet.toString(), "minindex ",minIndex, "dist ",distanceSet.toString())
    return minIndex;
}


function dijkstra2 (graph,src) {
    let len = graph.length;
    let distanceSet = new Array(len);
    let consideredSet = new Array(len);

    graph.forEach((e,i) => {
        distanceSet[i] = Number.MAX_VALUE;
        consideredSet[i] = false;
    });

    distanceSet[src] = 0;

    for(let i=0; i<len-1; i++) {
        let nxt = findClosest(distanceSet,consideredSet,len);
        consideredSet[nxt] = true;
        for(let j=0; j<len; j++) {
            if( !consideredSet[j] && graph[nxt][j]!=0 && distanceSet[nxt] != Number.MAX_VALUE  && (distanceSet[nxt] + graph[nxt][j])< distanceSet[j]) {
                distanceSet[j] = distanceSet[nxt] + graph[nxt][j]
                console.log(distanceSet[nxt]," ",j," ",distanceSet[j]," ", graph[nxt].toString())
            }
        }
    }
    for(let i=0; i<len; i++) { 
        console.log(`${src} to ${i} takes ${distanceSet[i]}`) 
    }

}

dijkstra2(graph,0)

/*
    1. create 2 sets. one for tracking distances (initially let all be infinite as we dont know if they can be reached), another for tracking if the node is visited (false initially since all nodes are not visited yet)
    2. set distance of src to src as 0 as no distance is required
    3. find the node that is of closest to current element that is not visited. (repeat through distance set to find which is unvisited and value is less)
    4. use the closest node and find if there is any path from that element to elements that are not visited if that path is shorter. mark the closest as visited
    5. repeat to all elements except the last since it doesnt have any after that
*/