class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  isEmpty(){
    return this.root === null;
  }

  insert(value){
    let node = new Node(value);
    if(this.isEmpty()){
      this.root = node;
    }else{
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node){
    if(root.value > node.value){
      if(root.left === null){
        root.left = node;
      }else{
        this.insertNode(root.left, node);
      }
    }else{
      if(root.right === null){
        root.right = node;
      }else{
        this.insertNode(root.right, node);
      }
    }
  }

  search(root, value){
    if(!root){
      return false;
    }else{
      if(root.value === value){
        return true;
      }else if(root.value > value){
        return this.search(root.left, value);
      }else{
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root){
    if(root){
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root){
    if(!root){
      return [];
    }

    return [...this.inOrder(root.left), root.value, ...this.inOrder(root.right)]
  }

  postOrder(root){
    if(root){
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder(){
    const queue = [this.root];

    while(queue.length){
      let curr = queue.shift();
      console.log(curr.value);

      if(curr.left){
        queue.push(curr.left);
      }

      if(curr.right){
        queue.push(curr.right);
      }
    }
  }

  min(root){
    if(!root.left){
      return root.value;
    }else{
      return this.min(root.left);
    }
  }

  max(root){
    if(!root.right){
      return root.value;
    }else{
      return this.max(root.right);
    }
  }

  delete(value){
    this.root = this.deleteNode(this.root, value)
  }

  deleteNode(root, value){
    if(root === null){
      return root;
    }

    if(root.value > value){
      root.left = this.deleteNode(root.left, value);
    }else if(root.value < value){
      root.right = this.deleteNode(root.right, value);
    }else{
      if(!root.left && !root.right){
        return null;
      }

      if(!root.left){
        return root.right;
      }else if(!root.right){
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value); // Corrected this line
    }

    return root;  
  }

  isBST() {
    const inorderTraversal = this.inOrder(this.root);
    for (let i = 1; i < inorderTraversal.length; i++) {
        if (inorderTraversal[i] <= inorderTraversal[i - 1]) {
            return false;
        }
    }
    return true;
  }

  getheight(root=this.root){
    if(root==null){
      return 0
    }
    const leftheight=this.getheight(root.left)
    const rightheight=this.getheight(root.right)
    return Math.max(leftheight,rightheight)+1
  }


}

let bst = new BinarySearchTree();

bst.insert(5);
bst.insert(7);
bst.insert(10);
bst.insert(6);
bst.insert(4);
bst.insert(3);

console.log("Searched Value is", bst.search(bst.root, 50));

console.log("Pre Order: ");
bst.preOrder(bst.root);

console.log("In Order: ");
bst.inOrder(bst.root);

console.log("Post Order: ");
bst.postOrder(bst.root);

console.log("Level Order: ");
bst.levelOrder();

bst.delete(3);

console.log("After deleting 3:");
bst.levelOrder();

console.log("Minimum: ", bst.min(bst.root));
console.log("Maximum: ", bst.max(bst.root));

console.log(bst.isBST());
console.log(bst.getheight());
