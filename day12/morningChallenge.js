function whoIsNext(personArr, n) {
    if (personArr.length > n) return personArr[n - 1];
    let count = personArr.length;
    let i = 1;
    while ((count + Math.pow(2, i) * personArr.length) < n) {
        count += (Math.pow(2, i) * personArr.length);
        i++;
    }
    let copies = Math.pow(2, i);

    return Math.ceil((n - (copies * personArr.length))/Math.pow(2,i));
}

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)) // == "Sheldon"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)) //== "Penny"
// console.log("============================");
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)) // == "Leonard"