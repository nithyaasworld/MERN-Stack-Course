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
    // console.log(treeInLevelOrder);
    let binaryTree = { value: treeInLevelOrder[0], left: null, right: null };

    let currNode = binaryTree;
    let i = 0;
    buildTree(currNode, i)
    function buildTree(currNode, i) {
        if ((treeInLevelOrder[(2 * i) + 1] !== undefined) && (treeInLevelOrder[(2*i) + 1] !== null) ) {
            currNode.left = { value: treeInLevelOrder[(2 * i) + 1], left: null, right: null };
            // console.log('================================================');
            // console.log('Inside left');
            // console.log(' i is: ', i);
            // console.log('currNode.value is: ', currNode.value);
            // console.log('tree In Level Order is: ', treeInLevelOrder);
            treeInLevelOrder[(2*i) + 1] = null;
            // console.log('tree In Level Order after making null is : ', treeInLevelOrder);
            // console.log('================================================');
            // console.log('\n\n');
            buildTree(currNode.left, (2*i) + 1);
        }
        if ((treeInLevelOrder[(2 * i) + 2] !== undefined) && (treeInLevelOrder[(2 * i) + 2] !== null) ) {
            currNode.right = { value: treeInLevelOrder[(2 * i) + 2], left: null, right: null };
            // console.log('================================================');
            // console.log('Inside right');
            // console.log('currNode.value is: ', currNode.value);
            // console.log('tree In Level Order is: ', treeInLevelOrder);
            treeInLevelOrder[(2*i) + 2] = null;
            // console.log('tree In Level Order after making null is : ', treeInLevelOrder);
            // console.log('================================================\n\n');
            buildTree(currNode.right, (2*i) + 2);
        }
    }
    console.log(binaryTree);
    print(binaryTree);

    function print(tree) {     
        let queue = [tree];
        while (queue.length != 0) {
            let node = queue.shift();
            console.log(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
}

//treeOfWords("hello");
