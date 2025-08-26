const sumForConvertion = 20;
const rubleCurrency = 'руб';
const dollarCurrency = '$';
const euroCurrency = '€';
const rubleToDollar = 0.012;
const dollarToRuble = 80.69;
const rubleToEuro =  0.011;
const euroToRuble = 93.70;
const dollarToEuro = 0.86;
const euroToDollar = 1.16;


function calculateRubleToDollar(sumForConvertion, rubleToDollar) {
        return sumForConvertion * rubleToDollar;
}
console.log(calculateRubleToDollar(sumForConvertion, rubleToDollar) + dollarCurrency);

function calculateDollarToRubble(sumForConvertion, dollarToRuble) {
        return sumForConvertion * dollarToRuble;
}
console.log(calculateDollarToRubble(sumForConvertion, dollarToRuble) + rubleCurrency);

function calculateRubleToEuro(sumForConvertion, rubleToEuro) {
        return sumForConvertion * rubleToEuro;
}
console.log(calculateRubleToEuro(sumForConvertion, rubleToEuro) + euroCurrency);

function calculateEuroToRuble(sumForConvertion, euroToRuble) {
        return sumForConvertion * euroToRuble;
}
console.log(calculateEuroToRuble(sumForConvertion, euroToRuble) + rubleCurrency);

function calculateEuroToDollar(sumForConvertion, euroToDollar) {
        return sumForConvertion * euroToDollar;
}
console.log(calculateEuroToDollar(sumForConvertion, euroToDollar) + dollarCurrency);

function calculateDollarToEuro(sumForConvertion, dollarToEuro) {
        return sumForConvertion * dollarToEuro;
}
console.log(calculateDollarToEuro(sumForConvertion, dollarToEuro) + euroCurrency);

