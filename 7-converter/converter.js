const sumForConvertion = 20;
const rubleCurrency = 'руб';
const dollarCurrency = '$';
const euroCurrency = '€';

const rates = {
        RUB: { USD: 0.012, EUR: 0.011 },
        USD: { RUB: 80.69, EUR: 0.86 },
        EUR: { RUB: 93.70, USD: 1.16 }
};
const symbols = {
        RUB: rubleCurrency,
        USD: dollarCurrency,
        EUR: euroCurrency
};

function convertCurrency(sumForConvertion, fromCurrency, toCurrency) {
        if (fromCurrency === toCurrency) {
                return sumForConvertion + " " + symbols[toCurrency];
        }
        if (rates[fromCurrency] && rates[fromCurrency][toCurrency]) {
                return (sumForConvertion * rates[fromCurrency][toCurrency]).toFixed(2) + " " + symbols[toCurrency];
        }
        return null;
}


console.log(convertCurrency(sumForConvertion, "RUB", "USD"));
console.log(convertCurrency(sumForConvertion, "USD", "RUB"));
console.log(convertCurrency(sumForConvertion, "RUB", "EUR"));
console.log(convertCurrency(sumForConvertion, "EUR", "RUB"));
console.log(convertCurrency(sumForConvertion, "EUR", "USD"));
console.log(convertCurrency(sumForConvertion, "USD", "EUR"));
console.log(convertCurrency(sumForConvertion, "USD", "JPY"));