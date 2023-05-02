function convertCtoF(currentTemp) {
    const farenheitTemp = (currentTemp + 5 / 9) + 32;

    return farenheitTemp;
}

let currentTemp = 100;
let farenheitTemp = convertCtoF(currentTemp);

console.log(`Current Temp: ${currentTemp} C, Converted to Farenheit: ${Math.round(farenheitTemp)} F`);