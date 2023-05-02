function getSupplier(code) {
    let position = code.indexOf(":");

    return code.substring(0, position);
}

function getProductNumber(code) {
    let position1 = code.indexOf(":");
    let position2 = code.indexOf("-");

    return code.substring(position1 + 1, position2)
}

function getSize(code) {
    let dashPos = code.indexOf("-");

    return code.substring(dashPos + 1);
}

const supplierCode1 = 'ACME:123-L'
const supplierCode2 = 'DI:12345-M'
const supplierCode3 = 'ACE:1-12'

console.log(`Supplier Code: ${getSupplier(supplierCode1)}`)
console.log(`Product Number: ${getProductNumber(supplierCode1)}`)
console.log(`Product Size: ${getSize(supplierCode1)}`);

console.log("------");

console.log(`Supplier Code: ${getSupplier(supplierCode2)}`)
console.log(`Product Number: ${getProductNumber(supplierCode2)}`)
console.log(`Product Size: ${getSize(supplierCode2)}`);

console.log("------");

console.log(`Supplier Code: ${getSupplier(supplierCode3)}`)
console.log(`Product Number: ${getProductNumber(supplierCode3)}`)
console.log(`Product Size: ${getSize(supplierCode3)}`);
