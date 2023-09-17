check = (sumDolphins,sumKoalas) => {
    if (sumDolphins > sumKoalas) {
        return "Dolphins is the winner team!";
    } else if (sumDolphins < sumKoalas) {
        return "Koalas is the winner team!";
    } else {
        return "No one win! Draw!";
    }
}

checkBonus = (sumDolphins,sumKoalas) => {
    if (sumDolphins >= 100) {
        if (sumKoalas >= 100) {
            if (sumDolphins > sumKoalas) {
                return "Dolphins is the winner team!";
            } else if (sumDolphins < sumKoalas) {
                return "Koalas is the winner team!";
            } else {
                return "No one win! Draw!";
            }
        } else {
            return "Dolphins is the winner team!";
        }
    } else if (sumKoalas >= 100) {
        return "Koalas is the winner team!";
    } else {
        return "No one win! No one get the trophy!";
    }
}

let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];

let sumDolphins = (dolphins.reduce((acc,cur) => acc + cur, 0) / dolphins.length).toFixed(2);
let sumKoalas = (koalas.reduce((acc,cur) => acc + cur, 0) / koalas.length).toFixed(2);
//acc trong accumulator ~ sum
//cur là phần tử được lấy vào để cộng vào sum

console.log('*Data 1: ');
console.log("Dolphins Score: ",sumDolphins);
console.log("Koalas Score: ",sumKoalas);
console.log("=>",check(sumDolphins,sumKoalas));

//
dolphins = [97, 112, 101];
koalas = [109, 95, 123];
sumDolphins = (dolphins.reduce((acc,cur) => acc + cur, 0) / dolphins.length).toFixed(2);
sumKoalas = (koalas.reduce((acc,cur) => acc + cur, 0) / koalas.length).toFixed(2);

console.log('*Data Bonus 1: ');
console.log("Dolphins Score: ",sumDolphins);
console.log("Koalas Score: ",sumKoalas);
console.log("=> Bonus(Requirement: Score >= 100): ",checkBonus(sumDolphins,sumKoalas));

//
dolphins = [97, 112, 101];
koalas = [109, 95, 106];
sumDolphins = (dolphins.reduce((acc,cur) => acc + cur, 0) / dolphins.length).toFixed(2);
sumKoalas = (koalas.reduce((acc,cur) => acc + cur, 0) / koalas.length).toFixed(2);

console.log('*Data Bonus 2: ');
console.log("Dolphins Score: ",sumDolphins);
console.log("Koalas Score: ",sumKoalas);
console.log("=> Bonus(Requirement: Score >= 100): ",checkBonus(sumDolphins,sumKoalas));