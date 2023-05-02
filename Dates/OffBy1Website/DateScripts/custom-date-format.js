const months = ["January", "February", "March", "April",
"May", "June", "July", "August", "September",
"October", "November", "December"];

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];


const currentDate = new Date();

let day = currentDate.getDate()
let year = currentDate.getFullYear()
let weekdayName = weekdays[currentDate.getDay()];
let month = months[currentDate.getMonth()];



console.log(`The current date is: ${day}-${month}-${year} (${weekdayName}) `);