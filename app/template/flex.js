const greeting = require('../messages/greeting.json')
const currency = require('../messages/currency.json')
const paypal = require('../messages/paypal.json')
const webmoney = require('../messages/webmoney.json')
const perfectmoney = require('../messages/perfectmoney.json')
const neteller = require('../messages/neteller.json')
const skrill = require('../messages/skrill.json')

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
        case 'perfectmoney':
            return perfectmoney;
        case 'neteller':
            return neteller;
        case 'skrill':
            return skrill;
    }
}

module.exports = {
    greeting: getMessages(greeting),
    currency: getMessages(currency),
    paypal: getMessages(paypal),
    webmoney: getMessages(webmoney),
    perfectmoney: getMessages(perfectmoney),
    neteller: getMessages(neteller),
    skrill: getMessages(skrill),
}