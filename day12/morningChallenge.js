function whoIsNext(personArr, n) {
    if (personArr.length > n) return personArr[n - 1];
    let count = personArr.length;
    let i = 1;
    while ((count + Math.pow(2, i) * personArr.length) < n) {
        count += (Math.pow(2, i) * personArr.length);
        i++;
    }
    let copies = count/personArr.length;
    return personArr[Math.floor((n - count)/copies)];
}
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)) // == "Sheldon"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)) //== "Penny"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)) // == "Leonard"