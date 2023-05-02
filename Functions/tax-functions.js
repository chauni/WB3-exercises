function getSocSecTax(grossPay) {
    const taxRate = 6.2 / 100
    const socSecTax = grossPay * taxRate

 return socSecTax
}

console.log(getSocSecTax(750))

function getMedicareTax(grossPay) {
    const taxRate = 1.45 / 100
    const medicareTax = grossPay * taxRate

    return medicareTax
}

console.log(getMedicareTax(750))

function getFederalTax(grossPay, witholdingCode) {
    if (witholdingCode == 0) {
        fedTaxRate = 23 / 100;
    } else if (witholdingCode == 1) {
        fedTaxRate = 21 / 100;
    } else if (witholdingCode == 2) {
        fedTaxRate = 19.5 / 100;
    } else if (witholdingCode == 3) {
        fedTaxRate = 18.5 / 100;
    } else if (witholdingCode > 4) {
        fedTaxRate = .18 - .005
    }

    const fedTax = grossPay * fedTaxRate

    return fedTax
}

console.log(getFederalTax(1000, 4));