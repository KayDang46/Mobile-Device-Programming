checkWinner = (avgDolphins,avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        console.log("Dolphins win (",avgDolphins,"vs.",avgKoalas,")");
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log("Koalas win(",avgKoalas,"vs.",avgDolphins);
    } else {
        console.log("No one win!");
    }
}

calcAverage = (array) => {
    if (!Array.isArray(array))
        return;
    let sum = 0;
    for (let i = 0, l = array.length; i < l; i++) {
        sum += array[i];
    }
    return sum;
}

console.log("Data 1:");
let dolphins = [44, 23, 71];
let koalas = [65, 54, 49];

let avgDolphins = calcAverage(dolphins);
let avgKoalas = calcAverage(koalas);
checkWinner(avgDolphins, avgKoalas);


console.log("Data 2:");
dolphins = [85, 54, 41];
koalas = [23, 34, 27];

avgDolphins = calcAverage(dolphins);
avgKoalas = calcAverage(koalas);
checkWinner(avgDolphins, avgKoalas);