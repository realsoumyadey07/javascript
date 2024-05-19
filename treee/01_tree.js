class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    isTreeEmpty(){
        return this.root === null;
    }
    makeTree(data){
        const newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode){
        if(root.value > newNode.value){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode);
            }
        }else if(root.value < newNode.value){
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode);
            }
        }
    }
    search(root, val){
        if(root===null){
            return false;
        }else if(root.value===val){
            return true;
        }else if(root.value>val){
            return this.search(root.left, val);
        }else if(root.value<val){
            return this.search(root.right, val);
        }
    }
}


const bst = new BST();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(30);
console.log(bst.search(bst.root, 10));
console.log(bst);