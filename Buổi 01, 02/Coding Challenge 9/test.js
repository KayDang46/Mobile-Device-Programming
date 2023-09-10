let arr = [17, 21, 23];

printForecast = (arr,day) => {
    return arr + "°C in " + day + " days...";
}

for (let i = 0; i < 2; i++) {
    console.log("Data",i+1,":");
    for (let j = 0; j < arr.length; j++) {
        console.log(printForecast(arr[j],j+1));    
    }
    arr = [12, 5, -5, 0, 4];
}