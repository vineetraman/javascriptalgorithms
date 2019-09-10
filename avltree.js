class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        if (node === null || typeof (node) === undefined) {
            return -1;
        } else {
            return (Math.max(this.getHeight(node.right), this.getHeight(node.left)) + 1);
        }
    }

    getBalanceFactor(node) {
        return this.getHeight(node.right) - this.getHeight(node.left);
    }

    insert(data) {
        var node = new Node(data);
        if (!this.root) {
            this.root = node;
        } else {
            this.root = this._insertnode(this.root, node);
        }
        return node;
    }

    _insertnode(root, node) {
        if (!root) {
            root = node;
        } else {
            if (node.data < root.data) {
                root.left = this._insertnode(root.left, node);
                if (this.getBalanceFactor(root) < -1) {
                    if (node.data > root.left.data) {
                        root = this.leftrightrotate(root);
                    } else {
                        root = this.rightrotate(root);
                    }
                }
            } else {
                root.right = this._insertnode(root.right, node);
                if (this.getBalanceFactor(root) > 1) {
                    if (node.data < root.right.data) {
                        root = this.rightleftrotate(root);
                    } else {
                        root = this.leftrotate(root);
                    }
                }
            }
        }
        return root;
    }

    find(val) {
        if (!this.root) {
            return null;
        }
        if (val === this.root.data) {
            return this.root;
        } else if (val < this.root.data) {
            return this._find(this.root.left, val);
        } else {
            return this._find(this.root.right, val);
        }
    }

    _find(node, val) {
        if (!node) {
            return "doesn't exist";
        }
        if (val === node.data) {
            return node;
        } else if (val < node.data) {
            return this._find(node.left, val);
        } else {
            return this._find(node.right, val);
        }
    }

    traverse() {
        this._traverse(this.root);
    }

    _traverse(node) {
        if (node) {
            if (node.left) {
                this._traverse(node.left);
            }
            console.log(node.data);
            if (node.right) {
                this._traverse(node.right);
            }
        }
    }

    delete(data) {
        this.root = this._delete(this.root, data);
    }

    _delete(node, data) {
        if (!node) {
            return null;
        }
        if (data === node.data) {
            var replacement = this._deletenode(node);
            if(replacement){
                node.data =  replacement.data;
            }else{
                node = null;
            }
            return node;
        }
        else if (data < node.data) {
            node.left = this._delete(node.left, data);
            if (this.getBalanceFactor(node) > 1) {
                // if (data < node.right.data) {        //to check
                //     node = this.rightleftrotate(node);
                // } else {
                    node = this.leftrotate(node);
                //}
            }
        } else if (data > node.data) {
            node.right = this._delete(node.right, data);
            if (this.getBalanceFactor(node) < -1) {
                // if (data > node.left.data) {     //to check
                //     node = this.leftrightrotate(node);
                // } else {
                    node = this.rightrotate(node);
                //}
            }
        } else {
            return node;
        }
        return node;
    }

    _deletenode(node) {
        if (!node.left && !node.right) {
            return null;
        } else if (!node.left && node.right) {
            return node.right;
        } else if (node.left && !node.right) {
            return node.left;
        } else {
            var replacement = this._findminnode(node.right);
            this._deletenode(replacement);
            return replacement;
        }
    }

    getParent(node) {

    }

    _findminnode(root) {
        if (!root) {
            return null;
        }
        if (!root.left) {
            return root;
        }
        return this._findminnode(root.left);
    }

    //when tree gets imbalance if the node is added as right child to the root->right node
    leftrotate(root) {
        var temp = root.right;
        root.right = temp.left;
        temp.left = root;
        return temp;
    }

    //when tree gets imbalance if the node is added as left child to the root->left node
    rightrotate(root) {
        var temp = root.left;
        root.left = temp.right;
        temp.right = root;
        return temp;
    }

    /*when tree gets imbalance if the node is added as right child to the root->left node, 
    first left rotation taking root.left as root and then right rotation taking root as root*/
    leftrightrotate(root) {
        root.left = this.leftrotate(root.left);
        return this.rightrotate(root);
    }

    /*when tree gets imbalance if the node is added as left child to the root.right node, 
    first right rotation taking root.right as root and then left rotation taking root as root*/
    rightleftrotate(root) {
        root.right = this.rightrotate(root.right);
        return this.leftrotate(root);
    }

    breadthfirsttraverse(){
        var traversearray = [this.root];
        while(traversearray.length > 0){
            var temp = traversearray.shift();
            if(temp){
                if(temp.left){
                    traversearray.push(temp.left);
                }
                if(temp.right){
                    traversearray.push(temp.right);
                }
                console.log(temp.data);
            }
        }
    }
}
function executeavltree() {
    var a = new AVLTree();
    a.insert(10);
    console.log(a);
    a.insert(8);
    console.log(a);
    a.insert(6);
    console.log(a);
    a.insert(4);
    console.log(a);
    // a.insert(5);
    // console.log(a);
    a.insert(11);
    console.log(a);
    // a.insert(15);
    // console.log(a);
    // console.log(a.find(10));
    // a.traverse();
    return a;
}