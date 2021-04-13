//https://gist.github.com/McLarenCollege/e19cc1e330f651cf2edb7d24093d8965
let IterativeRotationCipher = {
    encode: (n, string) => {
        let iteration = n;
        while (iteration-- > 0) {
            let spacePositions = [];
            string.split('').forEach((char,i) => {
                if (char === " ") spacePositions.push(i);
            });
            //Step 1 — remove all spaces:
            let stringWithoutSpace = string.split(' ').join('');
            //Step 2 — shift the order of string characters to the right by n-times:
            for (let i = 0; i < n; i++){
                let lastChar = stringWithoutSpace.slice(-1);
                stringWithoutSpace = lastChar + stringWithoutSpace.slice(0,stringWithoutSpace.length-1);
            }
            //Step 3 — place the spaces back in their original positions:
            let newString = stringWithoutSpace.split('');
             for (let i = 0; i < spacePositions.length; i++){
                newString.splice(spacePositions[i], 0, " ");
            }
            newString = newString.join('');
            //Step 4 — shift the order of characters for each space-separated substring to the right by 10:
            string = newString.split(' ')
                                .map(subString => {
                                    for (let i = 0; i < n; i++) {
                                        let lastChar = subString.slice(-1);
                                        subString = lastChar + subString.slice(0, subString.length - 1);
                                    }
                                    return subString;
                                })
                                .join(' ');
        }
        return `${n} ` + string;
    },
    decode: (inputString) => {
        let n = Number(parseInt(inputString));
        inputString = inputString.slice(n.toString().length + 1);
        let iteration = n;
        while(iteration-- > 0){
            //reversing step4: i.e. shifting the order of characters for each space-separated substring to the LEFT by 10:
            inputString = inputString.split(' ').map(subString => {
                for (let i = 0; i < n; i++) {
                    subString = subString.slice(1) + subString[0];
                }
                return subString;
            }).join(' ');
            //reversing step3: i.e. removing the space
            let spacePositions = [];
                inputString.split('').forEach((char,i) => {
                    if (char === " ") spacePositions.push(i);
                });
            inputString = inputString.split(' ').join('');
            //reversing step2: i.e. shifting the order of string characters to the LEFT by 10:
            for (let i = 0; i < n; i++){
                inputString = inputString.slice(1) + inputString[0];
            }
            //reversing step1: i.e. putting back the spaces:
            let newString = inputString.split('');
            for (let i = 0; i < spacePositions.length; i++){
                newString.splice(spacePositions[i], 0, " ");
            }
            inputString = newString.join(''); 
        }
        return inputString;
    }
}
let quote = `If you wish to make an apple pie from scratch, you must first invent the universe.`;
let solution = `10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet`;

console.log(IterativeRotationCipher.encode(10, quote));
console.log(IterativeRotationCipher.decode(solution));