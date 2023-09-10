let billvalue = [275, 40, 430];
let tip;
let totalvalue;
// [condition] ? [if] : [else]
// If (billvalue >= 50 && billvalue <= 300) then (tip = billvalue * 0.15) else (tip = billvalue * 0.2) 

for (let i = 0; i < billvalue.length; i++) {
    tip = billvalue[i] >= 50 && billvalue[i] <= 300 ? billvalue[i] * 0.15 : billvalue[i] * 0.2;
    totalvalue = billvalue[i] + tip;
    console.log("The bill was",billvalue[i],"the tip was",tip,"and the total value",totalvalue);
}