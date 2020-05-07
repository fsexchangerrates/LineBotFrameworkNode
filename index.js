const line = require('@line/bot-sdk');
const express = require('express');

const constants = require("./app/constants")
    // create LINE SDK config from env variables
const config = {
    channelAccessToken: constants.channelAccess,
    channelSecret: constants.channelSecret,
};

// create LINE SDK client
const client = new line.Client(config);
const baseURL = process.env.BASE_URL

// create Express app
// about Express itself: https://expressjs.com/
const app = express();
const eventHandler = require('./app/eventHandler')

const path = require('path')
const greeting = require('./app/messages/greeting.json')
const currency = require('./app/messages/currency.json')
const paypal = require('./app/messages/paypal.json')
const webmoney = require('./app/messages/webmoney.json')

app.use(path('path', data.join(__dirname, 'messages')))
app.use(greeting(data.join(__filename, 'greeting')))
app.use(bodyParser.json(currency(data.join(__filename, 'currency.json'))))
app.use(bodyParser.json(paypal(data.join(__filename, 'paypal.json'))))
app.use(bodyParser.json())

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result))
        .catch((err) => {
            console.error(err);
            res.status(500).end();
        });
});

const replyText = (token, texts) => {
    texts = Array.isArray(texts) ? texts : [texts];
    return client.replyMessage(
        token,
        texts.map((text) => ({ type: 'text', text }))
    );
};

// event handler
function handleEvent(event) {
    return eventHandler(client, event, baseURL)
}

// listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});