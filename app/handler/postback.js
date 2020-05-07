const currency = require("./../messages/currency.json")
const paypal = require('./../messages/paypal.json')
const webmoney = require('./../messages/webmoney.json')
const greeting = require('./../messages/greeting.json')

function handle(client, event) {
    var userId = event.source.userId
    var richMenuId_1 = 'xsdfffffffff'
    var richMenuId_2 = 'vvvvvvvvvv'
    var replyToken = event.replyToken
    var data = event.postback.data
    client.getPostbackData(data).then(
        (data) => {
            if (event.type === 'postback') {
                if (data === 'nextMenu') {
                    return client.linkRichMenuToUser(userId, richMenuId_2)
                } else if (data === 'previous') {
                    return client.linkRichMenuToUser(userId, richMenuId_1)
                } else if (data === 'currency') {
                    return client.replyMessage(replyToken, currency)
                } else if (data === 'paypal') {
                    return client.replyMessage(replyToken, paypal)
                } else if (data === 'webmoney') {
                    return client.replyMessage(replyToken, webmoney)
                }
            }
        }
    )

    return client.replyMessage(event.replyToken, greeting)

}

module.exports = handle;