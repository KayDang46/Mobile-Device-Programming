let person_1 = {
    fullName: "Mark Miller",
    mass: "78",
    height: "1.69",
};

let person_2 = {
    fullName: "John Smith",
    mass: "92",
    height: "1.95",
};

calcBMI = (mass,height) => {
    let bmi = mass / Math.pow(height,2);
    return bmi;
}

person_1.BMI = calcBMI(person_1.mass,person_1.height).toFixed(2);
person_2.BMI = calcBMI(person_2.mass,person_2.height).toFixed(2);

if (person_1.BMI > person_2.BMI) {
    console.log(person_1.fullName,"'s BMI (",person_1.BMI,") is higher than",person_2.fullName,"'s (",person_2.BMI,")!");
} else if (person_1.BMI < person_2.BMI) {
    console.log(person_2.fullName,"'s BMI (",person_2.BMI,") is higher than",person_1.fullName,"'s (",person_1.BMI,")!");
}