function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(`${city}, ${state} ${zip}`)
}

displayMailingLabel('John Doe', '2145 Apple St.', 'Athens', 'Georgia', '31414');
console.log('------');
displayMailingLabel('Jane Doe', '3567 Orange St.', 'Rome', 'Georgia', '30249');
console.log('------');

function addNumbers(num1, num2) {
    const sum = num1 + num2;
    console.log(`${num1} + ${num2} = ${sum}`)
}

addNumbers(1, 1);
addNumbers(11, 11);
console.log('------');

function displayReceipt(totalDue, amountPaid) {
    const changeDue = totalDue - amountPaid;
    console.log(`Total Due: $ ${totalDue.toFixed(2)}`);
    console.log(`Amount Paid: $ ${amountPaid.toFixed(2)}`);

    if (changeDue <= 0) {
        console.log(`Change Due: $ ${Math.abs(changeDue)}`);
    } else {
        console.log(`Owed Amount: $ ${Math.abs(changeDue).toFixed(2)}`);
    }
}

console.log("Overpayed bill")
displayReceipt(5, 20);

console.log('------');

console.log("Exact-change bill")
displayReceipt(4.44, 4.44);

console.log('------');

console.log("Underpayed bill")
displayReceipt(12.50, 11.75);