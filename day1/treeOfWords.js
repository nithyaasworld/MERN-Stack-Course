// https://gist.github.com/McLarenCollege/49e2725953fa8abe2500a5d790fd6e8f
function treeOfWords(inputStr){
    let treeInLevelOrder = [inputStr];
    for (let i = 0; i < treeInLevelOrder.length; i++){
        if(treeInLevelOrder[i] === null) continue;
        if (treeInLevelOrder[i].length > 1) {
            let left = treeInLevelOrder[i].slice(0, treeInLevelOrder[i].length / 2);
            let right = treeInLevelOrder[i].slice(treeInLevelOrder[i].length / 2);
            treeInLevelOrder.push(left);
            treeInLevelOrder.push(right);
        }else {
            treeInLevelOrder.push(null);
            treeInLevelOrder.push(null);
        }
    }
    let binaryTree = { value: treeInLevelOrder[0], left: null, right: null };
    let currNode = binaryTree;
    let i = 0;
    buildTree(currNode, i)
    function buildTree(currNode, i) {
        if (treeInLevelOrder[(2 * i) + 1]) {
            currNode.left = { value: treeInLevelOrder[(2 * i) + 1], left: null, right: null };
            treeInLevelOrder[(2*i) + 1] = null;
            buildTree(currNode.left, (2*i) + 1);
        }
        if (treeInLevelOrder[(2 * i) + 2]) {
            currNode.right = { value: treeInLevelOrder[(2 * i) + 2], left: null, right: null };
            treeInLevelOrder[(2*i) + 2] = null;
            buildTree(currNode.right, (2*i) + 2);
        }
    }
    return(binaryTree);
}

console.log(treeOfWords("hello"));
console.log(treeOfWords("helo"));