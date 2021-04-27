class Dictionary {
    constructor(words) {
        this.words = words;
    }
    getMatchingWords(input) {
        let result = [];
        this.words.forEach(word => {
            if (word.length === input.length) {
                let matched = true;
                for (let i = 0; i < input.length; i++){
                    if (input[i] === '?') continue;
                    if (input[i] !== word[i]) {
                        matched = false;
                        break;
                    }
                }
                if (matched) result.push(word);
            }
        });
        return result;
    }
}
let fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
console.log(fruits.getMatchingWords('lemon'));     // must return []
console.log(fruits.getMatchingWords('cherr??'));   // must return []
console.log(fruits.getMatchingWords('?a?a?a'));    // must return ['banana', 'papaya']
console.log(fruits.getMatchingWords('??????'));    // must return ['banana', 'papaya', 'cherry']