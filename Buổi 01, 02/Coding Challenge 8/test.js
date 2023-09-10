let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

calcTip = (bills) => {
    return tip = bills>= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[ i];
    }
    return sum / arr.length;
}

console.log("Average bills:",calcAverage(bills));
console.log("Average tips:",calcAverage(tips));
console.log("Average total bills:",calcAverage(totals));