class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }else{
            let currentNode = this.root
            while(true){
                if(value < currentNode.value){
                    // Left
                    if(!currentNode.left){
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                }else{
                    // Right
                    if(!currentNode.right){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }
    lookup(value){
        if(!this.root){
            return false
        }
        let currentNode = this.root
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left
            }else if(value > currentNode.value){
                currentNode = currentNode.right
            }else{
                return currentNode
            }
        }
        return false
    }
    remove(value){
        if(!this.root){
            return false
        }
        let currentNode = this.root
        let parentNode = null
        while(currentNode){
            if(value > currentNode.value){
                parentNode = currentNode
                currentNode = currentNode.right
            }else if(value < currentNode.value){
                parentNode = currentNode
                currentNode = currentNode.left
            }else if(value === currentNode.value){
                // Got a match

                // Option 1 - No right child
                if (currentNode.right === null){
                    if(parentNode === null){
                        this.root = currentNode.left
                    }else{
                        if(currentNode.value > parentNode.value){
                            parentNode.right = currentNode.left
                        }else if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.left
                        }
                    }
                    // Option 2 - Right child which doesn't have a left child
                }else if(currentNode.right.left === null){
                    currentNode.right.left = currentNode.left
                    if(parentNode === null){
                        this.root = currentNode.right
                    }else{
                        if(currentNode.value > parentNode.value){
                            parentNode.right = currentNode.right
                        }else if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.right
                        }
                    }
                    // Option 3 - Right child which has a left child
                }else{
                    // Getting leftmost child of right child
                    let leftmost = currentNode.right
                    let leftmostParent = currentNode
                    while(leftmost.left){
                        leftmostParent = leftmost
                        leftmost = leftmost.left
                    }
                    // Make leftmost right subtree be the left child of leftmost parent
                    leftmostParent.left = leftmost.right
                    // Make leftmost left child be the current node's left child
                    // Make leftmost right child be the current node's right child
                    leftmost.left = currentNode.left
                    leftmost.right = currentNode.right

                    if(parentNode === null){
                        this.root = leftmost
                    }else{
                        if(currentNode.value > parentNode.value){
                            parentNode.right = leftmost
                        }else if(currentNode.value < parentNode.value){
                            parentNode.left = leftmost
                        }
                    }
                }
                return true
            }
        }
    }
    breadthFirstSearch(){
        let currentNode = this.root
        const list = []
        const queue = []
        queue.push(currentNode)
        while(queue.length > 0){
            currentNode = queue.shift()
            list.push(currentNode.value)
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return list
    }
    breadthFirstSearchR(queue,list){
        if(!queue.length){
            return list
        }
        let currentNode = queue.shift()
        list.push(currentNode.value)
        if(currentNode.left){
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right)
        }
        return this.breadthFirstSearchR(queue,list)
    }
}

// Tree
//     9
//  4     20
//1  6  15  170
const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.breadthFirstSearch())
console.log(tree.breadthFirstSearchR([tree.root],[]))

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}