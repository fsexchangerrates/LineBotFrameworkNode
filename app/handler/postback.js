const currency = require("./../messages/currency.json")

function handle(client, event) {
    var userId = event.source.userId
    var richMenuId_1 = 'xsdfffffffff'
    var richMenuId_2 = 'vvvvvvvvvv'
    var replyToken = event.replyToken
    var data = event.postback.data
    client.getPosbackData(data).then(
        (data) => {
            if (event.type === 'postback') {
                if (data === 'nextMenu') {
                    return client.linkRichMenuToUser(userId, richMenuId_2)
                } else if (data === 'previous') {
                    return client.linkRichMenuToUser(userId, richMenuId_1)
                } else if (data === 'currency') {
                    return client.replyMessage(replyToken, currency)
                }
            }
        }
    )

}

module.exports = handle