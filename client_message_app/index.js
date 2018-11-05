const axios = require("axios");
const uuidv1 = require('uuid/v1');

class ClientMessagingApp {

    constructor(hostname, port){
        this.hostname = hostname || 'localhost'
        this.port = port || '9001'
        this.service = axios.create({
            baseURL: `http://${hostname}:${port}`
        });
    };

    sendMessage(destination, body) {
        const message_id = uuidv1()
        return this.service.post('/messages', {destination, body, message_id}) 
            .then( response => response.data)
            .catch( error => error.response.data )
    };

    getMessages() {
        return this.service.get('/messages') 
            .then( response => response.data)
            .catch( error => error.response.data )
    };

    creditLoader(amount) {
        return this.service.post('/credit', {amount}) 
            .then( response => response.data)
            .catch( error => error.response.data )
    };

    
    
}

module.exports = ClientMessagingApp

