const messageHandler = require('./handler/message')
const followHandler = require('./handler/follow')
const postbackHandler = require('./handler/postback')

module.exports = (client, event, baseURL) => {
    console.log(event)
    switch (event.type) {
        case 'message':
            return messageHandler(client, event, baseURL)
        case 'follow':
            return followHandler(client, event)
        case 'postback':
            return postbackHandler(client, event)
    }
}