const API_KEY = '326aa176990b406a8cf17b41b23450c9'
const API_URL_EXCHANGE_RATES = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`;
const API_URL_CRYPTOCOMPARE = `https://min-api.cryptocompare.com/data/price`;

const convertCurrency = async (amount, fromCurrency, toCurrency) => {
    if (toCurrency === "BTC" || toCurrency === "ETH" || toCurrency === "BNB" || toCurrency === "XRP"
    || fromCurrency === "BTC" || fromCurrency === "ETH" || fromCurrency === "BNB" || fromCurrency === "XRP") {
        convertFiatToCrypto(amount, fromCurrency, toCurrency)
    } else {
        convertFiatToFiat(amount, fromCurrency, toCurrency)
    }
}

const convertFiatToFiat = async (amount, fromCurrency, toCurrency) => {
    try {
        const response = await fetch(API_URL_EXCHANGE_RATES);
        const data = await response.json();
        const exchangeRate = data.rates[toCurrency] / data.rates[fromCurrency];
        const convertedAmount = amount * exchangeRate;
        document.getElementById('result').innerHTML = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        console.error(error);
    }
};

const convertFiatToCrypto = async (amount, fromCurrency, toCurrency) => {
    try {
        const response = await fetch(`${API_URL_CRYPTOCOMPARE}?fsym=${toCurrency}&tsyms=${fromCurrency}`);
        const data = await response.json();
        const exchangeRate = data[fromCurrency];
        const convertedAmount = amount / exchangeRate;
        if (toCurrency === "BTC" || toCurrency === "ETH" || toCurrency === "BNB" || toCurrency === "XRP"){
            document.getElementById('result').innerHTML = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(8)} ${toCurrency}`;
        } else {
            document.getElementById('result').innerHTML = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
        }
    } catch (error) {
        console.error(error);
    }
};
