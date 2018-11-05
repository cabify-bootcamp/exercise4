const messageSchema = {
    type: 'object',
    required: ['destination', 'body'],
    properties: {
        destination: {
            type: 'string',
            maxLength: 20
        },
        body: {
            type: 'string',
            maxLength: 1000
        },
        message_id: {
            type: 'string',
        }
    }
}

module.exports = {
    messageSchema
}
