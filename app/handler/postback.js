const flex = require('../template/flex')
let richMenuId_1 = 'hhhhhhhhhhhhh'
let richMenuId_2 = 'ffffffffff'

function handle(client, event) {
    var userId = event.source.userId
    var data = event.postback.data
    switch (data) {
        case 'NextMenu':
            return client.linkRichMenuToUser(event.source.userId, richMenuId_2);
        case 'Previous':
            return client.linkRichMenuToUser(event.source.userId, richMenuId_1);
        case 'currency':
            return client.replyMessage(event.replyToken, flex.currency);
        case 'paypal':
            return client.replyMessage(event.replyToken, flex.paypal);
        case 'webmoney':
            return client.replyMessage(event.replyToken, flex.webmoney);
        case 'perfectmoney':
            return client.replyMessage(event.replyToken, flex.perfectmoney);
        case 'neteller':
            return client.replyMessage(event.replyToken, flex.neteller);
        case 'skrill':
            return client.replyMessage(event.replyToken, flex.skrill);
        default:
            console.log(client, userId, event.replyToken, `Got postback data: ${data}`);
            return client.replyMessage(event.replyToken, flex.greeting), client.linkRichMenuToUser(event.source.userId, richMenuId_1);
    }
}

module.exports = handle;