sumBMI = (mass,height) => {
    let bmi = mass / Math.pow(height,2);
    return bmi;
}

let markHigherBMI = false;

check = (markBMI,johnBMI) => {
    if (markBMI > johnBMI) {
        markHigherBMI = true;
        console.log("Mark's BMI is higher than John's!");
    } else if (markHigherBMI == false) {
        if (markBMI < johnBMI) {
            console.log("John's BMI is higher than Mark's!");
        } else {
            console.log("Mark's BMI is equal to John's");
        }
    }
}

let mass = [78, 92];
let height = [1.69, 1.95];
let markBMI = sumBMI(mass[0], height[0]).toFixed(2);
let johnBMI = sumBMI(mass[1], height[1]).toFixed(2);

console.log('Data 1: ');
console.log('Mark BMI is ',markBMI);
console.log('John BMI is ',johnBMI);
check(markBMI,johnBMI);

mass = [95, 85];
height = [1.88, 1.76];
markBMI = sumBMI(mass[0], height[0]).toFixed(2);
johnBMI = sumBMI(mass[1], height[1]).toFixed(2);

markHigherBMI = false;
console.log('Data 2: ');
console.log('Mark BMI is ',markBMI);
console.log('John BMI is ',johnBMI);
check(markBMI,johnBMI);