class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insertAtHead(data) {
        let temp = new Node(data);
        temp.next = this.head;
        this.head = temp;
        return this;
    }
    getHead() {
        return this.head;
    }
}
class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.list = [];
        for (let i=0; i<vertices; i++) {
            let temp = new LinkedList();
            this.list.push(temp);
        }
    }
    addEdge(source, destination) {
        if (source < this.vertices && destination < this.vertices) {
            this.list[source].insertAtHead(destination);
        }
        return this;
    }

    get() {
        console.log("here",this.list)
        return this.list;
    }
}
const Colors = {
    WHITE: 'white', 
    GRAY: 'gray', 
    BLACK: 'black'
}
Object.freeze(Colors);
function isDeadlocked(g) {
    let color = [];
    for (let i=0; i<g.vertices; i++) {
        color[i] = Colors.WHITE;
    }
    for (let i=0; i<g.vertices; i++) {
        if (color[i] == Colors.WHITE) {
             if (detectCycle(g, i, color)) {
                 console.log("here")
                return true;
             }   
        }
    }
    return false;
};
function detectCycle(g, currentVertex, color) {
    color[currentVertex] = Colors.GRAY;
    let neighbor;
    let nextNode = g.list[currentVertex].getHead();
    while (nextNode !== null) {
        console.log("hre")
        neighbor = nextNode.data;
        if (color[neighbor] == Colors.GRAY) {
            return true;
        }
        if (color[neighbor] == Colors.WHITE && detectCycle(g, neighbor, color)) {
            color[currentVertex] = Colors.BLACK;
            return true;
        }
    }
    return false;
}
let g = new Graph(3);
g.addEdge(0,1);
g.addEdge(0,2);
console.log(g.get())
isDeadlocked(g);