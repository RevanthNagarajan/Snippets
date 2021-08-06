let sortLiLi = (root,val,n) => {
    let t = root.next;
    if(root.max === t.value){
        root.next = n;
        root.next.next = t;
    } else {
        while(t.value<root.max){
            if(t.value<val && t.next.value!==root.max) t = t.next;
            if((t.value<val && t.next.value===root.max) || t.value>val) {
                let temp = t.next;
                t.next = n;
                t.next.next = temp;
                break;
            }
        }
    }
}
class BPlusTree {
    constructor(){
        this.head = this.node();
    }

    node (v) {
        return { value : v ? v : null, max : 0, min : 0, left : null, right : null, next : null }
    }

    add (val) {
        let root = this.head;
        let n = this.node(val);
        let c = 0;
        n.value = val;
        function adder (root) {
            if(root.value===null) { root.value = val }
            else {
                if(c==0){
                    if(val<root.value && !root.left) n.min = val, root.left = n;
                    else if(val>root.value && !root.right) n.min = val, root.right = n;
                    else if(val<root.value && root.left)  root = root.left, c++, adder(root);
                    else if(val>root.value && root.right)  root = root.right, c++, adder(root);
                    else return;
                } else {
                    if(root.next==null && val>root.value) root.max = val, root.next = n;
                    else if(val<root.value && !root.left) n.min = val, root.left = n;
                    else if(val<root.value && root.left) root = root.left, c++, adder(root)
                    else if(root.next && val>root.max && !root.right) n.min = val, root.right = n;
                    else if(root.next && val>root.max && root.right) root = root.right, c++, adder(root)
                    else if(val>root.value && val<root.max) sortLiLi(root,val,n)
                    else return;
                }
            }
        }
        adder(root);
    }

    fetch() {
        return this.head;
    }

    order(type) {
        let arr = []
        if(!this.head.value) return null;
        let root = this.head;
        if(type==='asc'){
            function traverseInOrder(node) {       
                node.left && traverseInOrder(node.left);
                arr.push(node.value);
                node.next && traverseInOrder(node.next)
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(root);
         } else if(type==='desc') {
            function traverseDescOrder(node) {       
                node.right && traverseDescOrder(node.right);
                node.next && traverseDescOrder(node.next)
                arr.push(node.value);
                node.left && traverseDescOrder(node.left);
            }
            traverseDescOrder(root);
        } else {
            function traversePreOrder(node) {  
                arr.push(node.value);     
                node.left && traversePreOrder(node.left);
                node.next && traversePreOrder(node.next)
                node.right && traversePreOrder(node.right);
            }
            traversePreOrder(root);
        }
        console.log(arr)
        return arr;
    }
}

let bPlusTree = new BPlusTree();
bPlusTree.add(69);
bPlusTree.add(50);
bPlusTree.add(80);
bPlusTree.add(60);
bPlusTree.add(19);
bPlusTree.add(58);
bPlusTree.add(65);
bPlusTree.add(30);
bPlusTree.add(59);
bPlusTree.add(70);
bPlusTree.add(81);
bPlusTree.add(90);
bPlusTree.add(93);
bPlusTree.add(92);
bPlusTree.add(94);
bPlusTree.add(67);
bPlusTree.order('asc')
bPlusTree.order('desc')
bPlusTree.order('pre')
console.log(JSON.stringify(bPlusTree.fetch()))