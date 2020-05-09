const currency = require("./../messages/currency.json")
const paypal = require('./../messages/paypal.json')
const webmoney = require('./../messages/webmoney.json')
const greeting = require('./../messages/greeting.json')

function handle(client, event) {
    var richMenuId_1 = 'xsdfffffffff'
    var richMenuId_2 = 'vvvvvvvvvv'
    var data = event.postback.data
    switch (data) {
        case 'NextMenu':
            return client.linkRichMenuToUser(event.source.userId, richMenuId_2);
        case 'Previous':
            return client.linkRichMenuToUser(event.source.userId, richMenuId_1);
        case 'currency':
            return client.replyMessage(event.replyToken, currency);
        case 'paypal':
            return client.replyMessage(event.replyToken, paypal);
        case 'webmoney':
            return client.replyMessage(event.replyToken, webmoney);
        default:
            console.log(client.linkRichMenuToUser, client.replyMessage)
    }
}

module.exports = handle;