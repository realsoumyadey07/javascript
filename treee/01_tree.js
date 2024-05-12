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
}


const bst = new BST();
console.log(bst);