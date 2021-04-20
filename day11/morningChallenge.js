//problem statement: https://gist.github.com/McLarenCollege/fb48824c42d10d5f328da5cf8a21e3d0
function levelOfTree(tree) {
    if (!tree.value) return [0];
    let arr = [];
    let queue = [tree];
    while (queue.length > 0) {
        let currQueue = queue.slice(0);
        arr.push(currQueue.length);
        queue = [];
        while (currQueue.length > 0) {
            let currNode = currQueue.shift();
            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
        }
    }
    return arr;
}
tree = {
    value: 14,
    left: {
        value: 10,
        right: {
            value: 12,
        },
        left:{
          value: 8,
        }
    },
    right: {
        value: 20,
        right: {
            value: 14,
        },
    }
};
levelOfTree(tree);
//ouput[1,2,3]