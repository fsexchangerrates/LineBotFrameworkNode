function makeFlexGreetingMessage(flex) {
    return JSON.stringify(flex);
}

module.exports = {
    greeting: makeFlexGreetingMessage({
        type: 'flex',
        altText: "greeting",
        contents: {
            type: 'carousel',
            contents: [{
                    type: 'bubble',
                    size: 'mega',
                    body: [{
                        type: 'box',
                        layout: 'vertical'
                    }]
                },
                {
                    type: 'bubble',
                    size: 'mega',
                    body: [{
                        type: 'box',
                        layout: 'vertical'
                    }]
                },
                {
                    type: 'bubble',
                    size: 'mega',
                    body: [{
                        type: 'box',
                        layout: 'vertical'
                    }]
                }
            ]
        }
    })
}