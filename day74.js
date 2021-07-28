//https://gist.github.com/McLarenCollege/8ee36000f4aa2056b749035213225b8d
function findMinBloomDay(bloomDays, n, k){
    if (n * k > bloomDays.length) return -1;
    let day=0
    let maxDays = Math.max(...bloomDays);
    for (let i = 1; i <= maxDays; i++){
        day++;
        let bloomedArr = bloomedflowers();
        let currbouquets = 0;
        for (let j = 0; j+k-1 < bloomedArr.length; j++){
            if (bloomedArr.slice(j, j + k).every(item => item)) {
                j = j + k -1 ;
                currbouquets++;
                if (currbouquets === n) return day;
            }
        }
    }
    function bloomedflowers() {
        return bloomDays.map(bloomDay => bloomDay <= day);
    }
}
console.log(findMinBloomDay([1, 10, 3, 10, 2], 3, 1));
console.log(findMinBloomDay([1, 10, 3, 10, 2], 2, 2));
console.log(findMinBloomDay([1, 10, 3, 10, 2], 3, 2));