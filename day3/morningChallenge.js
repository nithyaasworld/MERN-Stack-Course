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
            // Step 2 — shift the order of string characters to the right by 10:
            for (let i = 0; i < n; i++){
                let lastChar = stringWithoutSpace.slice(-1);
                stringWithoutSpace = lastChar + stringWithoutSpace.slice(0,stringWithoutSpace.length-1);
            }
            // Step 3 — place the spaces back in their original positions:
            let newString = stringWithoutSpace.split('');
             for (let i = 0; i < spacePositions.length; i++){
                newString.splice(spacePositions[i], 0, " ");
            }
            newString = newString.join('');
            // Step 4 — shift the order of characters for each space-separated substring to the right by 10:
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
        return '10 ' + string;
    },
    decode: (inputString) => {
        let n = Number(parseInt(inputString));
        console.log(n);
        inputString = inputString.slice(n.toString().length + 1);
        // console.log('string is: ', inputString);
        // console.log('inputString type is: ', typeof inputString);
        // console.log(inputString.split(' '));
        // while (n-- > 0) {
        console.log('inputString: ', inputString);
        //       //reversing step4:
        inputString = inputString.split(' ').map(subString => {
            for (let i = 0; i < n; i++) {
                subString = subString.slice(1) + subString[0];
            }
            return subString;
        }).join(' ');
        // //reversing step3:
        let spacePositions = [];
            inputString.split('').forEach((char,i) => {
                if (char === " ") spacePositions.push(i);
            });
        // console.log(spacePositions);
        inputString = inputString.split(' ').join('');
        console.log(inputString);
        //reversing step2:
        for (let i = 0; i < n; i++){
            inputString = inputString.slice(1) + inputString[0];
        }
        // //putting back the spaces:
        let newString = inputString.split('');
        for (let i = 0; i < spacePositions.length; i++){
           newString.splice(spacePositions[i], 0, " ");
        }
        inputString = newString.join(''); 
        // }
        console.log(inputString);

    }
    // Step 1 — remove all spaces:
    // `Ifyouwishtomakeanapplepiefromscratch,youmustfirstinventtheuniverse.`
    
    // Step 2 — shift the order of string characters to the right by 10:
    // `euniverse.Ifyouwishtomakeanapplepiefromscratch,youmustfirstinventth`
    
    // Step 3 — place the spaces back in their original positions:
    // `eu niv erse .I fyou wi shtom ake anap plepiefr oms crat ch,yo umustf irs tinventth`
    
    // Step 4 — shift the order of characters for each space-separated substring to the right by 10:
    // `eu vni seer .I oufy wi shtom eak apan frplepie som atcr ch,yo ustfum sir htinventt`
    
    // Repeat the steps 9 more times before returning the string with `10 ` prepended.
}
let quote = `If you wish to make an apple pie from scratch, you must first invent the universe.`;
let solution = `10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet`;
// IterativeRotationCipher.encode(10,quote) === solution; //true
//console.log(IterativeRotationCipher.encode(10, quote));
IterativeRotationCipher.decode(solution);