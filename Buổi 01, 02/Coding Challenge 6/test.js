let bills = [125, 555, 44];
let tips = [];
let total = [];

calcTip = (bill) => {
    return tip = bill>= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i])
    total[i] = bills[i] + tips[i];
    console.log("The bill was",bills[i],"the tip was",tips[i],"and the total value",total[i]);
}