// https://gist.github.com/McLarenCollege/a7b63e9a3fa0b860365271a3b35c4455
function numberOfPossibleIntegers(n) {

    let array = Array(n).fill('1');
    let str = array.join('');
    let result = [str];
    
    let finalResult = [];
    findAllPossibleCombination();
    return new Set(finalResult).size + 1;

    function findAllPossibleCombination() {
        while (result.length > 0) {
            let item = result.shift();
            finalResult.push(item);
            if (item.length === 2) continue;
            let itemCombination = new Set();
            item = item.split('');
            for (let i = 0; i < item.length; i++){
                let remaining = item.slice(0);
                remaining.splice(i, 1);
                for (let j = 0; j < remaining.length; j++){
                    let combinations = remaining.slice(0);
                    combinations[j] = (Number(combinations[j]) + Number(item[i])).toString();
                    combinations.sort();
                    itemCombination.add(combinations.join(''));
                }
            }
            result.push(...Array.from(itemCombination));
        }
    }
}
console.log(numberOfPossibleIntegers(4)); 
console.log(numberOfPossibleIntegers(5));
// console.log(numberOfPossibleIntegers(50));