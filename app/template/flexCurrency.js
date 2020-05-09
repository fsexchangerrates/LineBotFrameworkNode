function makeFlexCurrency(flex) {
    return JSON.stringify(flex);
}

module.exports = {
    currency: makeFlexCurrency({
        type: 'flex',
        altText: "currency",
        contents: {}
    })
}