function minStep(string1, string2) {
    let subString1 = findallSubstring(string1);
    let subString2 = findallSubstring(string2);
    let commonsubString = commonLongestsubString(subString1, subString2);
    while (commonsubString.length > 1) {
        string1 = string1.replace(commonsubString, '');
        string2 = string2.replace(commonsubString, '');
        subString1 = findallSubstring(string1);
        subString2 = findallSubstring(string2);
        commonsubString = commonLongestsubString(subString1, subString2);
    } 
    console.log(string1, string2);
  
    function findallSubstring(input) {
        let subString = [];
        for (let i = 0; i < input.length - 1; i++){
            for (let j = i + 1; j < input.length; j++){
                subString.push(input.slice(i, j + 1));
            }
        }
        return subString;
        }
    function commonLongestsubString(subString1, subString2) {
        let longestCommonSubstring = '';
        subString1.forEach(str => {
            if (subString2.includes(str)
                && str.length > longestCommonSubstring.length) {
                longestCommonSubstring = str;
            }
        });
        return longestCommonSubstring;
    }
}
minStep('anshuman', 'antihuman');