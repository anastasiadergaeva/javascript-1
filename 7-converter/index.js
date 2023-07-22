
function getConversionFactor (targetCurrency) {
    switch (targetCurrency) {
        case 'USD':
            const COEFF_USD = 86;
            return COEFF_USD;
            break;
        case 'CNY':
            const COEFF_CNY = 11;
            return COEFF_CNY;
            break;
        case 'GPB':
            const COEFF_GPB = 108;
            return COEFF_GPB;
            break;
        default: 
            return null;
    }
    return targetCurrency;
}

function currencyConversion (sumOfMoney, targetCurrency) {
    const currency = getConversionFactor(targetCurrency);
    const moneyInCurrency = currency * sumOfMoney;
    return moneyInCurrency;
}

console.log(currencyConversion(1000, 'GPB'));