class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.data = value;
    }
}
     
let root;

/**
            ceo
        /       \
    svp1         svp2
    /   \          /\
vp1     sm1     sm2  vp2
        / \             |\
        m2 tl2         m1 tl1
 */

function LCManager(p1,p2){
    if(!root) return "";
    let map = {};
    function dfs(node,p,par=null) {
        if(!node) {
            return; 
        }
        if(node.data===p) {
            map[p].found = true; 
            console.log("here",map[p].hierarchy)
            //if(par && par.left && par.right) map[p].hierarchy.pop(); 
            return;
        }
        else {
            if(!map[p]) {
                map[p] = { found : false, hierarchy : [node.data] }
            } else {
                map[p].hierarchy.push(node.data)
            }
            dfs(node.left,p,node);
            dfs(node.right,p,node);
        }
    }
    dfs(root,p1),dfs(root,p2);
    if(!map[p1].found || !map[p2].found) return "";
    let res;
    for(let i =0; i<map[p1].hierarchy.length && i<map[p2].hierarchy.length; i++ ) {
        if(map[p1].hierarchy[i]===map[p2].hierarchy[i]){
            res = map[p1].hierarchy[i];
        }
        if((i==map[p1].hierarchy.length-1 || i==map[p1].hierarchy.length-1) && map[p1].hierarchy[i]===map[p2].hierarchy[i] ) {
            res = map[p1].hierarchy[i]; 
            break; 
        }
        if(map[p1].hierarchy[i]!==map[p2].hierarchy[i] && map[p1].hierarchy[i]!==p2 && map[p2].hierarchy[i]!==p1){
            break;
        }
    }
    return res;
}

root = new Node("CEO");
root.left = new Node("SVP1");
root.right = new Node("SVP2");
root.left.left = new Node("VP1");
root.left.right = new Node("SM1");
root.left.right.left = new Node("M2");
root.left.right.right = new Node("TL2");
root.right.left = new Node("SM2");
root.right.right = new Node("VP2");
root.right.left.left = new Node("M1");
root.right.left.right = new Node("TL1");


console.log("                   LCA(VP1,TL2) = " + LCManager("VP1","TL2"));
console.log("                   LCA(M1,TL1) = " + LCManager("M1","TL1"));
console.log("                   LCA(SM2,TL1) = " + LCManager("SM2","TL1"));
console.log("                   LCA(SM1,M2) = " + LCManager("SM1","M2"));
