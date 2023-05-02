/*let name = "Brenda Kaye"
let position = name.indexOf(" ");

let first = name.substring(0,6)
let last = name.substring(6)

console.log(`Name: ${name}`);
console.log(`First name: ${first}`);
console.log(`Last name: ${last}`);*/

function parseAndDisplayName(name) {
    let position = name.indexOf(" ");
    let first = name.substring(0, position)
    let last = name.substring(position + 1)

    console.log(`Name: ${name}`);
    console.log(`First name: ${first}`);
    console.log(`Last name: ${last}`);
}

parseAndDisplayName(`Brenda Kaye`)
console.log("-----");
parseAndDisplayName(`Ian Auston`)
console.log("-----");
parseAndDisplayName(`Siddalee Grace`)


