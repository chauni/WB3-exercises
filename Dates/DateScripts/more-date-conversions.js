const myBday = new Date();
myBday.setMonth(2);
myBday.setDate(5);
myBday.setFullYear(2000);
console.log(`My birthday is: ${myBday.toLocaleString()}`)

const momBday = new Date();
momBday.setMonth(5);
momBday.setDate(15);
momBday.setFullYear(1974);
console.log(`My mom's birthday is: ${momBday.toLocaleString()}`)

const dadBday = new Date();
dadBday.setMonth(2);
dadBday.setDate(24);
dadBday.setFullYear(1973);
console.log(`My dad's birthday is: ${dadBday.toLocaleString()}`)