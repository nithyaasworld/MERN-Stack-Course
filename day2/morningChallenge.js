//https://gist.github.com/McLarenCollege/ff959c2d53c273586bcfb3294f25d444
function convertToLinkedList(root) {
    let list = [];
    preOrder(root);
    function preOrder(root){
         if(root) list.push(root.value);
        root.left && preOrder(root.left);
        root.right && preOrder(root.right);
    }
    if (list.length === 0) return {};
    let linkedList = {value: list[0], next: null};
    let currLL = linkedList;
    for(let i=1; i<list.length; i++){
        currLL.next = {value: list[i], next: null};
        currLL = currLL.next;
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