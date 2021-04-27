function findAverageDistance() {
    let i = 10000000;
    let distances = [];
    while (i-- > 0) {
        let point1 = [Math.random(), Math.random()];
        let point2 = [Math.random(), Math.random()];
        let distance = Math.sqrt(((point2[0] - point1[0]) ** 2) + ((point2[1] - point1[1]) ** 2));
        distances.push(distance);
    }
    return distances.reduce((a, b) => (a + b)) / distances.length; 
}
console.log(findAverageDistance());