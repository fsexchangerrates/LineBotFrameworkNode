const greeting = require('../messages/greeting.json')
const currency = require('../messages/currency.json')
const paypal = require('../messages/paypal.json')
const webmoney = require('../messages/webmoney.json')

function getMessages(message) {
    switch (message) {
        case 'greeting':
            return greeting;
        case 'currency':
            return currency;
        case 'paypal':
            return paypal;
        case 'webmoney':
            return webmoney;
    }
}

module.exports = {
    greeting: getMessages(greeting),
    currency: getMessages(currency),
    paypal: getMessages(paypal),
    webmoney: getMessages(webmoney),
}