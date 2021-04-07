function convertToLinkedList(treeRoot) {
    if (!treeRoot) return treeRoot;
    if (!treeRoot.left && !treeRoot.right) {
        return { value: treeRoot.value, next: null };
    }
    let stack = [];
    let linkedList = {};
    let currLinkedList = linkedList;
    if (treeRoot) {
        stack.push(treeRoot);
        currLinkedList = { value: treeRoot.value, next: null };
    }
    
    while (stack.length > 0) {
        let currStack = stack.pop();
        currLinkedList.next = { value: currStack.value, next: null };
        currLinkedList = currLinkedList.next;
        if (currStack.right) {
            stack.push(currStack.right);
        }
        if (currStack.left) {
            stack.push(currStack.left);
        }
    }
    return linkedList;
}

let root = {
    value: 13,
    left: {
        value: 5,
        left: {
            value: 3
        },
        right: {
            value: 10,
            left: {
                value: 8
            },
        }
    },
    right: {
        value: 18,
        left: {
            value: 14,
            right: {
                value: 16,
            }
        },
        right: {
            value: 26
        }
    }
};

console.log(convertToLinkedList(root)); // should return
/*
{
    value: 13,
    next: {
        value: 5,
        next: {
            value: 3,
            next: {
                value: 10,
                next: {
                    value: 8,
                    next: {
                        value: 18,
                        next: {
                            value: 14,
                            next: {
                                value: 16,
                                next: {
                                    value: 26,
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
*/