function convertFtoC(currentTemp) {
   const celsiusTemp = (currentTemp - 32) * 5 / 9;

   return celsiusTemp
}

let currentTemp = -40
let celsiusTemp = convertFtoC(currentTemp);
console.log(`Current Temp: ${currentTemp} F, Converted to Celsius: ${Math.round(celsiusTemp)} C`)

