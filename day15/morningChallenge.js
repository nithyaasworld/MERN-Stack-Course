function findAverageDistance() {

    let i = 10000000;
    let distances = [];
    while (i-- > 0) {
        let point1 = [Math.random(), Math.random()];
        let point2 = [Math.random(), Math.random()];
        let distance = Math.sqrt(((point2[0] - point1[0]) ** 2) + ((point2[1] - point1[1]) ** 2));
        distances.push(distance);
    }
    console.log(distances.reduce((a, b) => (a + b)) / distances.length);
    
    // let x = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    // let y = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

    // let allPossiblePos = [];
    // for (let i = 0; i < x.length; i++){
    //     for (let j = 0; j < y.length; j++){
    //         allPossiblePos.push([x[i], y[j]]);
    //     }
    // }
    // let distances = [];
    // for (let i = 0; i < allPossiblePos.length; i++){
    //     for (let j = 0; j < allPossiblePos.length; j++){
    //         let point1 = allPossiblePos[i];
    //         let point2 = allPossiblePos[j];
    //         let distance = Math.sqrt(((point2[0] - point1[0]) ** 2) + ((point2[1] - point1[1]) ** 2));
    //         distances.push(distance);
    //     }
    // }
    // console.log(distances.reduce((a, b) => (a + b))/distances.length);

    
}
findAverageDistance();