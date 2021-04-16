// function printMultiples(n) {
//     for (let i = 1; i <= 10; i++){
//         console.log(n * i);
//     }
// }

// function printMultiplesAsync(n) {
//     for (let i = 1; i <= 10; i++){
//         setTimeout(()=>console.log(n * i), 0);
//     }
// }
// console.time('synchronous');
// printMultiples(10);
// console.timeEnd('synchronous')

// console.time('Asynchronous');
// printMultiplesAsync(10);
// console.timeEnd('Asynchronous')

//Challenge 2
console.log('Hello');
setTimeout(() => console.log(`Hello 2`), 1000);
setTimeout(() => console.log(`Hello 3`), 3000);
setTimeout(() => console.log(`Goodbye`), 5000);




