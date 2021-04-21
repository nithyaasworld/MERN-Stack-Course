function whoIsNext(personArr, n) {
    if (personArr.length > n) return personArr[n - 1];
    let counter = 1;
    while (counter++ < n) {
        let currPerson = personArr.shift();
        personArr.push(currPerson, currPerson);
    }
    return personArr[0];
}

//This doesn't work yet
// function whoIsNext(personArr, n) {
//     if (personArr.length > n) return personArr[n - 1];
//     let clones = Math.floor(Math.sqrt(n / personArr.length));
//     console.log({ clones });
//     console.log(Math.pow(2, clones));
//     let peopleDrank = Math.pow(2, clones) * personArr.length;
//     console.log({ peopleDrank });
//     let nthPerson = Math.floor((n - peopleDrank) / (clones + 1)) - 1 ;
//     return personArr[nthPerson];
// }

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)) // == "Sheldon"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)) //== "Penny"
// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)) // == "Leonard"