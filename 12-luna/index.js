const cardNumber = '4561-2612-1234-5464';

function validateCardNumber(cardNumber) {
    cardNumber = cardNumber.replace(/-/g, '');
    const counts = cardNumber.split('').map(Number);
    if (counts.length !== 16) {
        return false;
    }
    let sum = 0;
    for (let i = counts.length - 2; i >= 0; i -= 2) {
        let double = counts[i] * 2;
        if (double > 9) {
        double -= 9;
    }
        sum += double;
    }
    for (let i = counts.length - 1; i >= 0; i -= 2) {
        sum += counts[i];
    }
    return sum % 10 === 0;
}
console.log(validateCardNumber(cardNumber));