// https://gist.github.com/McLarenCollege/49e2725953fa8abe2500a5d790fd6e8f

function treeOfWords(inputStr){

    let preOrderBTList = [];
    recursion(inputStr, preOrderBTList);
    function recursion(inputStr, preOrderBTList){
        let left = inputStr.slice(0, inputStr.length/2);
        let right = inputStr.slice(inputStr.length/2);
        preOrderBTList.push([left,right]);
        
            let innerLeft1 = left.slice(0, left.length/2);
            let innerRight1 = left.slice(left.length/2);
            
            if(innerLeft1.length > 1) {
                preOrderBTList.push([innerLeft1]);
                recursion(innerLeft1, preOrderBTList);
            } 
            if(innerRight1.length > 1){
                preOrderBTList.push([innerRight1]);
                recursion(innerRight1, preOrderBTList);
            }
        
        
            let innerLeft2 = right.slice(0, right.length/2);
            let innerRight2 = right.slice(right.length/2);
           
            if(innerLeft2.length > 1) {
                preOrderBTList.push([innerLeft2]);
                recursion(innerLeft2, preOrderBTList);
            } 
            if(innerRight2.length > 1){
                preOrderBTList.push([innerRight2]);
                recursion(innerRight2, preOrderBTList);
            }    }
    console.log(preOrderBTList);

}

// treeOfWords("helo");
treeOfWords("anjanakutty");