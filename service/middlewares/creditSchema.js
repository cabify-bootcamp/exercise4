
const creditSchema = {
    type: 'object',
    properties: {
        amount: {
            type: Number,
            min: 0
        }
    }
}

module.exports = {
    creditSchema
}
