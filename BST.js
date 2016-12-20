class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
  setLeft(node){
    this.left = node;
  }
  getLeft(){
    return this.left;
  }
  setRight(node){
    this.right = node;
  }
  getRight(){
    return this.right;
  }
  setValue(val){
    this.value = val;
  }
  getValue(){
    return this.value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = new Node(null);
    this.


  }
}
